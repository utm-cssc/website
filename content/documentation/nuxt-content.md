---
title: Nuxt Content
desc: Informs users how to use nuxt content components
link: nuxt-content
---

# Nuxt Content

Nuxt content is a Git-based Headless CMS, which allows you to fetch your
Markdown, JSON, YAML, XML and CSV files through a MongoDB like API from /content
folder.

## Assessing content data

We can use a script to get data from content folder.

```
async asyncData ({ $content, params, error }) {
    const page = await $content('name', params.slug).fetch()

    return { page }
  },
```

**Note:** Here 'name' can by the name of the folder you want to fetch from
content folder.

We can also filter the data we request for by using additional functions
provided by nuxt [here](https://content.nuxtjs.org/fetching/)

## md Files

### Displaying md files

We use the script that we should before for asscessing md file data, which is
places in \_slug.vue file.

```
<template>
  <article class="mt-5 pb-5">
    <nuxt-content
      class="prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto"
      :document="article"
    />
  </article>
</template>

<script>
  export default {
    async asyncData({ $content, params }) {
      const article = await $content('articles', params.slug).fetch()

      return { article }
    }
  }
</script>
```

We use
[TailwindCSS Typography module](https://github.com/tailwindlabs/tailwindcss-typography)
to display these md files.

### Editting md Files

We can use YAML to provide additional information as props:

```
---
title: Nuxt Content
desc: Informs users how to use nuxt content components
link: nuxt-content
---
```
