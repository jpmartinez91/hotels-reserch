import { mount } from '@vue/test-utils';
import App from '../../src/components/SelectionDate.vue';

describe('SelectionDate', () => {
  it('Valid date entered', async () => {
    const wrapper = mount(App, {
      propsData: {
        idElement: 1,
      },
    });
    const input = wrapper.find('input[type="date"]');
    input.element.value = '2009-03-26';
    input.setValue('2009-03-26');
    await input.trigger('input');
    expect(wrapper.vm.date).not.toBe('03/30/2019');
  });
});
