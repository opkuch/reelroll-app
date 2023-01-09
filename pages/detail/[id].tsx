import axios from 'axios'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import LikeButton from '../../components/LikeButton'
import VideoComments from '../../components/VideoComments'
import useAuthStore from '../../store/authStore'
import { Video } from '../../types'
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
    await axios.put(`${process.env.NEXT_PUBLIC_BASE_URL}/api/post/${postDetails._id}`, document)
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
    const res = await axios.put(`${process.env.NEXT_PUBLIC_BASE_URL}/api/like`, reqBody)
    setPost({ ...post, likes: res.data.likes })
  }

  return (
    post && (
      <div>
        <p className="font-bold text-2xl w-fit">{post.caption}</p>
        <div className="lg:ml-20 flex relative">
          <div className="relative rounded-3xl">
            <div className="lg:relative top-[45px] left-[10px] mb-3"></div>
            <video
              loop
              controls={true}
              className="max-h-[600px] w-[90%] rounded-2xl cursor-pointer py-4"
              src={post.video.asset.url}
            ></video>
          </div>
        </div>
        {userProfile && (
          <div className='flex flex-col justify-center w-fit items-center py-3'>
            <LikeButton handleLike={handleLike} isLiked={isLiked} />
            <span className='text-xl'>{`${post.likes?.length? post.likes.length : '0'}`}</span>
          </div>
        )}
        <VideoComments comments={post.comments} postComment={postComment} />
      </div>
    )
  )
}

export const getServerSideProps = async ({
  params: { id },
}: {
  params: { id: string }
}) => {
  const { data } = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/post/${id}`)

  return {
    props: { postDetails: data },
  }
}
export default Detail
