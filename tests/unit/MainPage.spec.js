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

describe('Result Hotel Candidate', () => {
  it('Result expected Hotel:1', async () => {
    const wrapper = mount(App);
    wrapper.vm.costumerType = 1;
    wrapper.vm.datesEntered = [
      {
        id: 1,
        value: '2009-03-16',
      },
      {
        id: 2,
        value: '2009-03-17',
      },
      {
        id: 3,
        value: '2009-03-18',
      },
    ];
    wrapper.vm.componentCallback({});
    expect(wrapper.vm.$data.hotelCandidate).toBe(1);
    expect(wrapper.vm.$data.hotelCandidate).not.toBe(2);
    expect(wrapper.vm.$data.hotelCandidate).not.toBe(3);
  });

  it('Result expected Hotel: 3', async () => {
    const wrapper = mount(App);
    wrapper.vm.costumerType = 2;
    wrapper.vm.datesEntered = [
      {
        id: 1,
        value: '2009-03-26',
      },
      {
        id: 2,
        value: '2009-03-27',
      },
      {
        id: 3,
        value: '2009-03-28',
      },
    ];
    wrapper.vm.componentCallback({});
    expect(wrapper.vm.$data.hotelCandidate).toBe(3);
    expect(wrapper.vm.$data.hotelCandidate).not.toBe(2);
    expect(wrapper.vm.$data.hotelCandidate).not.toBe(1);
  });
});
