const axios = require('axios')
const uuid = require('../generate-uuid')
const config = require('../../config')
const logger = require('../logger')

module.exports = () => {
  return new Promise(async (resolve, reject) => {
    const options = {
      url: config.MOTTAK_SERVICE_URL,
      method: 'get',
      auth: {
        username: config.MOTTAK_SERVICE_USERNAME,
        password: config.MOTTAK_SERVICE_PASSWORD
      }
    }
    const jobId = uuid()
    logger('info', ['get-nye-forsendelser', jobId, 'url', config.MOTTAK_SERVICE_URL, 'start'])
    try {
      const { data } = await axios(options)
      logger('info', ['get-nye-forsendelser', jobId, 'url', config.MOTTAK_SERVICE_URL, 'success', data.length])
      if (data.length > 0) {
        return resolve({
          '_id': jobId,
          forsendelser: data
        })
      } else {
        logger('info', ['get-nye-forsendelser', jobId, 'no new forsendelser', 'finished'])
        process.exit(0)
      }
    } catch (error) {
      logger('error', ['get-nye-forsendelser', 'url', config.MOTTAK_SERVICE_URL, error])
      return reject(error)
    }
  })
}
