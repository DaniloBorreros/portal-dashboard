import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Homepage = () => {
  return (
    <div className="relative h-screen">
      {/* Background Image with Opacity */}
      <div
        className="absolute inset-0 bg-no-repeat bg-center bg-cover"
        style={{ backgroundImage: 'url(/cvsu.png)', opacity: 0.3 }}
      ></div>

      {/* Overlay Content */}
      <div className="relative z-10">
        {/* Navbar */}
        <nav className="flex items-center justify-between p-2 bg-green-700">
          <div className="flex items-center pl-10">
            <Image src="/rays.png" alt="Stingray Logo" width={100} height={100} />
          </div>
          <div className="pr-10">
            <Link href="/sign-in" className="text-white text-sm font-semibold">
              Log in
            </Link>
          </div>
        </nav>

        {/* Main Content */}
        <div className="flex flex-col items-center justify-center h-[calc(100vh-128px)]">
          <Image src="/portal1.png" alt="Banner" width={800} height={800} className="mt-10" />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
