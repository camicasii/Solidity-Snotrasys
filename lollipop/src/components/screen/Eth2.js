import React from 'react'
import {ConnectModal} from '../modal/ConnectModal'
import {Link} from 'react-router-dom'

const Eth2Screen = (  ) => {
    
    return(
  <>
   
    <div  className="px-4 sm:px-8 lg:px-16 xl:px-20 mx-auto">
 <div className="hero-headline flex flex-col items-center justify-center pt-24 text-center">
   <ConnectModal />
   <div className="mt-24">
  <Link exact to="/" className="inline-block   rounded-full px-3 py-1 text-sm font-semibold text-yellow-900 mr-2 mb-2 dark:text-brown-ten">Telegram</Link>
        <span className="inline-block   rounded-full px-3 py-1 text-sm font-semibold text-yellow-900 mr-2 mb-2 dark:text-brown-ten ">Twitter</span>
        <span className="inline-block   rounded-full px-3 py-1 text-sm font-semibold text-yellow-900 mr-2 mb-2 dark:text-brown-ten ">Contact us</span>

   </div>
            </div>
      </div>
      </>
  );
}
export default Eth2Screen
