// components/Printgrades.tsx
'use client';

import { CSchecklistData } from '@/_lib/data';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';


function PrintChecklist() {
//   const router = useRouter();

//   useEffect(() => {
//     const handlePrint = () => {
//       window.print();

//       // Add a listener to handle navigation after printing
//       const handleAfterPrint = () => {
//         router.back();
//         window.removeEventListener('afterprint', handleAfterPrint); // Cleanup
//       };

//       window.addEventListener('afterprint', handleAfterPrint);
//     };

//     handlePrint();
//   }, [router]);
  return (
    <div className=" pt-[10px]  h-[2,480px] w-[3,508px]">

    {/* Headings */}
      <div className="flex items-center mb-6 pl-[55px]">
        <div className="ml-20">
          <img src="/logo.png" alt="CSU Logo" width={50} height={50} />
        </div>
        <div className="text-center ml-[10px] items-center">
          <p className="text-[12px]">Republic of the Philippines</p>
          <h1 className="text-[12px] font-bold uppercase">Cavite State University</h1>
          <p className="text-[12px]">Bacoor City Campus</p>
          <p className='text-sm'></p>
          <p className="font-semibold text-[12px] uppercase">bachelor of science of computer science</p>
          <h1 className="text-sm font-bold mt-4 uppercase">checklist of courses</h1>
        </div>
      </div>
      {/* details */}
      <div className="flex items-center mb-3 ">
        <table className="w-full">
          <tbody className="">
            <tr>
              <td className=" w-[40%] h-[1px] text-[10px]">Name of Student :</td>
              <td className=" w-[60%] h-[1px] text-[10px]">Date of Admission : </td>
            </tr>
            <tr>
              <td className=" w-[40%] h-[1px] text-[10px]">Student Number :</td>
              <td className=" w-[60%] h-[1px] text-[10px]">Contact Number :</td>
            </tr>
            <tr>
              <td className=" w-[40%] h-[1px] text-[10px]">Address :</td>
              <td className=" w-[60%] h-[1px] text-[10px]">Name of Adviser :</td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* details */}
      <table className="border-collapse">
  <thead>
    <tr>
      <th className="border border-black w-[80px] h-[35px] text-center text-[10px] p-1">Course Code</th>
      <th className="border border-black w-[690px] h-[35px] text-center text-[14px]">Course Title</th>
      <th className="border border-black w-[100px]">
        <div className="text-center text-[8px] h-[22.5px] mt-[-4px]">Credit Units</div>
        <div className="border-t border-black flex">
          <div className="border-r border-black w-full text-center text-[9px]">Lec</div>
          <div className="border-l border-black w-full text-center text-[9px]">Lab</div>
        </div>
      </th>
      <th className="border border-black w-[100px]">
        <div className="text-center text-[8px] h-[22.5px] mt-[-4px]">Contact Hrs</div>
        <div className="border-t border-black flex">
          <div className="border-r border-black w-full text-center text-[9px]">Lec</div>
          <div className="border-l border-black w-full text-center text-[9px]">Lab</div>
        </div>
      </th>
      <th className="border border-black w-[250px] h-[35px] text-center text-[11px] p-0.5">Pre-Requisite</th>
      <th className="border border-black w-[70px] h-[35px] text-center text-[10px] p-1">Semester/SY Taken</th>
      <th className="border border-black w-[80px] h-[35px] text-center text-[10px] p-1">Final Grade</th>
      <th className="border border-black w-[690px] h-[35px] text-center text-[14px]">Instructor</th>
    </tr>
    <tr>
           <td className='h-[20px]'></td> 
        </tr>
  </thead>
  <tbody className="pt-[10px">
  {CSchecklistData .filter(item =>item.yearLevel === 'First Year' && item.semester === 'First Semester').map((item) => (
        
      <tr key={item.id}>
        
        <td className="border border-black text-center text-[8px] p-1">{item.courseCode}</td>
        <td className="border border-black text-center text-[8px]">{item.courseTitle}</td>
        <td className="border border-black text-center text-[8px]">
          <div className="">{item.creditUnit}</div>
        </td>
        <td className="border border-black text-center text-[8px]">
          <div className="h-[22.5px] mt-[-4px]"></div>
        </td>
        <td className="border border-black text-center text-[8px] p-0.5">{item.preRequisite}</td>
        <td className="border border-black text-center text-[8px] p-1"></td>
        <td className="border border-black text-center text-[8px] p-1">{item.grade}</td>
        <td className="border border-black text-center text-[8px]"></td>
      </tr>
    ))}
    <td className='h-[20px]'></td>

{CSchecklistData .filter(item =>item.yearLevel === 'First Year' && item.semester === 'Second Semester').map((item) => (
        
        <tr key={item.id}>
          
          <td className="border border-black text-center text-[8px] p-1">{item.courseCode}</td>
          <td className="border border-black text-center text-[8px]">{item.courseTitle}</td>
          <td className="border border-black text-center text-[8px]">
            <div className="">{item.creditUnit}</div>
          </td>
          <td className="border border-black text-center text-[8px]">
            <div className="h-[22.5px] mt-[-4px]"></div>
          </td>
          <td className="border border-black text-center text-[8px] p-0.5">{item.preRequisite}</td>
          <td className="border border-black text-center text-[8px] p-1"></td>
          <td className="border border-black text-center text-[8px] p-1">{item.grade}</td>
          <td className="border border-black text-center text-[8px]"></td>
        </tr>
      ))}
      <td className='h-[20px]'></td>
    
      {CSchecklistData .filter(item =>item.yearLevel === 'Second Year' && item.semester === 'First Semester').map((item) => (
        
        <tr key={item.id}>
          
          <td className="border border-black text-center text-[8px] p-1">{item.courseCode}</td>
          <td className="border border-black text-center text-[8px]">{item.courseTitle}</td>
          <td className="border border-black text-center text-[8px]">
            <div className="">{item.creditUnit}</div>
          </td>
          <td className="border border-black text-center text-[8px]">
            <div className="h-[22.5px] mt-[-4px]"></div>
          </td>
          <td className="border border-black text-center text-[8px] p-0.5">{item.preRequisite}</td>
          <td className="border border-black text-center text-[8px] p-1"></td>
          <td className="border border-black text-center text-[8px] p-1">{item.grade}</td>
          <td className="border border-black text-center text-[8px]"></td>
        </tr>
      ))}
      <td className='h-[20px]'></td>
  </tbody>
</table>



    </div>

  );
}

export default PrintChecklist;
