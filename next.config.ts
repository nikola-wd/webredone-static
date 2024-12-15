import type { NextConfig } from 'next';

import withMDX from '@next/mdx';

const nextConfig: NextConfig = withMDX()({
  /* config options here */
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx', 'md'],
});

export default nextConfig;
