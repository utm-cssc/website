<template>
  <div>
    <nav-bar />
    <Nuxt />
  </div>
</template>

<script>
import { NavBar } from '@/components/NavBar'

export default {
  components: {
    NavBar
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
