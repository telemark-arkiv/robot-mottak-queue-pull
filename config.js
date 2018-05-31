if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
module.exports = {
  DONE_DIRECTORY_PATH: process.env.DONE_DIRECTORY_PATH || 'test/directories/done',
  JOBS_DIRECTORY_PATH: process.env.JOBS_DIRECTORY_PATH || 'test/directories/jobs',
  MOTTAK_SERVICE_USERNAME: process.env.MOTTAK_SERVICE_USERNAME || 'Louie',
  MOTTAK_SERVICE_PASSWORD: process.env.MOTTAK_SERVICE_PASSWORD || 'Louie Louie',
  MOTTAK_SERVICE_URL: process.env.MOTTAK_SERVICE_URL || 'https://service.io/tjenester/svarinn/mottaker/hentNyeForsendelser/true',
  PAPERTRAIL_HOSTNAME: process.env.PAPERTRAIL_HOSTNAME || 'mottak-queue-pull',
  PAPERTRAIL_HOST: process.env.PAPERTRAIL_HOST || 'logs.papertrailapp.com',
  PAPERTRAIL_PORT: process.env.PAPERTRAIL_PORT || 12345
}
