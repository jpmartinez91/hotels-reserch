import { mount } from '@vue/test-utils';
import App from '@/components/MainPage.vue';

describe('Date Selector', () => {
  it('Input date should be 5', async () => {
    const wrapper = mount(App);
    const button = wrapper.find('button');
    const clicker = [];
    for (let i = 0; i < 4; i += 1) {
      clicker.push(button.trigger('click'));
    }
    await Promise.all(clicker);
    const inputs = wrapper.findAll('input').length;
    expect(inputs).toBe(5);
  });

  it('Method addComponent can be executed', () => {
    const wrapper = mount(App);
    wrapper.vm.addComponent();
    expect(wrapper.vm.$data.dateComponents).toBe(2);
  });
});
