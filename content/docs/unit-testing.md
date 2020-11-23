---
title: Unit Testing
desc: Test your components to verify their functionality
icon: /icons/android.svg
link: unit-testing
---

# Unit Testing

## What are Unit Tests?

Unit tests are a small piece of software that developers use to test and verify
the functionality of their components/project when it's deployed live.

## Why are Unit Tests important?

The purpose of Unit Tests are to validate that each unit of the software
performs as designed. When working on a large project, there is the potential
chance of creating side effects where other components can cause an unexpected
behaviour.

## Getting started

<grid-1-x-2 title="Quick start to unit testing!" img-src="https://res.cloudinary.com/practicaldev/image/fetch/s--glpQtpEZ--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://thepracticaldev.s3.amazonaws.com/i/lkqogyvxhgxdkajirreg.png" link="https://www.vuemastery.com/courses/unit-testing/what-to-test/" desc="Learn how to write tests for your components!" button="Check it out!"></grid-1-x-2>

## Unit Test structure

All test files should belong under **components/tests** and should be named as
**[component].spec.js**

| Function Name | About                                                    |
| ------------- | -------------------------------------------------------- |
| describe      | Creating a block to group several related tests          |
| it            | An alias of test() to test your components functionality |
| expect        | Asserts the component output with your expected output   |

The following is the basic template of a Unit Test:

```
// components/__tests__/__.spec.js

import {mount} from '@vue/test-utils'
import Component from '...'

describe('group1', () => {
    const wrapper = mount(Component)

    it('testName', () => {
        expect()
    })
    ...
})
```

### Examples

This test checks whether the Logo component has been initialized or not

```
// components/__tests__/logo.spec.js

import {mount} from '@vue/test-utils'
import Logo from '../Logo.vue'

describe('Logo', () => {
  const wrapper = mount(Logo)

  it('Is initialized', () => {
    expect(wrapper.vm).toBeTruthy()
  })
})
```

## Running Tests

**Note**: Tests will soon automatically run on build time rather than requiring
the developer to manually run the following command each time

```
yarn run test
```

For more information on Jest and its capabilities, check out the link
[here](https://jestjs.io/docs/en/getting-started.html)!
