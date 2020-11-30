import {mount} from '@vue/test-utils'
import Nav from '../CsscNav.vue'

describe('Nav Tests', () => {
  const wrapper = mount(Nav, {
    stubs: {'nuxt-link': true},
  })

  it('Is initialized', () => {
    expect(wrapper.vm).toBeTruthy()
  })
  it('Is Visible', () => {
    expect(wrapper.isVisible()).toBe(true)
  })
})
