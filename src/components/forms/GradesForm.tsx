interface GradesFormProps {
  type: "create" | "update";
  data: any;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
}

function GradesForm({ onSubmit }: GradesFormProps) {
  return (
    <div className='bg-white p-4 rounded-md flex-1 m-4 mt-0'>
        <form onSubmit={onSubmit} className="flex flex-col gap-2 w-full">
            <label className="text-sm font-medium text-gray-900 dark:text-gray-400" htmlFor="file_input">Upload Grades File</label>
            <input className="block text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file" name="file" />
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Upload Grades</button>
        </form>
    </div>
  )
}

export default GradesForm;