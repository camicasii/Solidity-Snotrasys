import React, {useMemo} from 'react'
import {getExchangeByPublisher} from '../../selectors/getExchangeByPublisher';
import ExchangeCard from './ExchangeCard';


export const ExchangeList = ({publisher}) => {

    const exchange =  useMemo(() => getExchangeByPublisher(publisher) , [publisher]);
   

    return(
       

        <ul className="grid md:grid-cols-3 grid-cols-1 sm:gap-8 gap-5 my-12 mx-auto px-4 md:px-24 sm:ml-60 ml-0" >
        {
            exchange.map(exchange =>(
                <ExchangeCard key={exchange.id}
                    {...exchange}>
            </ExchangeCard>
                                 
            
            ))
        }
</ul>
   

  );
}

