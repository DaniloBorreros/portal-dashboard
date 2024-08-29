-- CreateTable
CREATE TABLE "students" (
    "id" SERIAL NOT NULL,
    "studentNumber" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "middleName" TEXT,
    "lastName" TEXT NOT NULL,
    "birthday" TIMESTAMP(3) NOT NULL,
    "sex" TEXT NOT NULL,
    "religion" TEXT,
    "civilStatus" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "guardian" TEXT NOT NULL,
    "contactNumber" TEXT NOT NULL,
    "course" TEXT NOT NULL,
    "section" TEXT NOT NULL,

    CONSTRAINT "students_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "students_studentNumber_key" ON "students"("studentNumber");
