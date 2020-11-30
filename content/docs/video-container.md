---
title: Video Container
desc: Using the video container in your resource pages
icon: /docs/film.svg
link: video-container
---

# Video Container

This is a repsonsive video container making it easy to add videos on our
resource pages!

## How to use:

Users can use the video container by simply calling:

- <VideoContainer\> </VideoContainer\>

These elements are like any other default HTML elements such as <h1\>. The user
can adjust the element by passing in specific prop values

### Props

| Name    | Type   | Description                                  |
| ------- | ------ | -------------------------------------------- |
| vid-src | String | Put the url of the iframe we want to display |

### Example

```
<VideoContainer
vid-src="https://www.youtube.com/embed/SS-9y0H3Si8">
</VideoContainer>
```

<VideoContainer vid-src="https://www.youtube.com/embed/pTB0EiLXUC8"></VideoContainer>
