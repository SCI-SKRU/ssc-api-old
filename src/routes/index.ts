import { Hono } from 'hono'
import { cors } from 'hono/cors'

import info from './info'
import v1 from './v1'

const app = new Hono().basePath('/api')

app.use('*', cors())
app.route('', info)
app.route('', v1)

export default app
