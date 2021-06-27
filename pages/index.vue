<template>
  <div class="container">
    <!-- Title -->
    <div class="mt-5 flex flex-column justify-center align-center">
      <CenteredHero
        icon="../icons/cssc-logo-blue.svg"
        alt="CSSC Logo"
        title="UTM CSSC"
        desc="Helping MCS Students"
        additionalInfo="Have a great summer! 🌞"
        :button1="button1"
        :button2="button2"
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
        Meet the Team
      </div>
      <div class="teams">
        <Teammate
          v-for="mate in currentTeam"
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
            'The CSSC is an open space for Computer Science students to come in and ask questions about their university and post-university career. We cover topics such as: technology, school, mental health, personal goals, and career development. We act as liaisons to the Computer Science faculty to ensure that all students can seek appropriate support and guidance. The CSSC seeks to support students through community initiatives built upon inclusivity and empowerment.',
          icon: './icons/student_support_guidance.svg',
          alt: 'Guidance for Students',
        },
        {
          title: 'Academic and Professional Growth',
          desc:
            'The CSSC will be collaborating with the MCS organizations and hosting multiple workshops throughout the academic year to better equip students with technological knowledge sought after by employers in the industry. We provide students with opportunities, space, and resources to work on community projects, technical interview questions, and fun technical events so students can gain experience outside of the classroom. The CSSC also aims to inform students of what options they have post-graduation with a Computer Science degree and how they can combine this degree with other fields.',
          icon: './icons/growth.svg',
          alt: 'Academic Growth',
        },
        {
          title: 'Resources',
          desc:
            'The CSSC has devoted our technology team to develop processes and tools to help Computer Science students succeed academically and professionally. We curate resources from across the internet and produce original content all the while keeping the interest of students as the top priority.',
          icon: './icons/resources.svg',
          alt: 'Resources',
        },
        {
          title: 'Collaboration',
          desc:
            'The CSSC provides support to all of the clubs/societies belonging to UTM’s MCS community. We provide spaces and resources for MCS organizations and work closely with them in order to achieve common goals; some of which are: community building, academic achievements, professional development, mental wellness, diversity, equity and inclusion.',
          icon: './icons/collaboration.svg',
          alt: 'Collaboration',
        },
      ],
      button1: {
        label: 'Ask Jack',
        link: 'ask-jack',
      },
      button2: {
        label: 'Resources',
        link: '/resources',
        // ../../resources/mcs-townhall/cssc_mcs_townhall_notes_2020.pdf
      },
    }
  },
  async asyncData({$axios, $content, params, error}) {
    const teamDataStore = await $content('team').fetch()
    const currentTeam = teamDataStore[1].team
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
    return {contributors, currentTeam}
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
