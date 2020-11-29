---
title: Nuxt Content
desc: Informs users how to use nuxt content components
icon: /docs/content.svg
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
    const data = await $content('name', params.slug).fetch()

    return { data }
  },
```

**Note:** 'name' can be the name of the folder/directory that you want to fetch
from content folder.

We can also filter the data we request for by using additional functions
provided by [Nuxt](https://content.nuxtjs.org/fetching/)

### Example Data (JSON)

```
{
    "projects": [
      {
        "name": "Toonin",
        "desc": "Share or stream audio and video over the web in real time.",
        "repo": "https://github.com/grey-software/toonin",
        "demo": "https://www.toonin.ml",
        "logo": "/logos/projects/toonin.svg",
        "tags": ["grey-software"]
      },
    ]
}
```

## md Files

### Displaying md files

We use the following script in a \_slug.md file which fetches the md files and
displays it with a /filename

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

We can use YAML to provide additional metadata to our documents:

```
---
title: Nuxt Content
desc: Informs users how to use nuxt content components
link: nuxt-content
---
```
