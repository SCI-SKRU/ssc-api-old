import { createClient } from 'redis'

import { environment } from '@config'

const client = createClient({
	socket: {
		host: environment.redis.host,
		port: environment.redis.port,
	},
})

if (!client.isOpen) {
	client.connect()
}

export default client
