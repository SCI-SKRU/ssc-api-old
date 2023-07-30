import { Context } from 'hono'

import prisma from '@utils/prisma'

const getCourses = async (ctx: Context): Promise<Response> => {
	try {
		const courses = await prisma.course.findMany({
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
