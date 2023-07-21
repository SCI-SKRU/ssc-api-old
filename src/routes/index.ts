import { Hono } from 'hono'

import info from './info'

const app = new Hono().basePath('/api')

app.route('', info)

export default app
