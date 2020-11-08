import {mount} from '@vue/test-utils'
import Logo from '../Logo.vue'

describe('Logo', () => {
  const wrapper = mount(Logo)

  it('Is initialized', () => {
    expect(wrapper.vm).toBeTruthy()
  })
})
