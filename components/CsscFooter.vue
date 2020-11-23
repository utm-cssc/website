<template>
  <div class="container mt-5">
    <div class="mt-5 d-flex flex-row flex-wrap justify-space-between row-0">
      <div class="flex-col col col-md-12 col-lg-9 col-12">
        <nuxt-link to="/">
          <li class="d-flex align-items-center link">
            <img src="/icons/cssc-logo-without-title.svg" />
            <h1>UTM CSSC</h1>
          </li>
        </nuxt-link>

        <li>
          <p class="desc">
            The Computer Science Student Community (CSSC) is an open space for
            Computer Science students to come in and ask questions about their
            university and post-university career. We act as liaisons to the
            Computer Science faculty to ensure that all students can seek the
            appropriate support and guidance.
          </p>
        </li>

        <li class="hello">
          <p>Come say hello <b>@UTM Hacklab DH2014</b></p>
        </li>

        <li>
          <div class="footer-links">
            <a href="https://discord.gg/SHwbmVg" class="footer-link">
              <DiscordIcon class="logo" />
            </a>
            <a
              href="https://www.instagram.com/utm.cssc"
              class="footer-link ml-2"
            >
              <InstagramIcon class="logo" />
            </a>
            <a
              href="https://www.facebook.com/utmcssc/"
              class="footer-link ml-2"
            >
              <FacebookIcon class="logo" />
            </a>
            <a href="https://github.com/utm-cssc" class="footer-link ml-2">
              <GithubIcon class="logo" />
            </a>
          </div>
        </li>

        <li>
          <p class="desc" style="padding: 20px 0;">
            Copyright UTM CSSC - 2020
          </p>
        </li>
      </div>

      <div class="d-flex flex-column col">
        <li>
          <p class="more pt-5 pb-3">More Links.</p>
          <div class="links">
            <nuxt-link to="/resources">
              Resourses
            </nuxt-link>
            <nuxt-link to="/ask-jack">
              Ask Jack
            </nuxt-link>
            <nuxt-link to="/calendar">
              Calendar
            </nuxt-link>
            <nuxt-link to="/course-manager">
              Course Manager
            </nuxt-link>
            <nuxt-link to="/clubs">
              MCS Clubs
            </nuxt-link>
            <nuxt-link to="/ask-jack#faq">
              FAQ
            </nuxt-link>
          </div>
        </li>
      </div>
    </div>
  </div>
</template>

<script>
import DiscordIcon from '../static/icons/discord.svg?inline'
import InstagramIcon from '../static/icons/instagram.svg?inline'
import FacebookIcon from '../static/icons/facebook.svg?inline'
import GithubIcon from '../static/icons/github.svg?inline'

export default {
  components: {GithubIcon, DiscordIcon, InstagramIcon, FacebookIcon},
}
</script>

<style scoped>
.logo {
  height: 35px;
  width: 35px;
}

svg:hover {
  fill: var(--color-primary-dark);
}

.footer-links {
  display: flex;
  font-size: 17px;
}

a {
  text-decoration: none;
}

h1 {
  margin-left: 10px;
  font-weight: 600;
  font-size: 35px;
  color: var(--color-primary);
}

li {
  list-style: none;
}

img {
  width: auto;
  height: 70px;
}

p {
  color: var(--color-body);
  font-weight: 500;
  font-size: 16px;
}

.hello {
  padding: 0 0 30px 0;
}

.desc {
  padding: 40px 0 15px 0;
  max-width: 600px;
  margin-bottom: 0;
}

.more {
  color: var(--color-primary);
  font-weight: 700;
  font-size: 24px;
}

.links {
  font-size: 18px;
}

.links > a {
  color: var(--color-body);
  margin-bottom: 10px;
  display: block;
}

.links > a:hover {
  cursor: pointer;
  color: var(--color-primary);
}
</style>
