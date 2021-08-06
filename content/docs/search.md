---
title: Search
desc: Learn how we implemented search on the website
icon: /docs/search.svg
link: search
---

# Search

The search bar is utilized to provide easy navigation for users. The code can be
found under components/global/SearchBar.vue. The search bar leverages Nuxt to
search through content in a database query-like manner.

There are two parts to the results generated: page indexes and resources.

Page indexes are defined under content/navigation/page-indexes.json with the
following schema:

```
{
  title: String           # Name of page
  tags: List[str]         # Categories for that page
  keywords: List[str]     # Additional keywords to help with searching
  url: String             # The url that we redirect to
}
```

To extend functionality, you would use Nuxt to query content in a similar manner
to navigation and resources.
