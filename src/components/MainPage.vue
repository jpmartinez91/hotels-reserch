<template>
  <main>
    <section class="selection-area">
      <selection-costumer-type
        @callback-selection="componentCallback"/>
      <div>
        <selection-date
          v-for="component in datesEntered"
          :key="component.id"
          :id-element="component.id"
          @callback-date="componentCallback"/>
        <button @click="addComponent">Add new date</button>
      </div>
      </section>
    <section class="card-section">
      <hotel-card
        v-for="hotel in hotels"
        :key="hotel.id"
        :hotel="hotel"
        :hotel-candidate="hotelCandidate"
      />
    </section>
  </main>
</template>

<script>
import SelectionDate from '@/components/SelectionDate.vue';
import HotelCard from '@/components/HotelCard.vue';
import SelectionCostumerType from '@/components/SelectionCostumerType.vue';
import addIncrement, { getCandidate } from '@/components/functions';
import { Hotels } from '@/data/data';

export default {
  name: 'MainPage',
  components: { SelectionDate, HotelCard, SelectionCostumerType },
  data() {
    return {
      dateComponents: 1,
      hotels: Hotels,
      hotelCandidate: -1,
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
      const { name } = valueEntered;
      const { value } = valueEntered;
      const { elementId } = valueEntered;
      let selection;
      let notSelection;
      switch (name) {
        case 'costumerType':
          this.costumerType = value;
          break;
        case 'date':
          [selection] = this.datesEntered.filter((item) => item.id === elementId);
          notSelection = this.datesEntered.filter((item) => item.id !== elementId);
          selection.value = value;
          notSelection.push(selection);
          this.datesEntered = notSelection;
          break;
        case 'other':
          this.costumerType = value;
          break;
        default: break;
      }
      this.hotelCandidate = getCandidate({
        costumerType: this.costumerType,
        datesEntered: this.datesEntered,
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card-section {
  display: flex;
  padding: 10px;
  margin: auto;
}

.selection-area {
  display: flex;
  padding: 10px;
  justify-content: center;
}
</style>
