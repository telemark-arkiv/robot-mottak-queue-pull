const getNyeForsendelser = require('./lib/steps/get-nye-forsendelser')
const filterForsendelser = require('./lib/steps/filter-forsendelser')
const generateJobs = require('./lib/steps/generate-jobs')
const saveJobs = require('./lib/steps/save-jobs')
const saveDone = require('./lib/steps/save-done')
const logger = require('./lib/logger')

logger('info', ['index', 'start'])

getNyeForsendelser()
  .then(filterForsendelser)
  .then(generateJobs)
  .then(saveJobs)
  .then(saveDone)
  .then(data => {
    logger('info', ['index', data._id, 'finished'])
    process.exit(0)
  })
  .catch(error => {
    logger('error', ['index', 'error', JSON.stringify(error)])
    process.exit(1)
  })
