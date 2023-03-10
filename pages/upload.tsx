import { useState } from 'react'
import { useRouter } from 'next/router'
// import { MdDelete } from 'react-icons/md'
import useAuthStore from '../store/authStore'
import { client } from '../utils/client'
import { SanityAssetDocument } from '@sanity/client'
import UploadInput from '../components/UploadInput'
import PostVideoForm from '../components/PostVideoForm'
import axios from 'axios'

const Upload = () => {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [videoAsset, setVideoAsset] = useState<SanityAssetDocument>()
  const [wrongFileType, setWrongFileType] = useState(false)
  const [isUploading, setIsUploading] = useState(false)
  const { userProfile }: { userProfile: any } = useAuthStore()

  const uploadVideo = async (e: any) => {
    const selectedFile = e.target.files[0]
    const allowedFileTypes = ['video/mp4', 'video/webm', 'video/ogg']
    if (!selectedFile || !userProfile) return
    else if (allowedFileTypes.includes(selectedFile.type)) {
      setIsUploading(true)
      wrongFileType && setWrongFileType(false)
      setIsLoading(true)
      client.assets
        .upload('file', selectedFile, {
          contentType: selectedFile.type,
          filename: selectedFile.name,
        })
        .then((videoData) => {
          setVideoAsset(videoData)
          setIsLoading(false)
        })
        .catch((err) => {
          console.log('Cannot upload video', err)
        }).finally(() => setIsUploading(false))
    } else {
      setIsLoading(false)
      setWrongFileType(true)
    }
  }

  const handlePost = async (caption: string, category: string) => {
    if (!caption || !category || !userProfile || isLoading || !videoAsset || isUploading) return

    const document = {
      _type: 'post',
      caption,
      video: {
        _type: 'file',
        asset: {
          _type: 'reference',
          _ref: videoAsset?._id,
        },
      },
      userId: userProfile?._id,
      postedBy: {
        _type: 'postedBy',
        _ref: userProfile?._id,
      },
      topic: category
    }

    await axios.post(process.env.NEXT_PUBLIC_BASE_URL + '/api/post', document)
    router.push('/')
  }
  
  return (
    <div className="flex w-full h-full absolute left-0 top-[60px] mb-10 pt-10 lg:pt-20 bg-[#F8F8F8] justify-center">
      <div className="bg-white rounded-lg flex gap-6 flex-wrap justify-center items-center p-14 pt-4">
        <div>
          <div>
            <p className="text-2xl font-bold">Upload Video</p>
            <p className="text-md text-gray-400 mt-1">
              Post a video to your account
            </p>
          </div>
          <div className="border-dashed rounded-xl border-4 border-gray-200 flex flex-col justify-center items-center outline-none mt-10 min-w-[260px] min-h-[460px] p-10 cursor-pointer hover:border-purple-300 hover:bg-gray-100">
            {isLoading ? (
              <div className="text-center">
                <p>Uploading</p>
                <p className="text-sm text-gray-300">it may take some time..</p>
              </div>
            ) : (
              <div>
                {videoAsset ? (
                  <div>
                    <video
                      src={videoAsset.url}
                      loop
                      controls
                      className="rounded-xl h-[450px] mt-16 bg-black"
                    ></video>
                  </div>
                ) : (
                  <UploadInput uploadVideo={uploadVideo} />
                )}
              </div>
            )}
            {wrongFileType && (
              <p className="text-red-400">
                Please select a suitable file type!
              </p>
            )}
          </div>
        </div>
        <PostVideoForm handlePost={handlePost} clearInput={setVideoAsset}/>
      </div>
    </div>
  )
}

export default Upload
