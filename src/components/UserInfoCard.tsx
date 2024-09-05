import React from 'react';
import Image from 'next/image';
import { role } from '@/_lib/data';

type UserInfoCardProps = {
  name: string;
  email: string;
  imageUrl: string;
  phone: string;
  grade: string;
  studentClass: string;
  address: string;
  bio: string;
};

const UserInfoCard: React.FC<UserInfoCardProps> = ({
  name,
  email,
  imageUrl,
  phone,
  grade,
  studentClass,
  address,
}) => {
  return (
    <>
     {role === "student" && (
    <>
    <div className="bg-lamaSky py-6 px-4 rounded-md flex-1 flex gap-4 ">
      <div className="w-2/3 relative">
        <Image
          src={imageUrl}
          alt={`${name}'s photo`}
          width={144}
          height={144}
          className="w-36 h-36 rounded-full object-cover"
        />
      </div>
      <div className="w-2/3 flex flex-col justify-between gap-4">
        <h1 className="text-xl font-semibold">{name}</h1>
        <p className="text-sm text-gray-500">Address: {address}</p>
        <div className="flex items-center justify-between gap-2 flex-wrap text-xs font-medium">
          <div className="w-full flex items-center gap-2">
            <Image src="/mail.png" alt="Email" width={14} height={14} />
            <span>{email}</span>
          </div>
          <div className="w-full flex items-center gap-2">
            <Image src="/phone.png" alt="Phone" width={14} height={14} />
            <span>{phone}</span>
          </div>
        </div>
      </div>
      <div className="w-1/3 flex flex-col gap-4">
      <p className="text-sm text-gray-500">Class: {studentClass}</p>
      <p className="text-sm text-gray-500">Year Level: {grade}</p>
      </div>
    </div>
    </>
    )}
    
    </>
  );
};

export default UserInfoCard;

