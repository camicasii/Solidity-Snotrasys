import React from 'react'
import Emoji from '../Emoji';
import InfoMarketPlace from '../InfoMarketplace';
import Link from '../link'
import {Redirect, useParams} from 'react-router-dom'
import {ConnectModal} from '../modal/ConnectModal';
import ExchangeBidding from './ExchangeBidding';
import ExchangeTradingHistory from './ExchangeTradingHistory';
import ExchangeItems from './ExchangeItems';
import {getExchangeById} from '../../selectors/getExchangeById';

const ExchangeScreen = () => {
   
   const {exchangeId} = useParams()

  const exchange = getExchangeById(exchangeId);

  if(!exchange) {
    return <Redirect to="/" />
  }

  const {
  title,
  image,
  id,
  trading,
  nft_contract_id,
  address_id,
  address_url,
  trading_event,
  trading_price,
  from,
  from_url,
  to_addres,
  to_url,
  user,
  trading_date
} = exchange
    return(
  <>
        <div className="main">
        <div className="px-4 sm:px-8 lg:px-16 xl:px-20 mx-auto">
          <div className="hero-headline flex flex-col items-center justify-center pt-24 text-center">
            <h1 className=" font-extrabold text-3xl text-yellow-900 dark:text-brown-six">
              NFT Marketplace
            </h1>
            <p className=" font-base text-base text-yellow-600 dark:text-[#906e59]">
              A market made for NFT, where everything is special{" "}
              <Emoji symbol="😋" />
            </p>
          </div>
        </div>
      </div>
      <InfoMarketPlace />
 <div className="px-4 sm:px-8 lg:px-16 xl:px-20 mx-auto mb-24">


<section className="flex justify-center ">
   <img src={image} className="w-54 object-cover h-full sm:h-48 md:h-64 bg-cover bg-center bg-yellow-300 rounded" alt="doge"/>
</section>
       <div className="flex items-center justify-between leading-tight mt-4">
   <h2 className=" font-extrabold text-3xl text-yellow-900 dark:text-brown-six">{title}</h2>
         <Link to="https://docs.google.com/forms/d/e/1FAIpQLSePTf_IgOIVKj5vqoJbysHj1YQXU-IjoBd5XPUcZ3MuTd62xQ/viewform?usp=pp_url&entry.925770343=https://www.bakeryswap.org/%23/exchange/musk-doge/muskdogeInfo/2269/0/1" className="focus:outline-none text-yellow-900 text-sm py-2.5 px-5 rounded-md border border-yellow-900 dark:bg-brown-six  flex items-center font-bold">
                        <svg class="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                        Report
                    </Link>

 </div>
   <h2 className=" font-extrabold text-2xl text-brown-five dark:text-gray-400 mt-4">User: <Link className="text-yellow-900">{user}</Link></h2>
    <div className="flex items-center justify-between leading-tight mt-4 mb-4">

   <h2 className=" font-extrabold text-3xl text-yellow-900 dark:text-brown-six flex justify-between"> <img  src="/logo.svg" alt="logo"/>
     {trading}</h2>
 <h4 className=" font-extrabold text-3xl text-yellow-900 dark:text-red-300 flex justify-between"><img  src="/icon_vote_red.svg" alt="icon_vote_red"/>
 0</h4>
 </div>
  <ConnectModal />
   <ExchangeItems nft_contract_id={nft_contract_id} id={id} address_id={address_id} address_url={address_url}/>
     <ExchangeBidding />
  <ExchangeTradingHistory trading_event={trading_event} trading_price={trading_price} from={from} from_url={from_url} to_addres={to_addres} to={to_url} trading_date={trading_date}/>



 </div>
  </>
  );
}
export default ExchangeScreen
