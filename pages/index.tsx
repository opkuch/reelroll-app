import axios from 'axios'
import NoResults from '../components/NoResults'
import VideoCard from '../components/VideoCard'
import { Video } from '../types'
import { BASE_URL } from '../utils'

interface IProps {
  videos: Video[]
}

const Home = ({videos}:  IProps) => {
  return (
    <div className='flex flex-col gap-10 h-full overflow-y-auto overflow-x-hidden'>
      {videos.length? videos.map((video: Video) => <VideoCard post={video} key={video._id}/>) : <NoResults text={"No Videos"}/>}
    </div>
  )
}

export const getServerSideProps = async ({
  query: { topic },
}: {
  query: { topic: string };
}) => {
  let response
  if (topic)  response = await axios.get(`${BASE_URL}/api/discover/${topic}`)
  else  response = await axios.get(`${BASE_URL}/api/post`)

  return {
    props: {videos: response.data}
  }
}

export default Home