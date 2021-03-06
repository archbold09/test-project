import { get } from 'axios'

const protocol = 'https://'

const host = 'api.coincap.io/v2'

const getCoinData = (limitCoins = 10) => {
  const resource = `/assets?limit=${limitCoins}`

  const API_URL = `${protocol}${host}${resource}`

  return get(API_URL)
}

export { getCoinData }
