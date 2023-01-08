import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Logo from '../utils/reelroll-logo.svg'
import { GoogleLogin, googleLogout } from '@react-oauth/google'
import { createOrGetUser } from '../utils'
import useAuthStore from '../store/authStore'
import UserPreview from './UserPreview'

const Navbar = () => {
  const { userProfile, addUser, removeUser }: {userProfile: any, addUser: Function, removeUser: Function} = useAuthStore()

  const onSuccessLogin = (credentialResponse: any) => {
    createOrGetUser(credentialResponse, addUser)
  }
  const onErrorLogin = () => {
    console.log('login failed')
  }

  const onLogout = () => {
      googleLogout()
      removeUser()
  }
  return (
    <div className="w-full flex justify-between items-center border-b-2 border-gray-200 py-1 px-4">
      <Link href="/">
        <div className="w-[100px] md: w-[130px] flex items-center gap-2 cursor-pointer">
          <Image src={Logo} className="logo-img" alt='logo'/>
          <span className="text-lg uppercase tracking-wider select-none text-primary">
            reel<span className="text-[#9457eb]">r</span>oll
          </span>
        </div>
      </Link>
      <div>
        {userProfile ? (
          <UserPreview userProfile={userProfile} onLogout={onLogout}/>
        ) : (
          <GoogleLogin
            text="signin"
            onSuccess={onSuccessLogin}
            onError={onErrorLogin}
          />
        )}
      </div>
    </div>
  )
}
export default Navbar
