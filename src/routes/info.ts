import { Hono } from 'hono'

import { infoController } from '@controllers'

const info = new Hono()

info.get('/', infoController.getInfo)

export default info
