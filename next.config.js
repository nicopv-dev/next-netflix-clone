/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  images: {
    domains: [
      'image.tmdb.org',
      'lh3.googleusercontent.com',
      'www.gravatar.com',
      'via.placeholder.com',
      'previews.123rf.com',
    ],
  },
}
