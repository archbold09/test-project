import { get } from 'axios'

const URL = 'https://api.coincap.io/v2/assets?limit=10'

const getCoinData = () => {
  return get(URL)
}

export { getCoinData }
