[![Build Status](https://travis-ci.com/telemark/robot-queue-pull.svg?branch=master)](https://travis-ci.com/telemark/robot-queue-pull)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

# robot-mottak-queue-pull

Retrieves list of incoming documents. Filters result and generate retrieval jobs.

## Setup

Update docker.env

```bash
NODE_ENV=production
JOBS_DIRECTORY_PATH=test/directories/jobs
DONE_DIRECTORY_PATH=test/directories/done
MOTTAK_SERVICE_USERNAME=Louie
MOTTAK_SERVICE_PASSWORD=Louie Louie
MOTTAK_SERVICE_URL=https://svarut.ks.no/tjenester/svarinn/mottaker/hentNyeForsendelser
PAPERTRAIL_HOSTNAME=mottak-queue-pull
PAPERTRAIL_HOST=logs.papertrailapp.com
PAPERTRAIL_PORT=12345
```

## Build

```bash
$ docker build -t mottak-queue-pull .
```

## Usage

```
$ docker run --env-file=docker.env --volume=/test/directories/jobs:/src/test/directories/jobs --rm mottak-queue-pull
```

This will start a container. Do the job. Stop the container and remove it.

## License

[MIT](LICENSE)

![Robohash image of robot-mottak-queue-pull](https://robots.kebabstudios.party/robot-mottak-queue-pull.png "Robohash image of robot-mottak-queue-pull")
