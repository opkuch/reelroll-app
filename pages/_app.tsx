import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { GoogleOAuthProvider } from '@react-oauth/google'
import useAuthStore from '../store/authStore'

const App = ({ Component, pageProps }: AppProps) => {
  const [isSSR, setIsSSR] = useState(true)
  const {userProfile} = useAuthStore()
  useEffect(() => {
    setIsSSR(false)
  }, [])

  if (isSSR) return null

  return (
    <GoogleOAuthProvider clientId="237863231881-dodnacnclgqmnbtpan58rk6j6v95jauq.apps.googleusercontent.com">
      <div>
        <Navbar />
        <div className="flex gap-6 md:gap-20">
          <div className="h-[91vh] overflow-hidden xl:hover:overflow-auto border-r-2 border-gray-100 xl:border-0 p-3">
            <Sidebar isLoggedIn = {userProfile? true : false}/>
          </div>
          <div className="mt-4 flex flex-col gap-10 h-[90vh] videos flex-1">
            <Component {...pageProps} />
          </div>
        </div>
      </div>
    </GoogleOAuthProvider>
  )
}

export default App
