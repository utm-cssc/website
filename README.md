<h1 align="center">
  <p align="center">UTM CSSC Website</p>
  <p align="center" width="100%">
  <a href="https://cssc.utm.utoronto.ca/">
    <img src="/assets/logo/cssc-logo.svg" width="200px" align="center">
  </a>
  </p>
  <h4 align="center">Supporting MCS Students</h4>
  <p align="center" width="100%">
    <a href="https://cssc.utm.utoronto.ca/"></a>
  </p>
</h1>
<p align="center">
  <a href="https://hub.docker.com/r/utmcssc/website"><img src="https://img.shields.io/docker/cloud/build/utmcssc/website" alt="Docker Build Status"></a>
  <a href="https://hub.docker.com/r/utmcssc/website"><img src="https://img.shields.io/docker/pulls/utmcssc/website" alt="Docker Pulls"></a>
</p>

<p align="center">
  <a href="#introduction">Introduction</a> •
  <a href="#installation">Installation</a> •
  <a href="#contact">Contact</a>
</p>

## Introduction

The Computer Science Student Community (CSSC) is an open space for Computer
Science students to come in and ask questions about their university and
post-university career!

- **Growth**

  > We're here for you with opportunities, spaces and resources to inform your
  > computer science journey through university!

- **Resources**

  > We curate resources from across the internet and produce original content
  > for our community!

- **Collaboration**
  > We work closely with other MCS clubs and societies in order to achieve
  > common goals in the CS community!

## Installation

### Github

1. git pull git@github.com:utm-cssc/website.git
2. git submodule update --init --recursive

### Yarn Installation

1. Install the required dependencies

```
yarn install
```

2. Run the web server

```
yarn run dev
```

### Docker Installation

1. Install [Docker Desktop](https://www.docker.com/products/docker-desktop)

2. Start the server

```
docker compose build # Build the docker image
docker compose up -d # Run in detached mode
```

The website will be listening and serving on `localhost:4000`

## Contact

You can contact us through these channels:

- [Email](mailto:cssc.utm@utoronto.ca)
- [Github Issues](https://github.com/utm-cssc/website/issues)
