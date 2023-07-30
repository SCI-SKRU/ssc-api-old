const environment = {
	app: {
		port: Number(process.env.APP_PORT) || 3000,
	},
	redis: {
		host: process.env.REDIS_HOST || 'localhost',
		port: Number(process.env.REDIS_PORT) || 6379,
	},
}

export default environment
