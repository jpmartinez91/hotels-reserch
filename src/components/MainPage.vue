<template>
  <div class="hello">
    <div class="selection-area">
        <selection-date
          v-for="component in datesEntered"
          :key="component.id"
          :id-element="component.id"
          @callback-date="componentCallback"/>
        <button @click="addComponent">Add new date</button>
      </div>
  </div>
</template>

<script>
import SelectionDate from '@/components/SelectionDate.vue';
import addIncrement from '@/components/functions';

export default {
  name: 'MainPage',
  components: { SelectionDate },
  data() {
    return {
      dateComponents: 1,
      datesEntered: [
        {
          id: 1,
          value: '',
        },
      ],
    };
  },
  methods: {
    addComponent() {
      const numberOfTimes = this.dateComponents;
      const dateValues = [...this.datesEntered];
      const result = addIncrement({
        numberOfTimes,
        dateValues,
      });
      const { newNumberOfTimes } = result;
      const { newDateValues } = result;
      this.dateComponents = newNumberOfTimes;
      this.datesEntered = newDateValues;
    },
    componentCallback(valueEntered) {
      console.log(valueEntered);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
