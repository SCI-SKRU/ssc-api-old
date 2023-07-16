import { serve } from '@hono/node-server'
import { Hono } from 'hono'

import { environment } from './config'

const app = new Hono()

app.get('/', (c) => c.text('Hello Hono!'))

serve(
  {
    fetch: app.fetch,
    port: environment.app.port,
  },
  () => console.log(`Server is running on port: ${environment.app.port}`)
)
