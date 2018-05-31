const saveFile = require('../save-file')
const logger = require('../logger')
const config = require('../../config')

module.exports = data => {
  return new Promise(async (resolve, reject) => {
    let saved = []
    logger('info', ['save-jobs', data._id, 'jobs', data.jobs.length])
    async function next () {
      if (data.jobs.length > 0) {
        const job = data.jobs.pop()
        const filePath = `${config.JOBS_DIRECTORY_PATH}/${job._id}.json`
        try {
          await saveFile({filePath: filePath, data: job})
          saved.push(job)
          await next()
        } catch (error) {
          return reject(error)
        }
      } else {
        data.saved = saved
        return resolve(data)
      }
    }
    await next()
  })
}
