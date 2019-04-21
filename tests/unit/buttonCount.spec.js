import { shallowMount } from '@vue/test-utils';
import ButtonCount from '@/components/ButtonCount.vue';

describe('ButtonCount.vue', () => {
  const wrapper = shallowMount(ButtonCount);

  it('Register is a component', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  it('count is initially zero', () => {
    expect(wrapper.vm.count).toBe(0);
  });

  it('is the button present', () => {
    expect(wrapper.contains('button')).toBe(true);
  });

  it('counter incremented or not', () => {
    expect(wrapper.vm.count).toBe(0);
    const button = wrapper.find('button');
    button.trigger('click');
    expect(wrapper.vm.count).toBe(1);
  });
});
