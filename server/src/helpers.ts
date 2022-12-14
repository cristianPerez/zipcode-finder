import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'

// TODO add to a config file and env vars
const BASE_URL = 'https://api.zippopotam.us'

export const getSearch = async (zipcode: string, country: string) => {
  try {
    const { data } = await axios({
      method: 'GET',
      url: `${BASE_URL}/${country}/${zipcode}`,
      headers: {
        Accept: 'application/json',
      },
    })
    const place = data.places.shift()
    return {
      id: uuidv4(),
      zipcode: data['post code'],
      country: data?.country,
      countryAbb: country,
      city: place['place name'],
      state: place?.state,
    }
  } catch (error) {
    // TODO check the status of the request
    throw new Error('Not Found')
  }
}
