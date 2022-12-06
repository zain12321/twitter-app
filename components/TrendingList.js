import Image from 'next/image'
import React from 'react'

const TrendingList = () => {
    return (
        <div className='mt-4 flex items-center'>
            <div>
                <p className='text-gray-500 text-[14px] mb-1'>Entertainment · LIVE</p>
                <h1 className='font-medium pr-2'>Bigg Boss 16: Salman Khan returns with a brand new season</h1>
            </div>

            <div>
                <img className='rounded-[20px]' src="https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/713db751-0cc0-4d18-b283-bd707824f201/smashingconf-front-end-sf-2023.png"
                width="100" height="100" />
            </div>
        </div>
    )
}

export default TrendingList