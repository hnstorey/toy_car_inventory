import Modal from "./Modal";
import { useState } from 'react'
import { server_calls } from "../api/server";


function DataTable() {
    const [ open, setOpen ] = useState(false);
    // const { contactData, getData } = useGetData();

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }
    
    const getData = () => {
        console.log(server_calls.get())
    }


  return (
    <>
      <Modal 
        open={ open }
        onClose = { handleClose }
        />
      <div className='flex flex-row'>
        <div>
            <button
                className='p-3 m-3 bg-slate-300 rounded hover:bg-yellow-400 hover:italic'
                onClick={handleOpen}>
                Create New Entry
            </button>
            <button
                className='p-3 m-3 bg-slate-300 rounded hover:bg-yellow-400 hover:italic'>
                Update Entry
            </button>
            <button
                className='p-3 m-3 bg-slate-300 rounded hover:bg-yellow-400 hover:italic'>
                Delete Entry
            </button>
        </div>
      </div>
      {/* Data Table */}
    </>
  )
}

export default DataTable
