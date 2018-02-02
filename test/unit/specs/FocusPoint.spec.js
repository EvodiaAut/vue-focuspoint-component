import { shallow } from 'vue-test-utils'
import FocusPoint from '@/components/FocusPoint'

const propsData = {
  focus: {
    x: 50,
    y: 50
  },
  default: {
    x: 50,
    y: 50
  }
}

describe('FocusPoint.vue', () => {
  it('should render correct contents', () => {
    const wrapper = shallow(FocusPoint, { propsData })

    expect(wrapper.isVueInstance()).toBe(true)
    expect(wrapper.props().focus).toBe(propsData.focus)
    expect(wrapper.props().default).toBe(propsData.default)
  })

  it('should render correct pin', () => {
    const wrapper = shallow(FocusPoint, { propsData })
    const pin = wrapper.find('.focus-point-pin')

    expect(pin.isVueInstance()).toBe(false)
    expect(pin.is('div')).toBe(true)
    expect(pin.classes()).toContain('focus-point-pin')
  })
})
