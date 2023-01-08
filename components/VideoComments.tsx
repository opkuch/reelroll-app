import React from 'react'
import useAuthStore from '../store/authStore'
import AddComment from './AddComment'
import CommentPreview from './CommentPreview'
import NoResults from './NoResults'

const VideoComments = ({ comments, postComment }: { comments: any, postComment: any }) => {
  const {userProfile} = useAuthStore()
  return (
    <div className='py-2 w-full'>
        {userProfile? <AddComment postComment={postComment}/> : ''}
        <div className='flex items-center gap-1 pb-3 border-b-2'>
            <span className='capitalize text-lg font-semibold'>comments</span>
            <span className='text-md'>{comments?.length? `(${comments.length})` : '(0)'}</span>
        </div>
      {comments?.length
        ? comments.map((comment: any, idx: number) => <CommentPreview key={idx} comment={comment} />)
        : <div>No comments yet</div>}
    </div>
  )
}

export default VideoComments
