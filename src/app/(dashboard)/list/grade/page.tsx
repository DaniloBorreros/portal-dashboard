"use client"

import React, {useState} from 'react'
import Table from '@/components/Table';
import { gradeData, role } from '@/_lib/data';
import FormModal from '@/components/FormModal';
import Link from 'next/link';
import Image from 'next/image';


type Grade = {
    id:number;
    courseCode:string;
    courseTitle: string;
    creditUnit:number;
    finalGrade:number;
    completion: string;
    teacher:string;
    academicYear: string;
    
}

const columns = [
    {
        header:"Course Code", 
        accessor:"courseCode",
        className: "text-center"
    },
    {
        header:"Course Title",
        accessor:"courseTitle",
        className: "hidden md:table-cell text-center"
    },  
    {
        header:"Credit Unit",
        accessor:"creditUnit",
        className: "hidden md:table-cell text-center"
    },
    {
        header:"Final Grade",
        accessor:"finalGrade",
        className: "text-center"
        
    },
    {
        header:"Completion",
        accessor:"completion",
        className: "hidden md:table-cell text-center"
    }, 
    {
        header:"Teacher",
        accessor:"teacher",
        className: "hidden md:table-cell text-center"
    },
       
    
]


const GradePage = () => {
    const currentYear = new Date().getFullYear();
    const [academicYear, setAcademicYear] = useState(`${currentYear - 1}-${currentYear}`);

    const filteredGrades = gradeData.filter(grade => grade.academicYear === academicYear);

    const renderRow = (item:Grade)=> (
        <tr key={item.id} className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight">
            <td className="gap-4 p-4 text-center">
            {item.courseCode}
            </td>
            <td className="hidden md:table-cell text-center">{item.courseTitle}</td>
            
            <td className="hidden md:table-cell text-center">{item.creditUnit}</td>
            <td className='text-center'>{item.finalGrade}</td>
            <td className="hidden md:table-cell text-center">{item.completion}</td>
            <td className="hidden md:table-cell text-center">{item.teacher}</td>
            <td>
            </td>
        </tr>
                );
  return (
    <>
    {role === "student" && (
    <>
    <div className='bg-white p-4 rounded-md flex-1 m-4 mt-0'>
        <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">Grades </h1>
        <Link href="/printgrades">
            <Image src="/print.png" alt="Print" className="inline-block w-5 h-5" width={5} height={5} />
        </Link>

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
    </>
    )}
    {role === "admin" && (
    <>
    <>
    <div className='bg-white p-4 rounded-md flex-1 m-4 mt-0 flex justify-between items-center'>
        <h1 className="text-lg font-semibold">Upload Grades</h1>

        <FormModal type='create' table='grades'/>
        
    </div>
    </>
    <>
    <div className='bg-white p-4 rounded-md flex-1 m-4 mt-0 flex justify-between items-center'>
    <Table columns={[
        {
            header: "Student Number",
            accessor: "studentNumber",
            className: "text-center",
          },
          {
            header: "Name",
            accessor: "name",
            className: "text-center",
          },
          {
            header: "Course",
            accessor: "course",
            className: "text-center",
          },
          
          {
            header: "View All Grades",
            accessor: "actions",
            className: "text-center",
          }
        ]} renderRow={(row) => (
          <tr key={row.studentNumber} className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight">
            <td className="p-4">{row.studentNumber}</td>
            <td className="p-4">{row.name}</td>
            <td className="p-4">{row.course}</td>
            <td className="p-4">
              <Link href={`/dashboard/grades/${row.studentNumber}`}>
                <a className="text-blue-600 hover:text-blue-900">View All Grades</a>
              </Link>
            </td>
          </tr>
        )} data={JSON.parse(localStorage.getItem('grades') || '[]')}/>
        </div>
        
    </>

    </>
    )}

    </>
    
    


  )
}

export default GradePage

