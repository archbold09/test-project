const moment = require('moment')

const getDayInterval = () => {
  const start = moment().subtract(7, 'days').format('YYYY-MM-DD') + 'T00:00:00.000Z'

  const end = moment().add(1, 'days').format('YYYY-MM-DD') + 'T00:00:00.000Z'

  const dateApi = {
    start: moment(start).format('x'),
    end: moment(end).format('x')
  }

  return dateApi
}

export { getDayInterval }
