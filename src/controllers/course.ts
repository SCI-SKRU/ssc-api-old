import { Context } from 'hono'

import { Prisma, Redis } from '@utils'
import { environment } from '@config'

const getCourses = async (ctx: Context): Promise<Response> => {
  try {
    const coursesCache = await Redis.get('course')

    if (coursesCache) {
      return ctx.json({
        status: 'success',
        courses: JSON.parse(coursesCache),
      })
    }

    const courses = await Prisma.course.findMany({
      select: {
        name: true,
        description: true,
        timeSlot: true,
      },
      orderBy: {
        timeSlot: 'asc',
      },
    })

    await Redis.set('course', JSON.stringify(courses), { EX: environment.redis.generalTTL })

    return ctx.json({
      status: 'success',
      courses,
    })
  } catch (error) {
    return ctx.json({
      status: 'error',
      error,
    })
  }
}

export default { getCourses }
