/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

// module.exports = nextConfig;

module.exports = {
  images: {
    domains: ['img.autoum.com', 'mir-s3-cdn-cf.behance.net', 'carsweek.ru'],
  },
};
