import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { assets, roomsDummyData } from '../assets/assets';
import StarRating from '../components/StarRating';
const RoomDetails = () => {

    const { id } = useParams();
    const [mainImage, setMainImage] = useState(null);
    const [room, setRoom] = useState(null);

    useEffect(() => {
        const room = roomsDummyData.find(room => room._id === id)
        room && setRoom(room);
        room && setMainImage(room.images[0]);
    }, [])


    return room && (
        <div className='py-28 md:py-35 px-4 md:px-16 lg:px-24 xl:px-32' >

            {/* Room Details */}
            <div className='flex flex-col md:flex-row items-start md:items-center gap-2' >
                <h1 className='font-playfair md:text-4xl text-3xl'>{room.hotel.name} <span className='font-inner text-sm' >({room.roomType})</span> </h1>
                <p className='text-sm font-inner py-1.5 px-3 text-white bg-orange-500 rounded-full'>20% OFF</p>
            </div>

            {/* Room rating */}
            <div className='flex items-center gap-1 mt-2' >
                <StarRating />
                <p className='ml-2'>200+ Reviews</p>
            </div>

            {/* Room Address */}
            <div className='flex items-center gap-1 mt-2 text-gray-500' >
                <img src={assets.locationIcon} alt='Location-Icon' />
                <span>{room.hotel.address}</span>
            </div>

            {/* Room Images */}
            <div className='flex flex-col lg:flex-row mt-6 gap-6'>
                <div className='lg:w-1/2 w-full' >
                    <img src={mainImage} alt="main-image" className='w-full rounded-xl shadow-lg object-cover' />
                </div>
                {/* other than main images */}
                <div className='grid grid-cols-2 gap-4 lg:w-1/2 w-full' >
                    {room?.images.length > 1 && room.images.map((image, index) => (
                        <img onClick={() => setMainImage(image) }
                         key={index} src={image} alt='Room-image' className={`w-full rounded-xl shadow-md object-cover cursor-pointer ${mainImage === image && 'outline-3 outline-orange-500' } `} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default RoomDetails