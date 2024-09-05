// src/types/types.d.ts

export interface Student {
  id: number;
  email: string;
  firstName: string;
  middleInit?: string;
  lastName: string;
  Suffix?: string;
  birthDate: Date;
  address: string;
  phone?: string;
  password: string;
  studentNumber: string;
  grades: Grade[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Grade {
  id: number;
  studentId: any;
  studentNumber: string;
  surName: string;
  firstName: string;
  middleInit: string;
  subjectCode: string;
  units: number;
  courseTitle: string;
  grade: number;
  reExam?: number;
  remarks?: string;
  faculty: string;
  createdAt: Date;
  updatedAt: Date;
}
