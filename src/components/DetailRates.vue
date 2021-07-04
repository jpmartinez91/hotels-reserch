<template>
  <section class="detail-container">
    <details open>
    <summary>
      Costumer Type: {{ getCostumerTypeName(rate.customerType) }}
    </summary>
    <div class="detail-rate">
      <strong>
        Weekdays: &nbsp;
      </strong>
      <em>
        {{ rate.weekDay | currencyUSD }}
      </em>
    </div>
    <div class="detail-rate">
      <strong>
        Weekend: &nbsp;
      </strong>
      <em>
        {{ rate.weekend | currencyUSD }}
      </em>
    </div>
    </details>
  </section>
</template>

<script>
import { CostumerType } from '@/data/data';

export default {
  name: 'DetailRates',
  filters: {
    currencyUSD(value) {
      return `$${value}`;
    },
  },
  props: {
    rate: {
      type: Object,
      required: true,
    },
  },
  methods: {
    getCostumerTypeName(costumerType) {
      return CostumerType.filter((item) => item.id === costumerType)[0].name.toUpperCase();
    },
  },
};
</script>

<style scoped>
.detail-container {
  padding: 3px;
  margin: 1px;
  border: 1px solid #EF9A9A;
}
.detail-rate {
  justify-content: center;
  display: flex;
}
</style>
