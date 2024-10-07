"use client";

import React, { useState } from 'react';
import Table from '@/components/Table';
import { CRIMchecklistData } from '@/_lib/data';
import Link from 'next/link';

const Checklist = () => {
  const [selectedYear, setSelectedYear] = useState<string>('First Year');

  const handleButtonClick = (year: string) => {
    setSelectedYear(year);
  };

  const columns = [
    { header: "Course Code", accessor: "courseCode", className: "w-1/7 h-12 text-center" },
    { header: "Course Title", accessor: "courseTitle", className: "w-1/7 h-12 text-center" },
    { header: "Unit", accessor: "creditUnit", className: "w-1/7 h-12 text-center" },
    { header: "Pre-requisite", accessor: "preRequisite", className: "w-1/7 h-12 text-center" },
    { header: "Grade", accessor: "grade", className: "w-1/7 h-12 text-center" },
    { header: "Completion", accessor: "completion", className: "w-1/7 h-12 text-center" },
    { header: "Remarks", accessor: "remarks", className: "w-1/7 h-12 text-center" },
  ];

  const filteredData = (semester: string) =>
    CRIMchecklistData.filter(item => item.yearLevel === selectedYear && item.semester === semester);

  // Function to format prerequisites
  const formatPrerequisites = (prerequisites: string) => {
    return prerequisites.split(',').map(prerequisite => prerequisite.trim()).join(',\n');
  };

  return (
    <>
      <div className='bg-white p-4 rounded-md flex-1 m-4 mt-0'>
        <div className="flex items-center justify-between">
          <h1 className="hidden md:block text-lg font-semibold">Check List</h1>
          <Link href="/printChecklist">
            <img src="/print.png" alt="Print" className="inline-block w-5 h-5" />
        </Link>
        </div>
        <div className="mt-4 flex items-center gap-4">
          <span className="text-sm font-semibold">Year:</span>
          <div className="flex items-center gap-2">
            {['First Year', 'Second Year', 'Third Year', 'Fourth Year'].map((year) => (
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
                  <td className="w-1/7 text-center">{item.courseCode}</td>
                  <td className="w-1/7 text-center">{item.courseTitle}</td>
                  <td className="w-1/7 text-center">{item.creditUnit}</td>
                  <td className="w-1/7 text-center">{formatPrerequisites(item.preRequisite)}</td>
                  <td className="w-1/7 text-center">{item.grade}</td>
                  <td className="w-1/7 text-center">{item.completion}</td>
                  <td className="w-1/7 text-center">{item.remarks}</td>
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
                <td className="w-1/7 text-center">{item.courseCode}</td>
                <td className="w-1/7 text-center">{item.courseTitle}</td>
                <td className="w-1/7 text-center">{item.creditUnit}</td>
                <td className="w-1/7 text-center">{formatPrerequisites(item.preRequisite)}</td>
                <td className="w-1/7 text-center">{item.grade}</td>
                <td className="w-1/7 text-center">{item.completion}</td>
                <td className="w-1/7 text-center">{item.remarks}</td>
              </tr>
            )}
          />
        </div>
      )}

{selectedYear && filteredData('Mid-year').length > 0 && (
        <div className='bg-white p-4 rounded-md flex-1 m-4 mt-0'>
          <p className="text-lg font-semibold">Mid Year / Summer</p>
          <Table
            data={filteredData('Mid-year')}
            columns={columns}
            renderRow={(item) => (
              <tr key={item.id} className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight h-12">
                <td className="w-1/7 text-center">{item.courseCode}</td>
                <td className="w-1/7 text-center">{item.courseTitle}</td>
                <td className="w-1/7 text-center">{item.creditUnit}</td>
                <td className="w-1/7 text-center">{formatPrerequisites(item.preRequisite)}</td>
                <td className="w-1/7 text-center">{item.grade}</td>
                <td className="w-1/7 text-center">{item.completion}</td>
                <td className="w-1/7 text-center">{item.remarks}</td>
              </tr>
            )}
          />
        </div>
      )}
    </>
  );
};

export default Checklist;
