import { PrismaClient } from '@prisma/client'

import { course, category } from './seeds'

const prisma = new PrismaClient()

async function main() {
	await prisma.course.createMany({
		data: course.data,
	})

	await prisma.subjectCategory.createMany({
		data: category.data,
	})
}
main()
	.then(async () => {
		await prisma.$disconnect()
	})
	.catch(async (e) => {
		console.error(e)
		await prisma.$disconnect()
		process.exit(1)
	})
