---
title: HTML
icon: /icons/html5.svg
desc: Learn the language that forms the skeleton of every webpage!
link: html
tags:
  - web
keywords:
  - languages
---

# Introduction

## What is HTML?

![An Image](https://www.edureka.co/blog/wp-content/uploads/2019/06/What-is-HTML.jpg)
HyperText Markup Language, also known as HTML, is the building blocks of all
websites. HTML is combined with [CSS](./css) and [Javascript](./javascript) to
further enhance both the functionality and the appearance of the website.

HTML is a markup languge, not to be confused as a programming language or a
scripting language, composed of elements which are used to enclose different
parts of the content to make it appear the way the user wishes. Each individual
elements has attribute that helps specify the the design the element.

<grid-1-x-2 title="Difference between the three types of languages" :reversed=true img-src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190808164614/Programming-Language-vs-Scripting-Language-vs-Markup-Languages.png" link="https://www.geeksforgeeks.org/difference-between-programming-scripting-and-markup-languages/" desc="A quick read about the differences between the three types of languages" button="Check it out!"></grid-1-x-2>

### A Quick Example

This is a simple HTML document ![An Image](https://i.imgur.com/nmbniCJ.png)

As you can see, there are elements such as <body\>, <h1\>, <p\> that encloses
other elements or just general texts, and these elements are what structures and
encodes the document. You will notice that the general texts that are enclosed
by elements are the ones that appear on the page.

For more examples, feel free to press F12 on any website and checkout the
developer tools. You will notice that all the websites will have similar format
as this simple HTML document.

**Don't be afraid to try things on the websites, the website will revert back to
normal once you refresh the page! This is because the changes you make, will not
affect the original source code the website is loaded from**

### Some HTML elements are:

- <div\> - A generic container
- <head\> - Contains metadata informations about the document
- <title\> - Defines the document title that appears in the page tab or title
  bar
- <body\> - The main container for the content
- <p\> - Used to create paragraphs
- <a\> - Anchor tag, mostly used to be combined with the href attribute to
  create hyperlinks to other web pages
- <li\> - Used to create an item list
- <ul\> - Unorder bullet list
  <grid-1-x-2 title="List of HTML elements" img-src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQRxdMM9xku_hh_fntWCgJHZFbdOu417g5ruA&usqp=CAU" link="https://developer.mozilla.org/en-US/docs/Web/HTML/Element" desc="A full list of the elements in HTML" button="Check it out!"></grid-1-x-2>

### Document Object Model

HTML follows the document object model, also known as DOM, which is an
application programming interface that defines the logical structures for the
elements within the HTML documents.The DOM is represented as a tree structure
where each element and attribute is a node such that its parent node would be
the element that is enclosing it. The model is extremely helpful the user is
trying to access and modify elements within a script since users can look for
elements by specifying parts of the model they wish to change.

#### Example of the structure:

![An Image](https://www.w3schools.com/js/pic_htmltree.gif)

#### Consider the example about this current web page:

By using "getElementsByTagName("p")", you can find all the paragraph elements
within the document.

```
const paragraphs = document.getElementsByTagName("p");
paragraphs[0] is the first <p> element
paragraphs[1] is the second <p> element, etc.
```

Then you are free to change the individual elements as you wish. You can read
more about this in the [Javascript](./javascript) resource page

## What can I do with HTML

- Create websites!

  - The website can be as complicated or as simple as the developer would like.
    - For example the developer can implement a dynamic web page by using
      Javascripts and other frameworks or just stick to a simple static website
  - You can even create a local hosted website for temporary uses!

  The only limit is your **imagination**.
  ![An Image](https://dynomapper.com/images/5_tips_for_creating_a_great_website.jpg)

- Internet navigation
  - Utilizing hyperlinks and hypertext, users can be redirected to other web
    pages, like this [CSSC Website](../../)!
- Multiple frameworks to choose from!!
  - [React](./react)
  - [Vue](./vue)
  - Angular
  - Nuxt!!
- Creating games!
  - Web base games by utilizing frameworks and scripts!

## Link to resources

<grid-1-x-2 title="Basic tutorial of HTML" :reversed=true img-src="https://www.w3.org/blog/wp-content/uploads/2019/07/logo-MDNWebDocs.png" link="https://developer.mozilla.org/en-US/docs/Web/HTML" desc="Learn HTML from basic tutorials to advance topics" button="Check it out!"></grid-1-x-2>

<grid-1-x-2 title="W3School tutorial of HTML" img-src="https://internet-salmagundi.com/wp-content/uploads/2019/03/W3-MatFrame-895x493px-Qual100.jpg" link="https://www.w3schools.com/html/" desc="Learn the basics of HTML with w3school" button="Check it out!"></grid-1-x-2>

<grid-1-x-2 title="Learn to become a Frontend Developer" :reversed=true img-src="https://scrimba.com/static/art/maincover.png" link="https://scrimba.com/" desc="Become a Frontend Developer with Scrimba" button="Check it out!"></grid-1-x-2>

<grid-1-x-2 title="Learn the Document Object Model" img-src="https://miro.medium.com/max/3456/1*v9AT7ZaJc6fR2MjYljGEzg.png" link="https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction " button="Check it out!" desc="Become an expert on the Document Object Model!" button="Check it out!"></grid-1-x-2>
