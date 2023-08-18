import { Hono } from 'hono'

import { courseController, subjectController } from '@controllers'

const v1 = new Hono().basePath('/v1')

v1.get('/courses', courseController.getCourses)
v1.get('/subjects', subjectController.getSubjects)

export default v1
