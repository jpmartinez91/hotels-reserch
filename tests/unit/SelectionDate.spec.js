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
    input.element.value = '0330/019';
    input.setValue('0330/019');
    await input.trigger('input');
    expect(wrapper.vm.date).toBe('03/30/2019');
  });
});
