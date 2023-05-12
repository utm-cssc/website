---
title: C Programming Language
icon: /icons/robotics.svg
desc: Learn one of the most influential programming languages in the world!
link: low-level-cs
tags:
  - Low Level CS
keywords:
  - Low level programming
  - c programming language
---

# The C Programming Language

## Prerequisites

- Knowledge of basic programming concepts like variables, types, loops,
  lists/arrays, functions
- Some beginner level programming experience

## Intro to C

### Motivation

As programmers, when making software, we are always limited by the language
we're working with. In most cases, this is perfectly fine, but sometimes we need
a bit more control over the machine that we're programming.

This requires a language that gives us full control over fine details of our
program such as memory management and pointer manipulation (which we will talk
about later).

As with any programming language we also would like this language to be simple,
fast, and reliable.

### What Is the C Programming Language?

The C Programming Language is one of the most widely used and influential
programming languages of all time.

The language is used to develop programs in which speed, portability, and
low-level control is required. For example, the hearts of the Windows, Mac, and
Linux operating systems (called the kernel) are all written in C.

For a bit more background and a quick hello world tutorial in C check out this
video!

<VideoContainer vid-src="https://www.youtube.com/embed/U3aXWizDbQ4"></VideoContainer>

## Useful Concepts for Learning C

For this guide, we're assuming you're already familiar with the core concepts of
programming and so we won't cover the basics of C here. We will instead focus on
more advanced C concepts which will hopefully give you a headstart when working
with C!

To learn the basics of C yourself checkout some suggested courses under 'Helpful
Courses'.

### Structs

We can use structs in C to combine many different pieces of data into one
variable type like an integer or character type. The following video shows
exactly how to use structs in C!

<VideoContainer vid-src="https://www.youtube.com/embed/VMFKz7Klx7I"></VideoContainer>

### Pointers

Pointers are variables that hold the memory addresses of other variables in your
code. These pointers can be used to access or change the values of the variables
they 'point' to.

In C, We use pointers very often and so it's crucial to master pointers at both
a basic and advanced level. The following video is a great explaination on how
programs use memory and pointers.

<VideoContainer vid-src="https://www.youtube.com/embed/XISnO2YhnsY"></VideoContainer>

### Memory Management

Using pointers, we can allocate memory but what if we want to allocate specific
amounts of memory? And what if we want to allocate memory at runtime? This
requires memory allocation! The following video is a great intro to dynamic
memory allocation in C.

<VideoContainer vid-src="https://www.youtube.com/embed/xa4ugmMDhiE"></VideoContainer>

### File IO

When writing programs we will usually always want to save our output somewhere.
Similarly, sometimes we may want to take in large inputs from files. This
requires some interface that lets us read and write files. The following is a
video that gives a really great intro to file IO in C.

<VideoContainer vid-src="https://www.youtube.com/embed/bOF-SpEAYgk"></VideoContainer>

### Debugging

As with any programming endeavour, you will encounter many bugs. A great tool to
debug programs in C is GDB (GNU Debugger). You will first have to install GDB.
Once installed, you can watch this great video below to learn how to use GDB to
debug your code!

<VideoContainer vid-src="https://www.youtube.com/embed/bWH-nL7v5F4"></VideoContainer>

You should also checkout the GDB cheatsheet under the 'Cheatsheets' section for
even more GDB commands to play around with!

## Helpful Courses

If you wish to take a full length C programming course we have picked out some
our recommendations below!

Note that no course or guide will be completely comprehensive so we recommend
going through EVERY unique topic from ALL the courses listed below to get as
full of an understanding of C as possible.

### Codecademy

<grid-1-x-2 
link="https://www.codecademy.com/learn/learn-c" 
img-Src="https://yt3.ggpht.com/ytc/AKedOLT0kqt2HMvg8WQIVgSECEaWERFksEjv-zv93adT0Q=s900-c-k-c0x00ffffff-no-rj" 
button="Start Learning!"  
desc="This is an online beginner course from Codecademy. It includes an interactive code editor so you can actually write code to solve problems as you learn.">
</grid-1-x-2>

### Learn-C

<grid-1-x-2 
:reversed="true"
link="https://www.learn-c.org" 
img-Src="https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg" 
button="Start Learning!"  
desc="This is another free online course from learn-c.org. It covers many different basic and advanced topics. It also includes a code editor with exercises for you to practice!">
</grid-1-x-2>

### Youtube Course

<grid-1-x-2 
link="https://www.youtube.com/watch?v=87SH2Cn0s9A" 
img-Src="https://i.ytimg.com/vi/87SH2Cn0s9A/maxresdefault.jpg" 
button="Start Learning!"  
desc="This is a great, free course on youtube. It's taught well, covers a ton of beginner and advanced topics, and uses examples to show concepts in practice.">
</grid-1-x-2>

## More Resources

### Cheatsheet

Heres a cheatsheet from codecademy that includes a ton of common and useful C
syntax.

- [C Cheatsheet](https://www.codecademy.com/learn/learn-c/modules/hello-world-c/cheatsheet)

Heres a useful cheatsheet for GDB

- [GDB Cheatsheet](https://users.ece.utexas.edu/~adnan/gdb-refcard.pdf)

### Documentation

Docs are extremely useful to have as reference whenever coding.

- [C Documentation](https://devdocs.io/c)
