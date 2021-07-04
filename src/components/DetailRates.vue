<template>
  <div class="detail-container">
    <div>
      Costumer Type: {{ getCostumerTypeName(rate.customerType) }}
    </div>
    <div class="detail-rate">
      <div>
        Weekdays: &nbsp;
      </div>
      <div>
        {{ rate.weekDay | currencyUSD }}
      </div>
    </div>
    <div class="detail-rate">
      <div>
        Weekend: &nbsp;
      </div>
      <div>
        {{ rate.weekend | currencyUSD }}
      </div>
    </div>
  </div>
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
