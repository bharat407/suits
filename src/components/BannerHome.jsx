import React from 'react'
import astroBaba from '../assets/astrologer_baba.webp'
import FeatureCard from './FeatureCard'
import chatIcon from '../assets/chaticon.png'
import calling from '../assets/call.png'
import shoping from '../assets/shop.png'
import kalash from '../assets/kalsh.png'

const BannerHome = () => {

    const data = [
        {
            id: 1,
            source: chatIcon,
            text: "Chat With Astrologer",
        },
        {
            id: 2,
            source: calling,
            text: "Talk To Astrologer",
        },
        {
            id: 3,
            source: shoping,
            text: "Astromall Shop",
        },
        {
            id: 4,
            source: kalash,
            text: "Book A Pooja",
        },
    ]
    return (
        <div className=' max-w-[1400px] w-screen h-[80vh] bg-black flex flex-col justify-center items-center '>
            <div className='h-[45vh] bg-[yellow] rounded-xl w-[80%] flex '>
                <div className="image-section flex basis-[40%] justify-center items-center">
                    <img src={astroBaba} alt="" />
                </div>
                <div className='flex flex-col gap-2 basis-[60%] justify-center items-center'>
                    <h2 className='text-slate-800 text-xl'>200+ Celebs recommends Astrotalk</h2>
                    <h1 className='text-3xl'>Chat With Astrologer</h1>
                    <button className='bg-black px-4 py-2 rounded-2xl text-white'>Chat Now</button>
                </div>
            </div>
            <div className='w-80% flex '>
 {data.map((item) => (
                <FeatureCard key={item.id} text={item.text} source={item.source}  />
                ))}
            </div>
        </div>
    )
}

export default BannerHome
