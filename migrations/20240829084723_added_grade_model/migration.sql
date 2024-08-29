-- CreateTable
CREATE TABLE "grades" (
    "id" SERIAL NOT NULL,
    "studentId" INTEGER NOT NULL,
    "studentNumber" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "middleInit" TEXT,
    "subjectCode" TEXT NOT NULL,
    "units" INTEGER NOT NULL,
    "courseTitle" TEXT NOT NULL,
    "grade" DOUBLE PRECISION NOT NULL,
    "reExam" DOUBLE PRECISION,
    "remarks" TEXT,
    "faculty" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "grades_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "grades" ADD CONSTRAINT "grades_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "students"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
