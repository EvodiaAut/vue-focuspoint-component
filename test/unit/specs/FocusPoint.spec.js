import { shallow } from 'vue-test-utils'
import FocusPoint from '@/components/FocusPoint'

describe('FocusPoint.vue', () => {
  it('should render correct contents', () => {
    const vm = shallow(FocusPoint)
    expect(vm.isVueInstance()).toBe(true)
  })
})
