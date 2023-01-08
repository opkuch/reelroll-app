import {useState} from 'react'
import { topics } from '../utils/constants'

const PostVideoForm = ({handlePost, clearInput}: {handlePost: any, clearInput: any}) => {
    const [caption, setCaption] = useState('')
    const [category, setCategory] = useState(topics[0].name)

    const discardPost = () => {
        setCaption('')
        setCategory(topics[0].name)
        clearInput()
    }
  return (
    <div className="flex flex-col gap-3 pb-10">
      <label className="text-md font-medium">Caption</label>
      <input
        type="text"
        value={caption}
        onChange={(e) => {setCaption(e.target.value)}}
        className="rounded outline-none text-md border-2 border-gray-200 p-2"
      />
      <label className="text-md font-medium">Choose a category</label>
      <select
        className="rounded outline-none text-md border-2 border-gray-200 p-2 rounded cursor-pointer capitalize"
        onChange={(e) => {setCategory(e.target.value)}}
        value={category}
      >
        {topics.map((topic) => (
          <option
            key={topic.name}
            value={topic.name}
            className="outline-none capitalize bg-white text-gray-700 text-md p-2 hover:bg-slate-300"
          >
            {topic.name}
          </option>
        ))}
      </select>
      <div className='flex gap-6 mt-10'>
        <button onClick={() => {discardPost()}} className='border-gray-300 border-2 text-md font-medium p-2 rounded w-28 lg:w-44 outline-none'>
            Discard
        </button>
        <button onClick={() => handlePost(caption, category)} className='bg-purple-500 text-white text-md font-medium p-2 rounded w-28 lg:w-44 outline-none'>
            Post
        </button>
      </div>
    </div>
  )
}

export default PostVideoForm
