import React from 'react'



const ListTable = ({ title }: { title: string }) => {

    let colorClass = 'bg-purple-200';

    if (title === 'In Progress') {
        colorClass = 'bg-blue-200';
    } else if (title === 'Done') {
        colorClass = 'bg-green-200';
    }

    return (
        <div className='w-full mx-5 h-80 bg-neutral-100 rounded-xl'>
            <div className={`${colorClass} px-8 py-2 rounded-lg `}>
                {title}
            </div>
            <div className='px-8 pt-3 w-full border-1 border-neutral-400 rounded-lg p-4 mt-2'>
                kll'd
            </div>
        </div>
    )
}

export default ListTable