import { Context } from 'hono'
import dayjs from 'dayjs'

import { Prisma } from '@utils'

const getSubjects = async (ctx: Context) => {
  try {
    const { startDate, endDate } = ctx.req.query()
    const start = dayjs(startDate).startOf('day')
    const end = dayjs(endDate).endOf('day')

    const subjects = await Prisma.subject.findMany({
      where: {
        NOT: {
          BookingDetail: {
            some: {
              AND: [
                { startedAt: { gte: start.toDate() } },
                { startedAt: { lt: end.toDate() } },
              ],
            },
          },
        },
      },
      select: {
        id: true,
        code: true,
        name: true,
        price: true,
        status: true,
        level: true,
        SubjectCategory: {
          select: { name: true },
        },
      },
    })

    return ctx.json({
      status: 'success',
      subjects: subjects.map((subject) => {
        const { SubjectCategory, ...modSubject } = subject

        return {
          category: SubjectCategory.name,
          ...modSubject,
        }
      }),
    })
  } catch (error) {
    return ctx.json({
      status: 'error',
      error,
    })
  }
}

export default { getSubjects }
