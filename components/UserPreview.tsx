import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { AiOutlineLogout } from 'react-icons/ai'
import { IoMdAdd } from 'react-icons/io'

const UserPreview = ({
  userProfile,
  onLogout,
}: {
  userProfile: any
  onLogout: Function
}) => {
  return (
    <div className="flex items-center gap-4">
      <Link href="/upload" passHref>
        <button className="border-2 p-1 md:px-4 text-md font-semibold flex items-center gap-2 hover:text-white hover:bg-purple-500">
          <IoMdAdd className="text-xl" />{' '}
          <span className="hidden md:block">Upload</span>
        </button>
      </Link>
      <Link href={`/profile/${userProfile._id}`} passHref>
          <Image
            src={userProfile.image}
            width={35}
            height={35}
            alt="profile-pic"
            className="rounded-full cursor-pointer"
          />
      </Link>
      <span>
        <button className="pt-2" onClick={() => onLogout()}>
          <AiOutlineLogout
            className="shadow rounded-full hover:text-purple-900 text-primary"
            fontSize={30}
          />
        </button>
      </span>
    </div>
  )
}

export default UserPreview
