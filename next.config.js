/** @type {import('next').NextConfig} */
const path = require('path')
const nextConfig = {
	reactStrictMode: true,
  	swcMinify: true,
  	sassOptions: {
    	includePaths: [path.join(__dirname, 'styles')],
  	},
  	images: {
    	remotePatterns: [
      		{
		        protocol: 'https',
		        hostname: 'img.pokemondb.net',
		        port: '',
      		},
    	],
  	},
  	compiler: {
    	// Enables the styled-components SWC transform
    	styledComponents: true
  	}
}

module.exports = nextConfig

