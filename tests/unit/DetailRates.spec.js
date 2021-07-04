import { mount } from '@vue/test-utils';
import App from '@/components/DetailRates.vue';
import { Hotels } from '@/data/data';

describe('Rate Details', () => {
  it('Detail elements should has 2 elements of rates', async () => {
    const wrapper = mount(App, {
      propsData: {
        rate: Hotels[0].rates[0],
      },
    });
    const elements = wrapper.findAll('.detail-rate').length;
    expect(elements).toBe(2);
  });

  it('Detail should has 1 elements', async () => {
    const wrapper = mount(App, {
      propsData: {
        rate: Hotels[0].rates[0],
      },
    });
    const elements = wrapper.findAll('.detail-container').length;
    expect(elements).toBe(1);
  });

  it('Costumer Type should be regular', async () => {
    const wrapper = mount(App, {
      propsData: {
        rate: Hotels[0].rates[0],
      },
    });
    const uno = wrapper.vm.getCostumerTypeName(1);
    expect(uno).toBe(('regular').toUpperCase());
  });

  it('Costumer Type shouldn\'t be rewards', async () => {
    const wrapper = mount(App, {
      propsData: {
        rate: Hotels[0].rates[0],
      },
    });
    const uno = wrapper.vm.getCostumerTypeName(2);
    expect(uno).toBe(('rewards').toUpperCase());
  });

  it('Detail should has format $###', async () => {
    const wrapper = mount(App, {
      propsData: {
        rate: Hotels[0].rates[0],
      },
    });
    const elements = wrapper.find('.detail-rate').text();
    const valueExpected = `$${Hotels[0].rates[0].weekDay}`;
    expect(elements).toContain(valueExpected);
  });
});
