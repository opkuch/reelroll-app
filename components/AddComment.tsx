import { useState } from 'react'
import useAuthStore from '../store/authStore'
import Image from 'next/image'

const AddComment = ({ postComment }: any) => {
  const [commentInput, setCommentInput] = useState('')
  const { userProfile }: any = useAuthStore()

  return (
    <div className="flex flex-col justify-center gap-2 mb-5">
      <div className="flex items-center gap-2">
        <Image
          src={userProfile?.image}
          alt="user-profile"
          width={40}
          height={40}
          className="rounded-full"
        />
        <input
          type="text"
          placeholder="Write Comment.."
          className="p-2 rounded w-[80%] lg:w-[55%] bg-gray-200 outline outline-1 outline-gray-300"
          value={commentInput}
          onChange={(e) => setCommentInput(e.target.value)}
        />
        <button
          className="bg-purple-500 text-white text-md font-medium p-2 rounded w-28 lg:w-44 outline-none"
          onClick={() => (postComment(commentInput), setCommentInput(''))}
        >
          Send
        </button>
      </div>
    </div>
  )
}

export default AddComment
