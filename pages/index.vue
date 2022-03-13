<template>
  <div class="container">
    <!-- Title -->
    <div class="mt-5 flex flex-column justify-center align-center">
      <CenteredHero
        icon="../icons/cssc-logo-blue.svg"
        alt="CSSC Logo"
        title="UTM CSSC"
        desc="Helping MCS Students"
        additionalInfo="Check out our calendar to stay on top of MCS events!"
        :button1="button1"
        :button2="button2"
        :button3="button3"
        :button4="button4"
      />
    </div>
    <a id="cssc-moto" />
    <!-- What is CSSC -->
    <div class="my-5">
      <div class="cssc-heading">
        What is CSSC?
      </div>
      <p>
        The Computer Science Student Community (CSSC) is a community
        organization overseen by the Computer Science Faculty in MCS. Taking its
        roots from the Hacklab, the CSSC is tasked to support students’ academic
        and professional needs throughout their university career all while
        providing space and opportunity for community growth. The CSSC also acts
        as a central hub for computer science students to seek guidance, advice,
        and support. Furthermore, they act as a supporting pillar between all
        MCS student clubs/societies.
      </p>
    </div>
    <CenteredThreeColumnGrid :children="features" :rounded="false" />
    <!-- Tech Team -->
    <div class="my-5">
      <div class="cssc-heading">
        Leadership
      </div>
      <div class="teams">
        <Teammate
          v-for="mate in executiveTeam"
          :key="mate.name"
          :imgSrc="mate.imgSrc"
          :name="mate.name"
          :position="mate.position"
          :message="mate.message"
          :discord="mate.discord"
          :email="mate.email"
          :linkedin="mate.linkedin"
          :website="mate.website"
        />
      </div>
    </div>
    <!-- Collabutors Section -->
    <div class="my-3">
      <div class="cssc-heading">
        Contributors
      </div>
      <Contributors :contributors="contributors" />
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      features: [
        {
          title: 'Student Support and Guidance',
          desc:
            'The CSSC aims to support all students within the Computer Science community and provide them with appropriate resources to combat their issues.',
          icon: './icons/student_support_guidance.svg',
          alt: 'Guidance for Students',
        },
        {
          title: 'Academic and Professional Growth',
          desc:
            'The CSSC aims to equip students with knowledge that helps them tailor their university experience to support their careers and post-graduation goals and aspirations.',
          icon: './icons/growth.svg',
          alt: 'Academic Growth',
        },
        {
          title: 'Development of Technology Resources',
          desc:
            'The CSSC has devoted our technology team to develop processes and tools to help Computer Science students succeed academically and professionally.',
          icon: './icons/resources.svg',
          alt: 'Resources',
        },
        {
          title: 'Collaboration with MCS Clubs and Societies',
          desc:
            'The CSSC contributes resources to assist all clubs and societies within the MCS community.',
          icon: './icons/collaboration.svg',
          alt: 'Collaboration',
        },
      ],
      button1: {
        label: 'Learn More',
        link: '/learn-more',
      },
      button2: {
        label: 'Resources',
        link: '/resources',
        // ../../resources/mcs-townhall/cssc_mcs_townhall_notes_2020.pdf
      },
      button3: {
        label: 'Ask Jack',
        link: 'ask-jack',
      },
      button4: {
        label: 'Open Source Contest',
        link: 'contest',
      },
    }
  },
  async asyncData({$axios, $content, params, error}) {
    const teamDataStore = await $content('team', 'team').fetch()
    const executiveTeam = teamDataStore?.teams[0].members
    const contributors = []
    await $axios
      .$get('https://api.github.com/repos/utm-cssc/website/contributors')
      .then(res => {
        for (const c of res) {
          const contributor = {
            login: c.login,
            imgSrc: c.avatar_url,
            url: c.html_url,
          }
          contributors.push(contributor)
        }
      })
      .catch(e => {
        console.log(e.message)
        console.log({statusCode: 404, message: 'Something went wrong'})
      })
    return {contributors, executiveTeam}
  },
}
</script>

<style scoped>
.teams {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.hero-full-height {
  height: 100vh;
}

@media screen and (max-width: 768px) {
  .hero-full-height {
    min-height: 100vh;
  }

  .teams {
    justify-content: center;
  }
}

@media (min-width: 1904px) {
  .teams {
    justify-content: initial;
  }
}
</style>
