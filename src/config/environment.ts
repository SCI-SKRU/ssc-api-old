const environment = {
  app: {
    port: Number(process.env.APP_PORT) || 3000,
  },
  redis: {
    host: process.env.REDIS_HOST || 'localhost',
    port: Number(process.env.REDIS_PORT) || 6379,
    generalTTL: Number(process.env.REDIS_GENERAL_TTL) || 3600,
  },
}

export default environment
