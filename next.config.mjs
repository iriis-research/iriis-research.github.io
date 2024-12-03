// next.config.mjs


import mdx from '@next/mdx';

const withMDX = mdx({
  extension: /\.mdx?$/,
});

export default withMDX({
  output: "export", // optional, for serverless or containerized environments
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'], // Ensure Next.js recognizes .md and .mdx files as pages
});
