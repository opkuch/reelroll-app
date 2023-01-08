import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { relativeDays } from '../utils'

const CommentPreview = ({ comment }: { comment: any }) => {
  return (
    <div className="mt-4 p-2 rounded">
      <div className="flex gap-2">
        <div className="max-h-[40px]">
          <Image
            src={comment.postedBy.image}
            alt="profile-image"
            height={40}
            width={40}
            className="rounded-full"
          />
        </div>
        <div className="text-sm">
          <div className="flex gap-2">
            <Link href={`/profile/${comment.postedBy._id}`}>
              <span className="font-semibold cursor-pointer">
                {comment.postedBy.userName}
              </span>
            </Link>
            <span className="text-gray-400 text-xsm">
              {relativeDays(comment.at)}
            </span>
          </div>

          <p className="relative text-sm break-normal">{comment.comment}</p>
        </div>
      </div>
      <div></div>
    </div>
  )
}

export default CommentPreview
