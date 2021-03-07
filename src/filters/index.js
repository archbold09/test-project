import numeral from 'numeral'
import moment from 'moment'

const dollarFilter = function (value) {
  if (!value) {
    return '$ 0'
  }

  return numeral(value).format('($ 0.00a)')
}

const percentFilter = function (value) {
  if (!value) {
    return '0%'
  }

  return `${Number(value).toFixed(2)}%`
}

const dateFilter = function (value) {
  return moment(value).format('MMMM Do YYYY')
}

export { dollarFilter, percentFilter, dateFilter }
