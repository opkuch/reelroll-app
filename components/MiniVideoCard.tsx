import Link from 'next/link'
import React from 'react'

const MiniVideoCard = ({ video }: { video: any }) => {
  return (
    <div className='bg-gray-200 rounded-2xl p-2 my-3'>
      <div className="p-3">
        <p className="font-bold text-lg">{video.caption}</p>
      </div>
      <Link href={`/detail/${video._id}`} >
        <video
          loop
          controls
          className="h-[350px] lg:h-[450px] w-full rounded-2xl cursor-pointer"
          src={video.video.asset.url}
        ></video>
      </Link>
    </div>
  )
}

export default MiniVideoCard
