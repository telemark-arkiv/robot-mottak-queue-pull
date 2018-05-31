const logger = require('../logger')
const filterForsendelser = forsendelse => forsendelse.tittel !== ''

module.exports = data => {
  return new Promise(async (resolve, reject) => {
    logger('info', ['filter-forsendelser', data._id, 'start'])
    const filtered = data.forsendelser.filter(filterForsendelser)
    if (filtered.length > 0) {
      data.filtered = filtered
      logger('info', ['filter-forsendelser', data._id, 'filtered', filtered.length, 'success'])
      return resolve(data)
    } else {
      logger('info', ['filter-forsendelser', data._id, 'no new forsendelser', 'finished'])
      process.exit(0)
    }
  })
}
