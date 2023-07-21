import { serve } from '@hono/node-server'

import app from './routes'
import { environment } from './config'

serve(
	{
		fetch: app.fetch,
		port: environment.app.port,
	},
	() => console.log(`Server is running on port: ${environment.app.port}`)
)
