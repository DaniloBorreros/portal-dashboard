"use client"

import React, {useState} from 'react'
import { headers } from "next/headers"
import Table from '@/components/Table';
import { gradeData } from '@/lib/data';

type Grade = {
    id:number;
    courseCode:string;
    courseTitle: string;
    creditUnit:number;
    finalGrade:number;
    teacher:string;
    academicYear: string;
}

const columns = [
    {
        header:"Course Code", 
        accessor:"courseCode"
    },
    {
        header:"Course Title",
        accessor:"courseTitle",
    },  
    {
        header:"Credit Unit",
        accessor:"creditUnit",
        className: "hidden md:table-cell"
    },
    {
        header:"Final Grade",
        accessor:"finalGrade",
        className: "hidden md:table-cell"
    },
    {
        header:"Teacher",
        accessor:"teacher",
        className: "hidden md:table-cell"
    },   
    
]


const GradePage = () => {
    const currentYear = new Date().getFullYear();
    const [academicYear, setAcademicYear] = useState(`${currentYear - 1}-${currentYear}`);

    const filteredGrades = gradeData.filter(grade => grade.academicYear === academicYear);

    const renderRow = (item:Grade)=> (
        <tr key={item.id} className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight">
            <td className="flex items-center gap-4 p-4">
            {item.courseCode}
            </td>
            <td className="hidden md:table-cell">{item.courseTitle}</td>
            <td className="hidden md:table-cell">{item.creditUnit}</td>
            <td className="hidden md:table-cell">{item.finalGrade}</td>
            <td className="hidden md:table-cell">{item.teacher}</td>
            <td>
            </td>
        </tr>
                );
  return (
    <div className='bg-white p-4 rounded-md flex-1 m-4 mt-0'>
        <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">Grades</h1>
        </div>
        <div className="mt-4">
          <label htmlFor="grade" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Select Academic Year</label>
          <select id="grade" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-max p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={academicYear} onChange={e => setAcademicYear(e.target.value)}>
            {gradeData
              .map(grade => grade.academicYear)
              .filter((academicYear, index, self) => self.indexOf(academicYear) === index)
              .map(academicYear => (
                <option key={academicYear} value={academicYear}>
                  Academic year {academicYear}
                </option>
              ))}
          </select>
          

        </div>
        {/* LIST */}
        <Table columns={columns} renderRow={renderRow} data={filteredGrades} />
        <div className="mt-4 text-sm font-medium flex items-center justify-center">
            <p className="text-gray-900 dark:text-black">
                Average Grade: {(filteredGrades.reduce((total, grade) => total + grade.finalGrade, 0) / filteredGrades.length).toFixed(2)}
            </p>
        </div>
    </div>

  )
}

export default GradePage
