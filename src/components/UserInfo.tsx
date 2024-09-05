import { UserInfo } from "@/lib/data";

const Userinfo = () => {
    return (
      <div className='p-4 rounded-md flex flex-col gap-4'>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
          <p className="text-xl  w-1/3"></p>
          <p className="text-xl  w-2/3">Personal Information </p>
          </div>
          </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <p className="w-1/3 ">Full Name:</p>
            <input type="text" className="bg-gray-100 rounded-md p-2 w-2/3 text-gray-500" value={UserInfo[0].fullName}readOnly/>
          </div>
          <div className="flex items-center gap-2">
            <p className="w-1/3 ">Birth Date:</p>
            <input type="text" className="bg-gray-100 rounded-md p-2 w-2/3 text-gray-500" value={UserInfo[0].birthDate}readOnly/>
          </div>
          <div className="flex items-center gap-2">
            <p className="w-1/3 ">Sex:</p>
            <input type="text" className="bg-gray-100 rounded-md p-2 w-2/3 text-gray-500" value={UserInfo[0].sex}readOnly/>
          </div>
          <div className="flex items-center gap-2">
            <p className="w-1/3 ">Religion:</p>
            <input type="text" className="bg-gray-100 rounded-md p-2 w-2/3 text-gray-500" value={UserInfo[0].religion}readOnly/>
          </div>
          <div className="flex items-center gap-2">
            <p className="w-1/3 ">Civil Status:</p>
            <input type="text" className="bg-gray-100 rounded-md p-2 w-2/3 text-gray-500" value={UserInfo[0].civilStatus}readOnly/>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
          <p className="text-xl  w-1/3"></p>
          <p className="text-xl  w-2/3">Contact Details </p>
          </div>
          </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <p className="w-1/3 ">Address:</p>
            <input type="text" className="bg-gray-100 rounded-md p-2 w-2/3 text-gray-500" value={UserInfo[0].address}readOnly/>
          </div>
          <div className="flex items-center gap-2">
            <p className="w-1/3 ">Guardian:</p>
            <input type="text" className="bg-gray-100 rounded-md p-2 w-2/3 text-gray-500" value={UserInfo[0].guardian}readOnly/>
          </div>
          <div className="flex items-center gap-2">
            <p className="w-1/3 ">Contact Number:</p>
            <input type="text" className="bg-gray-100 rounded-md p-2 w-2/3 text-gray-500" value={UserInfo[0].contactNumber}readOnly/>
          </div>
          </div>

          <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
          <p className="text-xl  w-1/3"></p>
          <p className="text-xl  w-2/3">Enrollment Details </p>
          </div>
          </div>
          <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <p className="w-1/3 ">Course:</p>
            <input type="text" className="bg-gray-100 rounded-md p-2 w-2/3 text-gray-500" value={UserInfo[0].course}readOnly/>
          </div>
          <div className="flex items-center gap-2">
            <p className="w-1/3 ">Student Number:</p>
            <input type="text" className="bg-gray-100 rounded-md p-2 w-2/3 text-gray-500" value={UserInfo[0].studentNumber}readOnly/>
          </div>
          </div>
          <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
          <p className="text-xl  w-1/3"></p>
          <p className="text-xl  w-2/3">CvSU Google Account </p>
          </div>
          </div>
          <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <p className="w-1/3 ">CvSU Email:</p>
            <input type="text" className="bg-gray-100 rounded-md p-2 w-2/3 text-gray-500" value={UserInfo[0].cvsuEmail} readOnly/>
          </div>
          <div className="flex items-center gap-2">
            <p className="w-1/3 ">Temporary Password:</p>
            <input type="text" className="bg-gray-100 rounded-md p-2 w-2/3 text-gray-500" value={UserInfo[0].temporaryPassword} readOnly />
          </div>
          </div>

      </div>
          )
}

export default Userinfo
          

