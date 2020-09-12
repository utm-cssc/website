<template>
  <div>
    <nav-bar />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import { NavBar } from '@/components/NavBar'
import { Footer } from '@/components/Footer'
export default {
  components: {
    NavBar,
    Footer
  }
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
