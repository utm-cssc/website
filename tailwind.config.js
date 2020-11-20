/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    typography: theme => ({
      default: {
        css: [
          {
            color: 'var(--color-body)',
            h1: {
              color: 'var(--color-heading)',
            },
            h2: {
              color: 'var(--color-heading)',
            },
            h3: {
              color: 'var(--color-heading)',
            },
            p: {
              color: 'var(--color-body)',
            },
            strong: {
              color: 'var(--color-heading)',
            },
            th: {
              color: 'var(--color-heading)',
            },
          },
        ],
      },
    }),
  },
  variants: {},
  plugins: [require('@tailwindcss/typography')],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'content/**/*.md',
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
    ],
  },
}
