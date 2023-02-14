module.exports = {
	upload: {
		config: {
			provider: "strapi-provider-upload-dos", 
			providerOptions: {
				key: process.env.SPACES_ACCESS,
				secret: process.env.SPACES_SECRET,
				endpoint: process.env.SPACES_ENDPOINT,
				space: process.env.SPACES_BUCKET,
				directory: process.env.SPACES_DIRECTORY
			},
		},
	}, 
};
