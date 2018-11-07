/**
 * Copyright (c) 2017-present, smash.gg, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// // List of projects/orgs using your project for the users page.
// const users = [
//	 {
//		 caption: 'User1',
//		 // You will need to prepend the image path with your baseUrl
//		 // if it is not '/', like: '/test-site/img/docusaurus.svg'.
//		 image: '/img/docusaurus.svg',
//		 infoLink: 'https://www.smash.gg.com',
//		 pinned: true,
//	 },
// ];

const siteConfig = {
	title: 'Developer Portal', // Title for your website.
	tagline: 'Turning passions into careers',
	url: 'https://developer.smash.gg', // Your website URL
	baseUrl: '/', // Base URL for your project */
	// For github.io type URLs, you would set the url and baseUrl like:
	//	 url: 'https://smash.gg.github.io',
	//	 baseUrl: '/test-site/',

	// Used for publishing and more
	projectName: 'smashgg-developer',
	organizationName: 'smashgg',
	// For top-level user or org sites, the organization is still the same.
	// e.g., for the https://JoelMarcey.github.io site, it would be set like...
	//	 organizationName: 'JoelMarcey'

	// For no header links in the top nav bar -> headerLinks: [],
	headerLinks: [
		{doc: 'intro', label: 'Docs'},
		{href: 'https://smash.gg/developer/explorer', label: 'API Explorer'},
		{page: 'help', label: 'Help'},
		{blog: true, label: 'Blog'},
	],

	// If you have users set above, you add it here:
//	 users,

	/* path to images for header/footer */
	headerIcon: 'img/logo-white.svg',
	footerIcon: 'img/favicon/favicon.ico',
	favicon: 'img/favicon/favicon.ico',

	/* Colors for website */
	colors: {
		primaryColor: '#CB333B',
		secondaryColor: '#000000',
	},

	/* Custom fonts for website */
	fonts: {
		myFont: [
			"Roboto",
		"-apple-system",
		"system-ui"
		],
		myOtherFont: [
			"Roboto"
		]
	},

	// This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
	copyright: `Copyright © ${new Date().getFullYear()} smash.gg`,

	highlight: {
		// Highlight.js theme to use for syntax highlighting in code blocks.
		theme: 'default',
	},

	// Add custom scripts here that would be placed in <script> tags.
	scripts: ['https://buttons.github.io/buttons.js'],

	// On page navigation for the current documentation page.
	onPageNav: 'separate',
	// No .html extensions for paths.
	cleanUrl: true,

	// Open Graph and Twitter card images.
//	 ogImage: 'img/docusaurus.png',
//	 twitterImage: 'img/docusaurus.png',

	// Show documentation's last contributor's name.
	// enableUpdateBy: true,

	// Show documentation's last update time.
	// enableUpdateTime: true,

	// You may provide arbitrary config keys to be used as needed by your
	// template. For example, if you need your repo's URL...
		repoUrl: 'https://github.com/smashgg/developer-portal',
};

module.exports = siteConfig;