<template>
  <div>
    <div class="selection-area">
        <selection-date
          v-for="component in datesEntered"
          :key="component.id"
          :id-element="component.id"
          @callback-date="componentCallback"/>
        <button @click="addComponent">Add new date</button>
      </div>
    <div class="card-section">
      <hotel-card
        v-for="hotel in hotels"
        :key="hotel.id"
        :hotel="hotel"
        :hotel-candidate="hotelCandidate"
      />
    </div>
  </div>
</template>

<script>
import SelectionDate from '@/components/SelectionDate.vue';
import HotelCard from '@/components/HotelCard.vue';
import addIncrement from '@/components/functions';
import { Hotels } from '@/data/data';

export default {
  name: 'MainPage',
  components: { SelectionDate, HotelCard },
  data() {
    return {
      dateComponents: 1,
      hotels: Hotels,
      hotelCandidate: null,
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
