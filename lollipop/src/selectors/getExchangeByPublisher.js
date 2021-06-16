import {exchange} from '../data/exchange'

export const getExchangeByPublisher = (publisher) =>{

  const validPublishers = ['musk-doge','safe-nft'];

  if (!validPublishers.includes(publisher) ){
    throw new Error(`Publisher "${publisher}" is not valid`);
  }

  return exchange.filter( exchange => exchange.publisher === publisher);
}
