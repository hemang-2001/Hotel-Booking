import React, { useState } from 'react'
import { roomsDummyData } from '../../assets/assets'
import Title from '../../components/Title'

const ListRoom = () => {

    const [rooms, SetRooms] = useState(roomsDummyData)

  return (
    <div>
        <Title align='left' font='outfit' title='Room Listings' subTitle='View, edit, or manage all listed rooms. Keep the Information up-to-date to provide the best experience for users.' />
        <p className='text-gray-500 mt-8'>All Rooms</p>
        <div className='w-full max-w-3xl text-left border border-gray-300 rounded-lg max-h-80 overflow-y-scroll' >
            <table className='w-full'>
                <thead className='bg-gray-50' >
                        <tr className='bg-gray-100 border-b'>
                            <th className='py-3 px-4 text-gray-800 font-medium'>Room Type</th>
                            <th className='py-3 px-4 text-gray-800 font-medium max-sm:hidden'>Facility</th>
                            <th className='py-3 px-4 text-gray-800 font-medium'>Price / night</th>
                            <th className='py-3 px-4 text-gray-800 font-medium text-center'>Actions</th> 
                        </tr>
                    </thead>
                    <tbody className='text-sm' >
                        {
                            rooms.map((item, index) =>(
                                <tr key={index} >
                                    <td className='py-3 px-4 text-gray-800 border-t border-gray-300 '>{item.roomType}</td>
                                    <td className='py-3 px-4 text-gray-800 border-t border-gray-300 max-sm:hidden '>{item.amenities.join(', ')}</td>
                                    <td className='py-3 px-4 text-gray-800 border-t border-gray-300 '>${item.pricePerNight}</td>
                                    <td className='text-center border-t border-gray-300  '>
                                        <button className='px-3 py-1 text-xs bg-blue-500 text-white rounded mx-auto hover:bg-blue-600 transition-all' >Edit</button>
                                        <button className='px-3 py-1 text-xs bg-red-500 text-white rounded mx-auto hover:bg-red-600 transition-all ml-2' >Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
            </table>
        </div>
    </div>
  )
}

export default ListRoom