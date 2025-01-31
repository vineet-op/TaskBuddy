import React from 'react'
import Header from '../Header'
import ListTable from './ListTable'


const ListView = () => {
    return (
        <div>
            <Header />
            <div className='h-screen w-full mt-1.5 flex flex-col gap-5'>
                <ListTable title={"Todo"} />
                <ListTable title={"In Progress"} />
                <ListTable title={"Done"} />
            </div>
        </div>
    )
}

export default ListView