import { Hono } from 'hono'

import info from './info'
import v1 from './v1'

const app = new Hono().basePath('/api')

app.route('', info)
app.route('', v1)

export default app
