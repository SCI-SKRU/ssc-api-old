import { PrismaClient } from '@prisma/client'

import { course, category, subject } from './seeds'

const prisma = new PrismaClient()

async function main() {
  await prisma.course.createMany({
    data: course.data,
  })

  await prisma.subjectCategory.createMany({
    data: category.data,
  })

  await prisma.subject.createMany({
    data: subject.data,
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
