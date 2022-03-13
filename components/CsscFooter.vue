<template>
  <footer class="container mt-5">
    <div class="mt-5 flex flex-row flex-wrap justify-space-between row-0">
      <div class="flex-col">
        <nuxt-link to="/">
          <span class="flex align-items-center link">
            <img src="/icons/cssc-logo-blue.svg" alt="CSSC LOGO" />
            <h1 class="font-bold">UTM CSSC</h1>
          </span>
        </nuxt-link>

        <span>
          <p class="desc">
            The Computer Science Student Community (CSSC) is an open space for
            Computer Science students to come in and ask questions about their
            university and post-university career. We act as liaisons to the
            Computer Science faculty to ensure that all students can seek the
            appropriate support and guidance.
          </p>
        </span>

        <span class="hello">
          <p>Come say hello <b>@UTM Hacklab DH2014</b></p>
        </span>

        <span>
          <div class="footer-links">
            <a
              aria-label="Discord-link"
              href="https://discord.gg/SHwbmVg"
              class="footer-link"
            >
              <DiscordIcon id="footer-discord" class="logo" />
            </a>
            <a
              aria-label="Instagram"
              href="https://www.instagram.com/utm.cssc"
              class="footer-link ml-2"
            >
              <InstagramIcon id="footer-instagram" class="logo" />
            </a>
            <a
              aria-label="Facebook"
              href="https://www.facebook.com/utmcssc/"
              class="footer-link ml-2"
            >
              <FacebookIcon id="footer-facebook" class="logo" />
            </a>
            <a
              aria-label="Github"
              href="https://github.com/utm-cssc"
              class="footer-link ml-2"
            >
              <GithubIcon id="footer-github" class="logo" />
            </a>
          </div>
        </span>

        <span>
          <p class="desc" style="padding: 20px 0;">
            Copyright UTM CSSC - {{ getCurrDate() }}
          </p>
        </span>
      </div>

      <div class="flex-column">
        <span>
          <p class="more pt-5 pb-3">More Links</p>
          <div class="links">
            <nuxt-link v-for="l in navItems" :key="l.link" :to="l.link">
              {{ l.title }}
            </nuxt-link>
          </div>
        </span>
      </div>
    </div>
  </footer>
</template>

<script>
import DiscordIcon from '../static/icons/discord.svg?inline'
import InstagramIcon from '../static/icons/instagram.svg?inline'
import FacebookIcon from '../static/icons/facebook.svg?inline'
import GithubIcon from '../static/icons/github.svg?inline'

export default {
  components: {GithubIcon, DiscordIcon, InstagramIcon, FacebookIcon},
  methods: {
    getCurrDate() {
      const currentDate = new Date()
      return currentDate.getFullYear()
    },
  },
  data() {
    return {
      navItems: [
        {
          title: 'Learn More',
          link: '/learn-more',
        },
        {
          title: 'Resources',
          link: '/resources',
        },
        {
          title: 'Ask Jack',
          link: '/ask-jack/',
        },
        {
          title: 'Open Source',
          link: '/projects',
        },
        {
          title: 'Course Manager',
          link: '/course-manager',
        },
        {
          title: 'Calendar',
          link: '/calendar',
        },
        {
          title: 'Open Source Contest',
          link: '/contest',
        },
        {
          title: 'Clubs',
          link: '/clubs',
        },
        {
          title: 'Past Teams',
          link: '/past-teams',
        },
        {
          title: 'Documentation',
          link: '/docs',
        },
        {
          title: 'Contributing',
          link: '/contributing',
        },
      ],
    }
  },
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
  text-align: right;
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
  max-width: 420px;
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
