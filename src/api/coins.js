import { get } from 'axios'
import { getDayInterval } from '@/utils/dateFormat'

const protocol = 'https://'

const host = 'api.coincap.io/v2'

const getCoinData = (limitCoins = 10) => {
  const resource = `/assets?limit=${limitCoins}`

  const API_URL = `${protocol}${host}${resource}`

  return get(API_URL)
}

const getCoinData24Hour = (idCoin) => {
  const date = getDayInterval()

  const resource = `/assets/${idCoin}/history?start=${date.start}&end=${date.end}&interval=d1`

  const API_URL = `${protocol}${host}${resource}`

  return get(API_URL)
}

export { getCoinData, getCoinData24Hour }
