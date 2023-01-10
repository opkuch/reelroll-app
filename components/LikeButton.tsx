import {BsSuitHeart, BsSuitHeartFill} from 'react-icons/bs'

const LikeButton = ({handleLike, isLiked}: any) => {
  return (
    <div className='h-[55px] w-[55px] rounded-full bg-gray-200 flex justify-center'>
    <button onClick={() => handleLike()}>
      {!isLiked? <BsSuitHeart height={35} width={35} className="h-[35px] w-[35px]"/> : <BsSuitHeartFill height={35} width={35} className='text-red-700 h-[35px] w-[35px]'/>}
    </button>
  </div>
  )
}

export default LikeButton