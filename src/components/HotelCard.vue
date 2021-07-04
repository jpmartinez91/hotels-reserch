<template>
  <section
    :class="{'candidate-hotel' : isCandidate}"
    class="card">
    <header
      :class="{'card-header-candidate-hotel' : isCandidate}"
      class="card-header">
      {{ hotel.name }}
      <div>
        <label
          :title="hotel.rating"
          class="rating-label-ok-mark"
        />
        <strong>
          {{ hotel.rating }}
        </strong>
      </div>
    </header>
    <main class="card-main">
      <label class="main-description">{{ hotel.country }}</label>
      <label class="main-description">{{ hotel.city }}</label>
      <div
        v-for="(rate, i) in hotel.rates"
        :key="i">
        <detail-rates :rate="rate" />
      </div>
    </main>
</section></template>

<script>
import DetailRates from '@/components/DetailRates.vue';

export default {
  name: 'HotelCard',
  components: { DetailRates },
  props: {
    hotel: {
      type: Object,
      required: true,
    },
    hotelCandidate: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      maxRating: 5,
    };
  },
  computed: {
    isCandidate() {
      return this.hotelCandidate === this.hotel.id;
    },
  },
};
</script>

<style scoped>
body {
  font-family: 'Open Sans', sans-serif;
}
.card {
  margin: 1em;
  display: inline-block;
  width: 100%;
  border: 1px solid #EF9A9A;
  border-radius: 4px;
  overflow: hidden;
  flex-direction: column;
}

.card-header {
  color: #D32F2F;
  text-align: center;
  font-size: 12px;
  font-weight: 600;
  border-bottom: 1px solid #EF9A9A;
  background-color: #FFEBEE;
  padding: 5px 10px;
}

.card-main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px 0;
}

.main-description {
  color: #D32F2F;
  font-size: 12px;
  text-align: center;
}
.candidate-hotel {
  width: 100%;
  border: 3px solid #D32F2F;
  border-radius: 4px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.card-header-candidate-hotel {
  color: #eeeeee;
  text-align: center;
  font-size: 1em;
  font-weight: 600;
  border-bottom: 1px solid #EF9A9A;
  background-color: #D32F2F;
  padding: 5px 10px;
}

.rating-label-ok-mark::before {
  content: '★';
  opacity: .1;
}

.rating-label-ok-mark {
  color: #c5c5c5;
  font-size: 20px;
  height: auto;
  width: auto;
  position: relative;
  text-shadow: 0 1px 0 #a2a2a2;
}

.rating-label-ok-mark::after {
  color: gold;
  content: '★';
  position: absolute;
  left: 0;
  top:0;
}
</style>
