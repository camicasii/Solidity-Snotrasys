import React,{useState,useEffect} from "react";
import Image from 'next/image'
import info from '../../data/infosection-content'

export const Icon = () =>(

<svg width="20" height="20" className="inline-flex items-center justify-center mr-2" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M12.2291 0.87834C12.3934 0.821968 12.5712 0.81833 12.7376 0.867933C12.9041 0.917537 13.0509 1.0179 13.1575 1.15501L18.9908 8.65501C19.1046 8.80129 19.1664 8.98134 19.1664 9.16667C19.1664 9.35201 19.1046 9.53206 18.9908 9.67834L13.1575 17.1783C13.0508 17.3153 12.9041 17.4155 12.7377 17.4651C12.5713 17.5146 12.3936 17.5109 12.2295 17.4546C12.0653 17.3982 11.9228 17.292 11.8219 17.1507C11.721 17.0095 11.6667 16.8403 11.6666 16.6667V13.3417C7.18415 13.435 5.03082 14.2858 3.94915 15.2108C2.92082 16.09 2.73248 17.1242 2.53665 18.2075L2.48582 18.4867C2.44842 18.6864 2.33932 18.8656 2.17903 18.9906C2.01875 19.1155 1.81833 19.1776 1.61549 19.1651C1.41264 19.1526 1.22136 19.0664 1.07762 18.9227C0.933873 18.7791 0.847584 18.5878 0.834982 18.385C0.691649 16.095 0.906649 12.7767 2.52415 10.0008C4.09415 7.30667 6.92082 5.23501 11.6666 5.01834V1.66667C11.6666 1.49305 11.7208 1.32374 11.8216 1.18241C11.9225 1.04107 12.0649 0.934769 12.2291 0.87834Z" fill="#FDBB26"/>
</svg>
)

const InfoSection = () => {

const {TotalIncome,BasicInterestRate,DaysReductionPlan,AuctionBonus,RefBonus,MinimalDeposit,Earning} = info

  

const [signedInUser, setSignedInUser] = useState(false)

useEffect(() => {
  authListener()
})

async function authListener() {
  ('auth', (data) => {
    switch (data.payload.event) {
      case 'signIn':
        return setSignedInUser(true)
      case 'signOut':
        return setSignedInUser(false)
    }
  })
  try {
    await currentAuthenticatedUser()
    setSignedInUser(true)
  } catch (err) {}
}

  return (
    <section className="px-12 py-4 ">
      
      <div className=" grid grid-cols-1 md:grid-cols-2 py-12 gap-12">
        <section className="bg-[#030217] rounded">
          <ul>
            <li className="px-2 py-2 text-[#DA781E]"><Icon />{TotalIncome.content}</li>
            <li className="px-2 py-2 text-[#DA781E]"><Icon />{BasicInterestRate.content}</li>
 <li className="px-2 py-2 text-[#DA781E]"><Icon />{DaysReductionPlan.content}</li>
 <li className="px-2 py-2 text-[#DA781E]"><Icon />{AuctionBonus.content}</li>
 <li className="px-2 py-2 text-[#DA781E]"><Icon />{RefBonus.content}</li>
 <li className="px-2 py-2 text-[#DA781E]"><Icon />{MinimalDeposit.content}</li>
 <li className="px-2 py-2 text-[#DA781E]"><Icon />{Earning.content}</li>

          </ul>
        </section>

{
  signedInUser? 
      <div className="flex flex-wrap content-center ml-32">
 <Image 
        className='inline-flex  items-center  rounded-full bg-[#C4C4C4]'  
        src='/logo.png' 
        alt="logo" 
        width={120}
        height={120}
        />
</div>
:
        <div className="flex flex-wrap content-center">
          <button className="ml-28  cursor-pointer  py-3 px-4 rounded-md bg-[#030217]  transition-all ease-in-out duration-100  text-[#FDBB26] text-2xl shadow-lg " style={{boxShadow : '0px 4px 25px #FDBB26'}}>
         Connect wallet
                  </button>
</div>

  }



      </div>
    </section>
  );
};

export default InfoSection;
