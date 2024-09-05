import React from 'react'

const SettingsPage = () => {
  return (
    <div className='bg-white p-4 rounded-md flex-1 m-4 mt-0'>
        <h1 className='text-lg font-semibold'>Settings</h1>
        <p className='text-xs text-gray-500'>Student Portal Settings</p>
        <div className= 'p-4 rounded-md flex-1 m-4 mt-5 flex '>
        <div className='shadow-md bg-gray-100 p-4 rounded-md w-1/2 mr-4 mt-0'>
        <div className='flex flex-col gap-4'>
                <h1 className='text-lg font-semibold'>Change Password</h1>
                <label className='text-xs text-gray-500'>Enter Current Password</label>
                <input type="password" className='p-2 rounded-md border border-gray-300 w-full' />
                <label className='text-xs text-gray-500'>Enter New Password</label>
                <input type="password" className='p-2 rounded-md border border-gray-300 w-full' />
                <label className='text-xs text-gray-500'>Confirm New Password</label>
                <input type="password" className='p-2 rounded-md border border-gray-300 w-full' />
                <button className='w-full bg-yellow-500 text-white p-2 rounded-md'>Submit</button>
            </div>
            
        </div>
        <div className='shadow-md bg-gray-100 p-4 rounded-md w-1/2 ml-4 mt-0'>
            <div className='flex flex-col gap-4'>
                <h1 className='text-lg font-semibold'>Change Email</h1>
                <label className='text-xs text-gray-500'>Enter New Email Address</label>
                <input type="password" className='p-2 rounded-md border border-gray-300 w-full' />
                <label className='text-xs text-gray-500'>Confirm Email Address</label>
                <input type="password" className='p-2 rounded-md border border-gray-300 w-full' />
                <label className='text-xs text-gray-500'>Portal Password</label>
                <input type="password" className='p-2 rounded-md border border-gray-300 w-full' />
                <button className='w-full bg-yellow-500 text-white p-2 rounded-md'>Submit</button>
            </div>
        </div>
        </div>
    </div>
  )
}

export default SettingsPage