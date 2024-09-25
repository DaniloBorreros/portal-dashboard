import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Homepage = () => {
  return (
    <div className="bg-no-repeat bg-center bg-cover h-screen" style={{backgroundImage: 'url(/cvsu.png)', }}>
      {/* Navbar */}
      <nav className="flex items-center justify-between p-2 bg-green-700">
        <div className="flex items-center pl-10">
          <Image
            src="/rays.png"
            alt="Stingray Logo"
            width={100}
            height={100}
          />
        </div>
        <div className="pr-10">
          <Link href="/login" className="text-white text-sm font-semibold">
              Log in
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center h-[calc(100vh-128px)]">
        <Image
          src="/portal1.png"
          alt="Banner"
          width={800}
          height={800}
          className="mt-10"
        />
      </div>
    </div>
  );
};

export default Homepage;

