import { Context } from 'hono'

import { Prisma } from '@utils'

const getCourses = async (ctx: Context): Promise<Response> => {
  try {
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
