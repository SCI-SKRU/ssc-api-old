/*
  Warnings:

  - You are about to drop the `Booking` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `BookingDetail` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `updatedAt` to the `courses` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Booking" DROP CONSTRAINT "Booking_couponId_fkey";

-- DropForeignKey
ALTER TABLE "BookingDetail" DROP CONSTRAINT "BookingDetail_bookingId_fkey";

-- DropForeignKey
ALTER TABLE "BookingDetail" DROP CONSTRAINT "BookingDetail_subjectId_fkey";

-- AlterTable
ALTER TABLE "courses" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- DropTable
DROP TABLE "Booking";

-- DropTable
DROP TABLE "BookingDetail";

-- CreateTable
CREATE TABLE "bookings" (
    "id" SERIAL NOT NULL,
    "code" VARCHAR(50) NOT NULL,
    "status" "BookingStatus" NOT NULL DEFAULT 'BOOKING',
    "school" VARCHAR(100) NOT NULL,
    "schoolSize" "SchoolSize" NOT NULL,
    "district" VARCHAR(50) NOT NULL,
    "subDistrict" VARCHAR(50) NOT NULL,
    "province" VARCHAR(50) NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "position" VARCHAR(50) NOT NULL,
    "email" VARCHAR(50) NOT NULL,
    "phone" VARCHAR(10) NOT NULL,
    "classroomCount" SMALLINT NOT NULL,
    "operationPrice" DOUBLE PRECISION NOT NULL,
    "total" DOUBLE PRECISION NOT NULL,
    "couponId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "bookings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "booking_details" (
    "id" SERIAL NOT NULL,
    "bookingId" INTEGER NOT NULL,
    "subjectId" INTEGER NOT NULL,
    "startedAt" TIMESTAMP(3) NOT NULL,
    "endedAt" TIMESTAMP(3) NOT NULL,
    "nightPrice" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "price" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "booking_details_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "bookings_code_key" ON "bookings"("code");

-- AddForeignKey
ALTER TABLE "bookings" ADD CONSTRAINT "bookings_couponId_fkey" FOREIGN KEY ("couponId") REFERENCES "coupons"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "booking_details" ADD CONSTRAINT "booking_details_subjectId_fkey" FOREIGN KEY ("subjectId") REFERENCES "subjects"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "booking_details" ADD CONSTRAINT "booking_details_bookingId_fkey" FOREIGN KEY ("bookingId") REFERENCES "bookings"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
