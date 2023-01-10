import axios from 'axios'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import LikeButton from '../../components/LikeButton'
import VideoComments from '../../components/VideoComments'
import useAuthStore from '../../store/authStore'
import { Video } from '../../types'
import { IoArrowBackOutline } from 'react-icons/io5'
import Link from 'next/link'

interface IProps {
  postDetails: Video
}

const Detail = ({ postDetails }: IProps) => {
  const { userProfile }: any = useAuthStore()
  const router = useRouter()
  const [post, setPost] = useState(postDetails)
  const [isLiked, setIsLiked] = useState(false)
  const postComment = async (commentInput: any) => {
    if (!commentInput || !userProfile) return
    const document = {
      comment: commentInput,
      userId: userProfile?._id,
      at: Date.now(),
    }
    await axios.put(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/post/${postDetails._id}`,
      document
    )
    router.push('/detail/' + postDetails._id)
  }

  useEffect(() => {
    if (post.likes) {
      const postLikes = post.likes.map((like) => like?._ref)
      if (postLikes.includes(userProfile?._id)) setIsLiked(true)
      else setIsLiked(false)
    }
  }, [post.likes?.length, userProfile?._id])

  const handleLike = async () => {
    if (!userProfile) return
    const like = isLiked ? false : true
    const reqBody = { userId: userProfile._id, like, postId: post._id }
    const res = await axios.put(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/like`,
      reqBody
    )
    setPost({ ...post, likes: res.data.likes })
  }

  return (
    post && (
      <div className="absolute w-full h-full top-0 bg-white left-0 flex justify-center">
        <div className="h-[80vh] py-3 w-full">
          <div className="flex items-center w-full">
            <Link href={'/'}>
              <button className="cursor-pointer pl-2">
                <IoArrowBackOutline className="text-4xl" />
              </button>
            </Link>
          </div>
            <p className="font-semibold text-4xl w-fit m-auto">
              {post.caption}
            </p>
          <div className="flex relative flex flex-col items-center">
            <div></div>
            <video
              loop
              controls={true}
              className="max-w-[65%] rounded-2xl cursor-pointer py-4"
              src={post.video.asset.url}
            ></video>
          </div>
          <div className="pl-10 w-full flex flex-col items-center">
            {userProfile && (
              <div className="flex flex-col justify-center w-fit items-center py-3">
                <LikeButton handleLike={handleLike} isLiked={isLiked} />
                <span className="text-xl font-semibold">{`${
                  post.likes?.length ? post.likes.length : '0'
                }`}</span>
              </div>
            )}
            <VideoComments comments={post.comments} postComment={postComment} />
          </div>
        </div>
      </div>
    )
  )
}

export const getServerSideProps = async ({
  params: { id },
}: {
  params: { id: string }
}) => {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/post/${id}`
  )

  return {
    props: { postDetails: data },
  }
}
export default Detail
