import React from 'react'
import Link from '../link'

const ExchangeTradingHistory = ({
    trading_event,
    trading_price,
    from,
    from_url,
    to_addres,
    to_url,
    trading_date
}) => {
   

    return(
  <>
  <h1 className="text-2xl sm:mx-32 mx-4 mb-4 dark:text-brown-six font-extrabold mt-16 text-yellow-900">Trading History</h1>
   <table className="border-collapse w-full mt-3">
    <thead className="bg-brown-primary text-yellow-900">
        <tr>
            <th className="p-3 font-bold uppercase   hidden lg:table-cell">Event</th>
            <th className="p-3 font-bold uppercase   hidden lg:table-cell">Price</th>
            <th className="p-3 font-bold uppercase    hidden lg:table-cell">From</th>
            <th className="p-3 font-bold uppercase   hidden lg:table-cell">To</th>
            <th className="p-3 font-bold uppercase   hidden lg:table-cell">Date</th>

        </tr>
    </thead>
    <tbody >
        <tr className="bg-white  bg-opacity-0  flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
            <td className="w-full lg:w-auto p-3 text-brown-five font-bold text-center border border-b text-center block lg:table-cell relative lg:static">
                <span className="lg:hidden absolute top-0 left-0 bg-brown-primary px-8 py-4 text-xs font-bold uppercase">Event</span>
                {trading_event}
            </td>
            <td className="w-full lg:w-auto p-3 text-brown-five font-bold text-center border border-b text-center block lg:table-cell relative lg:static">
                <span className="lg:hidden absolute top-0 left-0  bg-brown-primary px-8 py-4 text-xs font-bold uppercase">Price</span>
                {trading_price}
            </td>
          	<td className="w-full lg:w-auto p-3 text-brown-five font-bold text-center border border-b text-center block lg:table-cell relative lg:static">
                <Link to={from_url}>

                <span className="lg:hidden absolute top-0 left-0 bg-brown-primary px-8 py-4 text-xs font-bold uppercase">From</span>
               {from.substring(-1,8) }...
                </Link>
          	</td>
            <td className="w-full lg:w-auto p-3 text-brown-five font-bold text-center border border-b text-center block lg:table-cell relative lg:static">
                <Link to={to_url}>
                    <span className="lg:hidden absolute top-0 left-0 bg-brown-primary px-8 py-4 text-xs font-bold uppercase">To</span>
                {to_addres.substring(-1,8)}...
</Link>
            </td>
 	<td class="w-full lg:w-auto p-3 text-brown-five font-bold text-center border border-b text-center block lg:table-cell relative lg:static">
                <span className="lg:hidden absolute top-0 left-0 bg-brown-primary px-8 py-4 text-xs font-bold uppercase">Date</span>
      {trading_date}
                	</td>
        </tr>

           </tbody>
</table>

  </>
  );
}
export default ExchangeTradingHistory
