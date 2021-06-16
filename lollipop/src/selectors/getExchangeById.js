import {exchange} from '../data/exchange'

export const getExchangeById = (id) =>{


  return exchange.find( exchange => exchange.id === id);
}
