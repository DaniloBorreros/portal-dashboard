"use client";

import React, { useState } from 'react';
import Table from '@/components/Table';
import { checklistData } from '@/lib/data';

const Checklist = () => {
  const [selectedYear, setSelectedYear] = useState<string>(''); // Type added to useState

  const handleButtonClick = (year: string) => {
    setSelectedYear(year);
  };

  const columns = [
    { header: "Course Code", accessor: "courseCode", className: "w-1/3 h-12" },
    { header: "Course Title", accessor: "courseTitle", className: "w-1/3 h-12" },
    { header: "Credit Unit", accessor: "creditUnit", className: "w-1/3 h-12" }
  ];

  const filteredData = (semester: string) => 
    checklistData.filter(item => item.yearLevel === selectedYear && item.semester === semester);

  return (
    <>
      <div className='bg-white p-4 rounded-md flex-1 m-4 mt-0'>
        <div className="flex items-center justify-between">
          <h1 className="hidden md:block text-lg font-semibold">Check List</h1>
        </div>
        <div className="mt-4 flex items-center gap-4">
          <span className="text-sm font-semibold">Year:</span>
          <div className="flex items-center gap-2">
            {['First Year', 'Second Year', 'Third Year', 'Mid Year', 'Fourth Year'].map((year) => (
              <button
                key={year}
                onClick={() => handleButtonClick(year)}
                className={`
                  border-b-2 py-2 px-4 text-sm font-semibold
                  ${selectedYear === year ? 'border-blue-500' : 'border-transparent'}
                  hover:border-blue-500
                `}
              >
                {year}
              </button>
            ))}
          </div>
        </div>

        {selectedYear && (
          <>
            <p className="text-lg font-semibold mt-4">First Semester</p>
            <Table
              data={filteredData('First Semester')}
              columns={columns}
              renderRow={(item) => (
                <tr key={item.id} className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight h-12">
                  <td className="w-1/3">{item.courseCode}</td>
                  <td className="w-1/3">{item.courseTitle}</td>
                  <td className="w-1/3">{item.creditUnit}</td>
                </tr>
              )}
            />
          </>
        )}
      </div>

      {selectedYear && (
        <div className='bg-white p-4 rounded-md flex-1 m-4 mt-0'>
          <p className="text-lg font-semibold">Second Semester</p>
          <Table
            data={filteredData('Second Semester')}
            columns={columns}
            renderRow={(item) => (
              <tr key={item.id} className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight h-12">
                <td className="w-1/3">{item.courseCode}</td>
                <td className="w-1/3">{item.courseTitle}</td>
                <td className="w-1/3">{item.creditUnit}</td>
              </tr>
            )}
          />
        </div>
      )}
    </>
  );
};

export default Checklist;

