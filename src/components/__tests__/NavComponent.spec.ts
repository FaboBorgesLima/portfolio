import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import NavComponent from '../NavComponent.vue'

describe('NavComponent', () => {
  it('renders properly', () => {
    const wrapper = mount(NavComponent)
    expect(wrapper.text()).toContain('Home')
  })
})
