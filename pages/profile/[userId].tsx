import React, { useState } from 'react'
import { IUser } from '../../types'
import { Video } from '../../types'
import axios from 'axios'
import Image from 'next/image'
import MiniVideoCard from '../../components/MiniVideoCard'
interface IProps {
  user: IUser
  userVideos: Video[]
  userLikedVideos: Video[]
}

const Profile = ({ profileData }: { profileData: IProps }) => {
  const [isUploads, setIsUploads] = useState(true)
  const activeBtn = 'text-lg text-white under bg-purple-600 p-2 rounded'
  return (
    profileData && (
      <div className="p-5 flex flex-col bg-[#F8F8F8] justify-center">
        <div className="flex flex-col gap-2 items-center border-b-2 border-gray-200 pb-2">
          <div>
            <div className="flex items-center">
              <p className="capitalize font-medium text-gray-800 xl:text-6xl md:block text-3xl">
                {profileData.user.userName}
              </p>
            </div>
          </div>
        </div>
        <div className="p-4 flex gap-3 justify-center">
          <button
            className={isUploads ? activeBtn : 'font-semibold'}
            onClick={() => setIsUploads(true)}
          >
            Uploads
          </button>
          <button
            className={isUploads ? 'font-semibold' : activeBtn}
            onClick={() => setIsUploads(false)}
          >
            Liked Videos
          </button>
        </div>
        <div className="flex justify-center gap-3 mt-3">
          <div>
            {isUploads ? (
              <>
                <p className="text-xl font-semibold text-center">
                  My Uploads
                </p>
                <div className="grid lg:grid-cols-[minmax(0,_550px)_minmax(0,_550px)] grid-cols-1 gap-2">
                  {profileData.userVideos.length ? (
                    profileData.userVideos.map((video) => (
                      <MiniVideoCard key={video._id} video={video} />
                    ))
                  ) : (
                    <p className="pt-3">No uploaded videos yet..</p>
                  )}
                </div>
              </>
            ) : (
              <>
                <p className="text-xl font-semibold text-center">
                  Liked videos
                </p>
                <div className="grid lg:grid-cols-[minmax(0,_550px)_minmax(0,_550px)] grid-cols-1 gap-2">
                  {profileData.userLikedVideos.length ? (
                    profileData.userLikedVideos.map((video) => (
                      <MiniVideoCard key={video._id} video={video} />
                    ))
                  ) : (
                    <p className="pt-3">No liked videos</p>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    )
  )
}

export const getServerSideProps = async ({
  params: { userId },
}: {
  params: { userId: string }
}) => {
  const { data } = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/profile/${userId}`)

  return {
    props: { profileData: data },
  }
}

export default Profile
