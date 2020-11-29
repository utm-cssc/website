---
title: Grid Components
desc: Informs users how to use the grid components
icon: /docs/grid.svg
link: grid-components
---

# Grid Components

The grid component is used in many different pages to display features.

### How to use:

Users can use the grid component by simply calling:

- <grid-1-x-2\> </grid-1-x-2\>
- <grid-1-x-3\> </grid-1-x-3\>
- <grid-2-x-3\> </grid-2-x-3\>

These elements are like any other default HTML elements such as <h1\>. The user
can adjust the element by passing in specific prop values

#### Grid 1 x 2

Props:

| Name     | Type    | Description                              | Default |
| -------- | ------- | ---------------------------------------- | ------- |
| title    | String  | Title of the component                   | ''      |
| desc     | String  | Component's Description                  | ''      |
| button   | String  | Button Description                       | ''      |
| link     | String  | Button link                              | ''      |
| img-src  | String  | Image link                               | ''      |
| reversed | Boolean | Reverse the orientation of the component | false   |

Example:

```
<grid-1-x-2
    title="Component title"
    img-src="Link to image"
    link="Link to redirect users to"
    desc="Component description"
    button="Button Description">
</grid-1-x-2>
```

<grid-1-x-2 
    title="Component title"
    img-src="https://i.imgur.com/pX2adkj.png"
    link="https://cssc.utm.utoronto.ca/"
    desc="Component description"
    button="Button Description"> </grid-1-x-2>

#### Grid 1 x 3 / Grid 2 x 3

Props:

| Name     | Type  | Description                                      | Default |
| -------- | ----- | ------------------------------------------------ | ------- |
| Children | Array | Array of objects containing title, desc and icon | []      |

Objects in Children:

| Name  | Type   | Description                   | Default |
| ----- | ------ | ----------------------------- | ------- |
| title | String | Title of the component        | ''      |
| desc  | String | Component's Description       | ''      |
| icon  | String | Path to the iamge of the icon | ''      |
