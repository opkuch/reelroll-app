import { useRef } from 'react'
import { Video } from '../types'
import { NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { GoVerified } from 'react-icons/go'

interface IProps {
  post: Video
}
const VideoCard: NextPage<IProps> = ({ post }) => {
  const videoRef = useRef<HTMLVideoElement>(null)

  return (
    <div className="flex border-b-2 border-gray-200 pb-6">
      <div className="w-full">
        <div className="flex gap-3 p-2 font-semibold rounded">
          <div className="md:w-16 md:h-16 w-10 h-10 cursor-pointer">
            <>
              <Image
                width={62}
                height={62}
                className="rounded-full"
                src={post.postedBy.image}
                alt="profile photo"
                layout="responsive"
              />
            </>
          </div>
          <div>
            <Link href={'/profile/' + post.postedBy._id}>
              <div className="flex items-center gap-2 cursor-pointer">
                <p className="flex items-center gap-2 md:text-md font-bold text-primary">
                  {post.postedBy.userName}
                  <GoVerified className="text-blue-400 text-md" />
                </p>
                <p className="capitalize font-medium text-gray-500 text-xs hidden md:block">
                  {post.postedBy.userName}
                </p>
              </div>
            </Link>
          </div>
        </div>
        <div className="lg:ml-20 flex relative lg:bottom-[50px]">
          <div className="relative rounded-3xl">
            <div className="lg:relative top-[45px] left-[10px] mb-3"></div>
            <Link href={`/detail/${post._id}`}>
              <video
                loop
                controls={true}
                className="max-h-[600px] w-[600px] rounded-2xl cursor-pointer py-4"
                src={post.video.asset.url}
                ref={videoRef}                
              ></video>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoCard
