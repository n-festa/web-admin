/** @type {import('next').NextConfig} */
const path = require('path')
const nextConfig = {
	reactStrictMode: true,
  	swcMinify: true,
  	sassOptions: {
    	includePaths: [path.join(__dirname, 'styles')],
  	},
  	images: {
    	domains: ['img.pokemondb.net'],
  	},
  	compiler: {
    	// Enables the styled-components SWC transform
    	styledComponents: true
  	}
}

module.exports = nextConfig

