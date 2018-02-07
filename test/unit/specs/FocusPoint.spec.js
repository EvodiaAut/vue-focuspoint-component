import { shallow } from 'vue-test-utils'
import FocusPoint from '@/components/FocusPoint'

const propsData = {
  focus: {
    x: 94,
    y: 19
  }
}

describe('FocusPoint.vue', () => {
  it('should render correct contents', () => {
    const wrapper = shallow(FocusPoint, { propsData })
    expect(wrapper.isVueInstance()).toBe(true)
    expect(wrapper.is('div')).toBe(true)
    expect(wrapper.props().focus).toBe(propsData.focus)
    expect(wrapper.props().default).toBe(wrapper.props().default)

    const pin = wrapper.find('.focus-point-pin')
    expect(pin.isVueInstance()).toBe(false)
    expect(pin.exists()).toBe(true)
    expect(pin.is('div')).toBe(true)
    expect(pin.classes()).toContain('focus-point-pin')

    // expect(pin.hasStyle('left', 'calc(94% - 11px)')).toBe(true)
    // expect(pin.hasStyle('top', 'calc(19% - 11px)')).toBe(true)
  })
})
