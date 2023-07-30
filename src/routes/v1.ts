import { Hono } from 'hono'

import { courseController } from '@controllers'

const v1 = new Hono().basePath('/v1')

v1.get('/courses', courseController.getCourses)

export default v1
