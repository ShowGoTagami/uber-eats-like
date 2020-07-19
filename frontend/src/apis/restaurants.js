import axios from 'axios';
import { restaurantsIndex } from '../urls/index'

export const fetchRestaurants = async() => {
  return await axios.get(restaurantsIndex)
  .then(res => {
    return res.data
  })
  .catch((e) => console.error(e))
}
