// app/(pages)/portfolio/[slug]/page.tsx
import { notFound } from 'next/navigation';
import fs from 'node:fs/promises';
import path from 'node:path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Image from 'next/image';
import { PortfolioSingleHero } from '@/app/components/PortfolioSingle/PortfolioSingleHero';
import { PortfolioSingleAlternatingSection } from '@/app/components/PortfolioSingle/PortfolioSingleAlternatingSection';

export interface PortfolioImage {
  url: string;
  alt: string;
}

interface PortfolioSection {
  type: 'text-image';
  title: string;
  text: string;
  image: PortfolioImage; // Single image instead of array
}

interface PortfolioFrontmatter {
  slug: string;
  title: string;
  description: string;
  heroText: string;
  heroImage: string;
  breadcrumbs: {
    name: string;
    href: string;
  }[];
  sections: PortfolioSection[];
}

interface Props {
  params: { slug: string };
}

const mdxComponents = {
  h1: (props: any) => <h1 className="text-4xl font-bold my-4" {...props} />,
  h2: (props: any) => <h2 className="text-3xl font-semibold my-3" {...props} />,
  strong: (props: any) => (
    <strong className="font-bold text-[#162838]" {...props} />
  ),
  img: ({ src, alt, ...props }: any) => (
    <div className="relative w-full h-[400px]">
      <Image
        src={src}
        alt={alt || ''}
        fill
        className="rounded-lg object-cover"
        {...props}
      />
    </div>
  ),
};
async function getPortfolioEntry(slug: string) {
  try {
    const filePath = path.join(
      process.cwd(),
      'app/data/portfolio',
      `${slug}.mdx`
    );
    const source = await fs.readFile(filePath, 'utf8');
    const { data, content } = matter(source);

    return {
      frontmatter: data as PortfolioFrontmatter,
      content,
    };
  } catch (error) {
    return null;
  }
}

export async function generateStaticParams() {
  const dir = path.join(process.cwd(), 'app/data/portfolio');
  const files = await fs.readdir(dir);
  return files
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => ({
      slug: file.replace(/\.mdx$/, ''),
    }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;

  const entry = await getPortfolioEntry(slug);

  if (!entry) {
    return {
      title: 'Not Found',
      description: 'The page you are looking for does not exist.',
    };
  }

  return {
    title: entry.frontmatter.title,
    description: entry.frontmatter.description,
  };
}

export default async function PortfolioPage(props: Props) {
  const { slug } = await props.params;

  const entry = await getPortfolioEntry(slug);

  if (!entry) {
    notFound();
  }

  const { frontmatter, content } = entry;

  return (
    <article className="min-h-screen bg-[#f8f7fa]">
      <PortfolioSingleHero
        title={frontmatter.heroText}
        heroImage={frontmatter.heroImage}
        breadcrumbs={frontmatter.breadcrumbs}
      />
      {frontmatter.sections?.map((section, idx) => (
        <PortfolioSingleAlternatingSection
          key={idx}
          title={section.title}
          text={section.text}
          image={section.image}
          isAlternate={idx % 2 === 1}
          className={idx % 2 === 0 ? 'bg-white' : 'bg-[#f8f7fa]'}
        />
      ))}
      {/* MDX Content if needed */}
      {content && (
        <div className="container mx-auto px-4 py-16">
          <div className="prose prose-lg max-w-none">
            <MDXRemote source={content} components={mdxComponents} />
          </div>
        </div>
      )}
    </article>
  );
}
