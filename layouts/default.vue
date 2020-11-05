<template>
  <v-app>
    <cssc-nav />
    <nuxt />
    <cssc-footer />
  </v-app>
</template>

<script>
import CsscNav from '@/components/CsscNav'
import CsscFooter from '@/components/CsscFooter'

export default {
  components: {
    CsscNav,
    CsscFooter,
  },
}
// /* eslint-disable */
// export default {
//   created () {
//     // eslint-disable-next-line
//     document.addEventListener('keyup', (e) => {
//       if (e.key === 'd') {
//         // eslint-disable-next-line
//         [].forEach.call(document.querySelectorAll('*'), function (a) {
//           a.style.outline =
//             '1px solid #' + (~~(Math.random() * (1 << 24))).toString(16)
//         })
//       }
//     })
//   }
// }
</script>
