import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { AiFillHome, AiOutlineMenu } from 'react-icons/ai'
// import { ImCancelCircle } from 'react-icons/im'
import Discover from './Discover'
// import SuggestedAccounts from './SuggestedAccounts'
import Footer from './Footer'

const Sidebar = ({ isLoggedIn }: { isLoggedIn: boolean }) => {
  const router = useRouter()
  const activeLink =
    'flex items-center gap-3 hover:bg-primary p-3 xl:justify-dash-start cursor-pointer font-semibold text-[#9457eb] rounded'
  const normalLink =
    'flex items-center gap-3 hover:bg-primary p-3 xl:justify-dash-start cursor-pointer font-semibold text-[#000] rounded'

  return (
    <div>
      <div className="block xl:hidden m-2 ml-4 mt-3 text-xl"></div>
      {
        <div className="xl:w-400 w-12 flex flex-col justify-start mb-10">
          <div className="xl:border-b-2 border-gray-200 xl:pb-4">
            <Link href="/">
              <div className={router.query?.topic ? normalLink : activeLink}>
                <p className="text-2xl">
                  <AiFillHome />
                </p>
                <span className={`text-xl hidden xl:block`}>For You</span>
              </div>
            </Link>
          </div>
          {isLoggedIn && (
            <>
              <Discover />
              {/* <SuggestedAccounts /> */}
            </>
          )}
          <Footer />
        </div>
      }
    </div>
  )
}
export default Sidebar
