import { Hotels } from '@/data/data';

/**
 *
 * @param data {Object} { numberTimes: Number, dataArray: Array of Dates}
 * @returns {{newDateComponents: *, newDatesEntered: *[]}}
 */
export default function addIncrement(data) {
  const { numberOfTimes } = data;
  const { dateValues } = data;
  const newNumberOfTimes = numberOfTimes + 1;
  const newDateValues = [...dateValues];
  newDateValues.push({
    id: newNumberOfTimes,
    value: '',
  });
  return ({ newNumberOfTimes, newDateValues });
}

function getCostumerOptions(data) {
  return Hotels.map((e) => {
    const rates = e.rates.filter((rate) => rate.customerType === data)[0];
    return {
      id: e.id,
      rating: e.rating,
      weekday: rates.weekDay,
      weekend: rates.weekend,
    };
  });
}

/**
 *
 * @param data {Object} => { costumerType: Number , datesEntered: Array od Dates}
 * @returns {number}
 */
export function getCandidate(data) {
  const { costumerType } = data;
  const { datesEntered } = data;
  if (!costumerType) {
    return 0;
  }
  let isWeekDay = false;
  let isWeekend = false;
  const validDates = datesEntered.filter((date) => date.value !== '' && date.value !== null);
  if (!validDates.length) {
    return 0;
  }
  validDates.forEach((item) => {
    const numberOfDay = new Date(item.value).getDay();
    if (numberOfDay <= 4) {
      isWeekDay = true;
    } else {
      isWeekend = true;
    }
  });

  let hotelSelected = 0;
  let hotelRating = 0;
  let lowest = Number.POSITIVE_INFINITY;
  const options = getCostumerOptions(costumerType);

  options.forEach((hotel) => {
    const typeDays = [];
    if (isWeekDay) {
      typeDays.push('weekday');
    }
    if (isWeekend) {
      typeDays.push('weekend');
    }
    typeDays.forEach((type) => {
      if (lowest === hotel[type] && hotelRating < hotel.rating) {
        hotelRating = hotel.rating;
        hotelSelected = hotel.id;
      }
      if (lowest > hotel[type]) {
        hotelRating = hotel.rating;
        lowest = hotel[type];
        hotelSelected = hotel.id;
      }
    });
  });
  return hotelSelected;
}
