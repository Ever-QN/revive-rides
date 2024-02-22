/** @type {import('next').NextConfig} */

const redirects = [
    {
      source: '/app/home',
      destination: '/home',
      permanent: true,
    },
  ];
  
  const nextConfig = {
    async redirects() {
      return redirects;
    },
  };
  
  export default nextConfig;
  