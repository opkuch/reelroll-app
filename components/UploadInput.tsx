import React from 'react'
import { FaCloudUploadAlt } from 'react-icons/fa'

const UploadInput = ({uploadVideo}: {uploadVideo: any}) => {
  return (
    <label className="cursor-pointer">
    <div className="flex flex-col items-center justify-center h-full">
      <div className="flex flex-col items-center justify-center">
        <p className="font-bold text-xl">
          <FaCloudUploadAlt className="text-gray-300 text-6xl" />
        </p>
        <p className="text-xl font-semibold">Select Video</p>
      </div>
      <p className="text-gray-400 text-center mt-10 text-sm leading-10">
        mp4 or webM or ogg <br />
        720x1280 or higher <br />
        up to 10 minutes <br />
        less than 2gb <br />
      </p>
      <p className="bg-purple-500 text-center mt-10 rounded text-white text-md font-medium p-2 w-52 outline-none">
        Select File
      </p>
    </div>
    <input
      type="file"
      name="upload-video"
      className="w-0 h-0"
      onChange={uploadVideo}
    />
  </label>

  )
}

export default UploadInput
