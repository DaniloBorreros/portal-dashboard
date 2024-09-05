
import Announcements from '@/components/Announcements'
import UserInfoCard from '@/components/UserInfoCard'
import UserInfo from '@/components/UserInfo'
import { adminInfo, role, studentsData, subjectsData } from '@/_lib/data'
import Image from 'next/image'

import React from 'react'
import AdminInfocard from '@/components/AdminInfocard'
import EventCalendar from '@/components/EventCalendar'
import FinanceChart from '@/components/FinanceChart'
import CountChart from '@/components/CountChart'
import TimeDisplay from '@/components/TimeDisplay'


const Profilepage = () => {

    return (
      <>
      {role === "student" && (
      <>
        <div className="flex-1 p-4 flex flex-col gap-4 xl:flex-row">
          {/* LEFT */}
          <div className="w-full xl:w-2/3">
          {/* TOP */}
          <div className="flex flex-col lg:flex-row gap-4">
          {/* USER INFO CARD */}
          {/* <div className="bg-lamaSky py-6 px-4 rounded-md flex-1 flex gap-4"> *./}
            {/* <div className="w-1/3">
            <Image src="https://images.pexels.com/photos/5414817/pexels-photo-5414817.jpeg?auto=compress&cs=tinysrgb&w=1200" alt='PhotoInfo' width={144} height={144} className="w-36 h-36 rounded-full object-cover"/>
            </div>
            <div className="w-2/3 flex flex-col justify-between gap-4">
            <h1 className="text-xl font-semibold">Cameron Moran</h1>
            <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, animi.</p>
            <div className="flex items-center justify-between gap-2 flex-wrap text-xs font-medium">
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                    <Image src="/blood.png" alt='' width={14} height={14} />
                    <span>A+</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                    <Image src="/date.png" alt='' width={14} height={14} />
                    <span>January 2025</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                    <Image src="/mail.png" alt='' width={14} height={14} />
                    <span>user@gmail.com</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                    <Image src="/phone.png" alt='' width={14} height={14} />
                    <span>+639517563114</span>
                </div>
            </div>
            </div> */}
            <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex flex-col lg:flex-row gap-4">
      <UserInfoCard
                  key={studentsData[0].id}
                  name={studentsData[0].name}
                  email={studentsData[0].email}
                  imageUrl={studentsData[0].photo}
                  phone={studentsData[0].phone}
                  grade={studentsData[0].grade}
                  studentClass={studentsData[0].class}
                  address={studentsData[0].address} bio={''}      /> 
    </div> 
    </div>
          {/* </div> */}
          {/* SMALL CARD */}
          <div className="flex-1 flex gap-4 justify-between flex-wrap">
            {/* CARD */}
            <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
                <Image src="/singleAttendance.png" alt='' width={24} height={24} className="w-6 h-6" />
                <div className="">
                    <h1 className="text-xl font-semibold">90%</h1>
                    <span className="text-sm text-gray-400">Attendance</span>
                </div>
            </div>
            <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
                <Image src="/singleBranch.png" alt='' width={24} height={24} className="w-6 h-6" />
                <div className="">
                    <h1 className="text-xl font-semibold">4th Year</h1>
                    <span className="text-sm text-gray-400">College</span>
                </div>
            </div>
            <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
                <Image src="/singleLesson.png" alt='' width={24} height={24} className="w-6 h-6" />
                <div className="">
                    <h1 className="text-xl font-semibold">12</h1>
                    <span className="text-sm text-gray-400">Lessons</span>
                </div>
            </div>
            <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
                <Image src="/singleClass.png" alt='' width={24} height={24} className="w-6 h-6" />
                <div className="">
                    <h1 className="text-xl font-semibold">4-1</h1>
                    <span className="text-sm text-gray-400">BSCS</span>
                </div>
            </div>
          </div>
          </div>
          {/* BOTTOM */}
          <div className="mt-4 bg-white rounded-md p-4 wrap gap-4">
            <UserInfo />
          </div>
          </div>
          {/* RIGHT */}
          <div className="w-full xl:w-1/3 flex flex-col gap-4 rounded-md bg-white p-4 shadow-md">
            <h1 className="text-2xl font-semibold border-b border-gray-200 pb-2">Subjects</h1>
            <ul className="list-disc pl-4 mt-4">
              {subjectsData.map(subject => (
                <li key={subject.id} className="flex items-center gap-2 py-2 border-b border-gray-200 last:border-b-0 hover:bg-gray-50">
                  <div className="w-4 h-4 bg-lamaSky rounded-full mr-2"></div>
                  <span className="text-sm font-medium">{subject.name}</span>
                  <span className="text-xs font-light text-gray-400">({subject.teachers.join(', ')})</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 text-sm font-light text-gray-500">Note: Click on the subject to see the schedule</div>
            <div>
          <Announcements />
          </div>
          </div>
          
          
        </div>
        </>
        )}
        {role === "admin" && (
        <>
        <div className="flex-1 p-4 flex flex-col gap-4 xl:flex-row">
          {/* LEFT */}
          <div className="w-full xl:w-2/3">
          {/* TOP */}
          <div className="flex flex-col lg:flex-row gap-4 w-full">
            <div className="flex flex-col lg:flex-row gap-4 w-full">
              <AdminInfocard
                  key={adminInfo[0].id}
                  name={adminInfo[0].name}
                  email={adminInfo[0].email}
                  imageUrl={adminInfo[0].img}
                     /> 
          </div> 
                  
          
            <div className="flex flex-wrap w-full">
                <TimeDisplay />
            </div>
            
          </div>
          {/* BOTTOM */}
          <div className="mt-4 bg-white rounded-md p-4 wrap gap-4">
            <UserInfo />
          </div>
          </div>
          {/* RIGHT */}
          <div className="w-full xl:w-1/3 flex flex-col gap-4 rounded-md bg-white p-4 shadow-md">
          <EventCalendar />
            <div>
          </div>
          </div>
        </div>
        </>
        )}
        </>
      
      )
    }
export default Profilepage

