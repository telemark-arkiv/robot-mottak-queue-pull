const logger = require('../logger')

module.exports = data => {
  return new Promise(async (resolve, reject) => {
    logger('info', ['generate-jobs', data._id, 'forsendelser', data.forsendelser.length])
    try {
      const jobs = data.forsendelser.map(job => Object.assign({}, job, {_id: job.id}))
      data.jobs = jobs
      return resolve(data)
    } catch (error) {
      logger('error', ['generate-jobs', data._id, 'forsendelser', data.forsendelser.length, error])
      return reject(error)
    }
  })
}
