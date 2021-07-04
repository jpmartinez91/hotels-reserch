<template>
  <div>
    <div class="selection-area">
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
import SelectionCostumerType from '@/components/SelectionCostumerType.vue';
import addIncrement from '@/components/functions';
import { Hotels } from '@/data/data';

export default {
  name: 'MainPage',
  components: { SelectionDate, HotelCard, SelectionCostumerType },
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
      if (this.costumerType) {
        let isWeekDay = false;
        let isWeekend = false;
        const validDates = this.datesEntered.filter((date) => date.value !== '' && date.value !== null);
        if (validDates.length > 0) {
          validDates.forEach((item) => {
            const numberOfDay = new Date(item.value).getDay();
            if (numberOfDay <= 4) {
              isWeekDay = true;
            } else {
              isWeekend = true;
            }
          });
        }
        let hotelSelected = 0;
        let hotelRaiting = 0;
        let lowest = Number.POSITIVE_INFINITY;
        if (isWeekDay && !isWeekend) {
          Hotels.forEach((hotel) => {
            hotel.rates.forEach((rate) => {
              if (rate.customerType === this.costumerType) {
                if (lowest === rate.weekDay) {
                  if (hotelRaiting < hotel.rating) {
                    hotelRaiting = hotel.rating;
                    hotelSelected = hotel.id;
                  }
                }
                if (lowest > rate.weekDay) {
                  hotelRaiting = hotel.rating;
                  lowest = rate.weekDay;
                  hotelSelected = hotel.id;
                }
              }
            });
          });
        }
        if (isWeekend && !isWeekDay) {
          Hotels.forEach((hotel) => {
            hotel.rates.forEach((rate) => {
              if (rate.customerType === this.costumerType) {
                if (lowest === rate.weekend) {
                  if (hotelRaiting < hotel.rating) {
                    hotelRaiting = hotel.rating;
                    hotelSelected = hotel.id;
                  }
                }
                if (lowest > rate.weekend) {
                  hotelRaiting = hotel.rating;
                  lowest = rate.weekend;
                  hotelSelected = hotel.id;
                }
                if (lowest > rate.weekDay) {
                  hotelRaiting = hotel.rating;
                  lowest = rate.weekDay;
                  hotelSelected = hotel.id;
                }
              }
            });
          });
        }
        if (isWeekend && isWeekDay) {
          Hotels.forEach((hotel) => {
            hotel.rates.forEach((rate) => {
              if (rate.customerType === this.costumerType) {
                if (lowest === rate.weekend || lowest === rate.weekDay) {
                  if (hotelRaiting < hotel.rating) {
                    hotelRaiting = hotel.rating;
                    hotelSelected = hotel.id;
                  }
                }
                if (lowest === rate.weekend) {
                  if (hotelRaiting < hotel.rating) {
                    hotelRaiting = hotel.rating;
                    hotelSelected = hotel.id;
                  }
                }
                if (lowest > rate.weekend) {
                  hotelRaiting = hotel.rating;
                  lowest = rate.weekend;
                  hotelSelected = hotel.id;
                }
              }
            });
          });
        }
        this.hotelCandidate = hotelSelected;
      }
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
