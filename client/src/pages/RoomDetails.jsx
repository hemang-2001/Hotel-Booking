import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { assets, facilityIcons, roomCommonData, roomsDummyData } from '../assets/assets';
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

            {/* Room Highlights */}
            <div className='flex flex-col md:flex-row md:justify-between mt-10 items-start md:items-center'>
                <div className='w-full'>
                    <div className="flex items-center justify-between w-full">
                        <h1 className='font-playfair text-3xl md:text-4xl'>Experience Luxury Like Never Before</h1>
                        <p className='text-2xl font-medium whitespace-nowrap'>${room.pricePerNight}/night</p>
                    </div>
                    <div className='flex flex-wrap items-center mt-3 mb-6 gap-4'>
                        {room.amenities.map((item, index) => (
                            <div key={item} className='flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100' >
                                {facilityIcons[item] ? (
                                    <img src={facilityIcons[item]} alt={item} className='w-5 h-5' />
                                ) : (
                                    <span className='w-5 h-5 flex items-center justify-center bg-gray-300 rounded-full text-xs'>{item[0]}</span>
                                )}
                                <p className='text-sm'>{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Checkin Checkout form */}
                <form className='flex flex-col md:flex-row items-start md:items-center justify-between bg-white shadow-[0px_0px_20px_rgba(0,0,0,0.15)] p-6 rounded-xl mx-auto mt-16 max-w-6xl' >
                        <div className='flex flex-col flex-wrap md:flex-row items-start md:items-center gap-4 md:gap-10 text-gray-500' >

                            <div className='flex flex-col'>
                                <label htmlFor='checkInDate' className='font-medium'>Check-In</label>
                                <input type="date" id='checkInDate' placeholder='Check-In' className='w-full rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none' required />
                            </div>
                            <div className='w-px h-15 bg-gray-300/70 max-md:hidden' ></div>
                            <div className='flex flex-col'>
                                <label htmlFor='checkOutDate' className='font-medium'>Check-Out</label>
                                <input type="date" id='checkOutDate' placeholder='Check-Out' className='w-full rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none' required />
                            </div>
                            <div className='w-px h-15 bg-gray-300/70 max-md:hidden' ></div>
                            <div className='flex flex-col'>
                                <label htmlFor='guests' className='font-medium'>Guests</label>
                                <input type="number" id='guests' placeholder='0' className='max-w-20 rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none' required />
                            </div>


                        </div>
                        <button type='submit' className='bg-primary hover:bg-primary-dull active:scale-95 transition-all text-white rounded-md max-md:w-full max-md:mt-6 md:px-25 py-3 md:py-4 text-base cursor-pointer'>
                            Check Availability
                        </button>
                </form>
                {/* Common Specifications */}
                <div className='mt-25 space-y-4' >
                    {roomCommonData.map((spec, index) => (
                        <div key={index} className='flex items-start gap-2'>
                            <img src={spec.icon} alt={`${spec.title}-icon`} className='w-6.5'/>
                            <div>
                                <p className='text-base'>{spec.title}</p>
                                <p className='text-gray-500'>{spec.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='max-w-3xl border-y border-gray-300 my-15 py-10 text-gray-500'>
                    <p>Guests will be allocated on the ground floor according to availability. You get a comfortable Two bedroom apartment has a true city feeling. The price quoted is for two guest, at the guest slot please mark the number of guests to get the exact price for groups. The Guests will be allocated ground floor according to availability. You get the comfortable two bedroom apartment that has a true city feeling.</p>
                </div>
                {/* Hosted By */}
                <div className='flex flex-col items-start gap-4'>
                    <div className='flex gap-4' >
                        <img src={room.hotel.owner.image} alt="host"className='h-14 w-14 md:h-18 md:w-18 rounded-full'/>
                        <div>
                            <p className='text-lg md:text-xl' >Hosted By {room.hotel.name}</p>
                            <div className='flex items-center mt-1' >  
                                <StarRating />
                                <p className='ml-2'>200+ reviews</p>
                            </div>
                        </div>
                    </div>
                    <button className='bg-primary hover:bg-primary-dull active:scale-95 transition-all text-white rounded-md px-6 py-2.5 text-base cursor-pointer'>Contact Now</button>
                </div>
        </div>
    )
}

export default RoomDetails