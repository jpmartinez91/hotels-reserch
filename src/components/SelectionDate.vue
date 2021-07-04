<template>
  <input
    id="date"
    :idElement="idElement"
    v-model="date"
    type="date"
    @change="onDateSelected(idElement)">
</template>

<script>
export default {
  name: 'SelectionDate',
  props: {
    idElement: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      date: '',
    };
  },
  methods: {
    onDateSelected(id) {
      this.$emit('callback-date', {
        name: 'date',
        value: this.date,
        elementId: id,
      });
    },
  },
};
</script>

<style scoped>

</style>
