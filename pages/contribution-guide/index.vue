<template>
  <div class="container">
    <CenteredThreeColumnGrid :children="contributions" :rounded="false" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      contributions: [
        {
          title: 'File a Bug',
          desc:
            'See an issue with the website, please notify us by submitting an issue on GitHub.',
          icon: './icons/growth.svg',
          button: {
            label: 'Submit an Issue',
            link:
              'https://github.com/utm-cssc/website/issues/new?assignees=&labels=Type%3A+Bug&template=bug.md&title=%F0%9F%90%9B+Bug%3A+%7B%7BEnter+Bug+Title%7D%7D',
          },
        },
        {
          title: 'Request a Feature',
          desc:
            'We would love to create helpful resources for students. Tell us what you would like to see on this website.',
          icon: './icons/resources.svg',
          button: {
            label: 'Feature Request',
            link:
              'https://github.com/utm-cssc/website/issues/new?assignees=&labels=Type%3A+Enhancement&template=feature-request.md&title=%F0%9F%9A%80+Feature+Request%3A+%7B%7BFeature+Request+Title%7D%7D',
          },
        },
        {
          title: 'Contribute Code',
          desc:
            'Help us by creating implementing features for other students and make UTM a more open source community.',
          icon: './icons/collaboration.svg',
          button: {
            label: 'Check out our guide',
            link: '/contribution-guide/code',
          },
        },
      ],
    }
  },
}
</script>
