import React from 'react'

interface IProps {
  text: string
}
const NoResults = ({ text }: IProps) => {
  return (
    <div className="h-full w-full flex justify-center items-center text-4xl">
      {text}
    </div>
  )
}

export default NoResults
