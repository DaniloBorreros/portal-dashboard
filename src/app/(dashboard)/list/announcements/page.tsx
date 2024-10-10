import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { eventsData, role, lessonsData, announcementsData1 } from "@/_lib/data";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import { Announcement } from "@prisma/client";
import { prisma } from "@/_lib/prisma";

type AnnouncementList = Announcement;

const AnnouncementListPage = async () => {

  const data = await prisma.announcement.findMany();

  const renderRow = (item: AnnouncementList) => (
    <div
      key={item.id}
      className="flex items-center justify-between p-4 border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight"
    >
      <div className="flex flex-col gap-2">
        <h1 className="font-semibold text-lg">{item.title}</h1>
        <p className="text-gray-500">
          {" "}
          {new Intl.DateTimeFormat("en-PH").format(item.date)}
        </p>
        <p className=" font-semibold">{item.description}</p>
      </div>
      <div className="flex items-center gap-2">
        {role === "admin" && (
          <>
            <FormModal table="announcement" type="update" data={item} />
            <FormModal table="announcement" type="delete" id={item.id} />
          </>
        )}
      </div>
    </div>
  );

  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      {/* TOP */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">Announcements</h1>
        <div className="flex flex-col md:flex-row items-center gap-4  w-full md:w-auto">
          <div className="flex items-center gap-4 self-end">
            {role === "admin" && (
              <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
                <Image src="/filter.png" alt="" width={14} height={14} />
              </button>
            )}
            {role === "admin" && (
              <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
                <Image src="/sort.png" alt="" width={14} height={14} />
              </button>
            )}
            {role === "admin" && (
              <FormModal table="announcement" type="create" />
            )}
          </div>
        </div>
      </div>
      {/* LIST */}
      <div className="flex flex-col gap-4 mt-4">
        {data.map(renderRow)}
      </div>
    </div>
  );
};

export default AnnouncementListPage;
