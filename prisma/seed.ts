import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function main() {
	await prisma.course.createMany({
		data: [
			{
				name: 'คอร์ส 6 ชั่วโมง',
				description: '(หนึ่งวัน, 9.00-16.00) เลือกได้ 2 วิชา',
				timeSlot: 2,
			},
			{
				name: 'คอร์ส 9 ชั่วโมง',
				description:
					'(สองวัน, วันแรก 9.00-16.00 และวันที่สอง 9.00-12.00) เลือกได้ 3 วิชา + กิจกรรมช่วงคํ่า (เลือกหรือไม่เลือกก็ได้)',
				timeSlot: 3,
			},
			{
				name: 'คอร์ส 12 ชั่วโมง',
				description:
					'(สองวัน, วันแรก 9.00-16.00 และวันที่สอง 9.00-16.00) เลือกได้ 4 วิชา + กิจกรรมช่วงคํ่า (เลือกหรือไม่เลือกก็ได้)',
				timeSlot: 4,
			},
			{
				name: 'คอร์ส 15 ชั่วโมง',
				description:
					'(สองวัน, วันแรก 9.00-16.00, วันที่สอง 9.00-16.00 และวันที่ 3 9.00-12.00) เลือกได้ 5 วิชา + กิจกรรมช่วงคํ่า 2 ครั้ง (เลือกหรือไม่เลือกก็ได้)',
				timeSlot: 5,
			},
			{
				name: 'คอร์ส 18 ชั่วโมง',
				description:
					'(สองวัน, วันแรก 9.00-16.00, วันที่สอง 9.00-16.00 และวันที่ 3 9.00-16.00) เลือกได้ 6 วิชา + กิจกรรมช่วงคํ่า 2 ครั้ง (เลือกหรือไม่เลือกก็ได้)',
				timeSlot: 6,
			},
		],
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