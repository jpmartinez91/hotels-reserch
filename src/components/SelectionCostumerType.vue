<template>
  <section>
    <select
      v-model="selected"
      @change="onSelect()"
    >
      <option
        v-for="item in costumerTypes"
        :key="item.id"
        :value="item.id"
      >
        {{ item.name }}
      </option>
    </select>
  </section>
</template>
<script>
import { CostumerType } from '@/data/data';

export default {
  name: 'SelectionCostumerType',
  data() {
    return {
      costumerTypes: CostumerType,
      selected: null,
    };
  },
  methods: {
    onSelect() {
      if (this.selected) {
        this.$emit('callback-selection', {
          name: 'costumerType',
          value: this.selected,
        });
      }
    },
  },
};
</script>

<style scoped>

</style>
