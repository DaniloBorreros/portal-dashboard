import Pagination from "@/components/Pagination"
import FormModal from "@/components/FormModal"
import Table from "@/components/Table"
import TableSearch from "@/components/TableSearch"
import { eventsData,role, lessonsData } from "@/lib/data"
import { headers } from "next/headers"
import Image from "next/image"
import Link from "next/link"
type Lesson = {
    id:number;
    title:string;
    class: string;
    date:string;
    startTime:string;
    endTime:string;

}

const columns = [
    {
        header:"Title", 
        accessor:"title"
    },
    {
        header:"Class",
        accessor:"class",
    },  
    {
        header:"Date",
        accessor:"date",
        className: "hidden md:table-cell"
    },
    {
        header:"Start Time",
        accessor:"startTime",
        className: "hidden md:table-cell"
    },
    {
        header:"End Time",
        accessor:"endTime",
        className: "hidden md:table-cell"
    },
    {
        header:"Actions",
        accessor:"actions",
    },    
    
]

const EventListPage = () => {
    const renderRow = (items:Lesson)=> (
        <tr key={items.id} className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight">
            <td className="flex items-center gap-4 p-4">
            {items.title}
            </td>
            <td className="hidden md:table-cell">{items.class}</td>
            <td >{items.date}</td>
            <td>{items.startTime}</td>
            <td className="hidden md:table-cell">{items.endTime}</td>
            <td>
                <div className='flex items-center gap-2'>
                        {/* <Link href={'/list/teachers/${items.id}'}>
                            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaSky">
                                    <Image src="/edit.png" alt="" width={16} height={16}/>
                            </button>
                        </Link>
                        {role === "admin" && (
                            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaPurple">
                                    <Image src="/delete.png" alt="" width={16} height={16}/>
                            </button>
                        )} */}

                         {/* <Link href={'/list/teachers/${items.id}'}> */}
                         <FormModal table="event" type="update" data={items}/>
                        {/* </Link> */}
                        {role === "admin" && (
                             <FormModal table="event" type="delete" id={items.id}/>
                        )}
                </div>
            </td>
        </tr>

                    );

    return(
        <div className='bg-white p-4 rounded-md flex-1 m-4 mt-0'>
            {/* TOP */}
            <div className="flex items-center justify-between">
                <h1 className="hidden md:block text-lg font-semibold">All Events</h1>
                <div className="flex flex-col md:flex-row items-center gap-4  w-full md:w-auto">
                    <TableSearch />
                        <div className="flex items-center gap-4 self-end">
                            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
                                <Image src="/filter.png" alt="" width={14} height={14} />
                            </button>
                            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
                                <Image src="/sort.png" alt="" width={14} height={14} />
                            </button>
                            {/* {role === "admin" &&<button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
                                <Image src="/plus.png" alt="" width={14} height={14} />
                            </button>} */}

                            {role === "admin" &&
                             <FormModal table="event" type="create"/>
                             }
                            
                        </div>
                </div>
            </div>
            {/* LIST */}
            <Table columns={columns} renderRow={renderRow} data = {eventsData}/>
            {/* PAGINATION */}
            <Pagination />
        </div>
    )
    
}

export default EventListPage