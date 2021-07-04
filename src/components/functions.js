import { Hotels } from '@/data/data';

/**
 *
 * @param data Object { numberTimes: Number, dataArray: Array }
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
  return ({
    newNumberOfTimes,
    newDateValues,
  });
}

export function getCandidate(data) {
  const { costumerType } = data;
  const { datesEntered } = data;
  if (costumerType) {
    let isWeekDay = false;
    let isWeekend = false;
    const validDates = datesEntered.filter((date) => date.value !== '' && date.value !== null);
    if (validDates.length > 0) {
      validDates.forEach((item) => {
        const numberOfDay = new Date(Date.parse(item.value)).getDay();
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
          if (rate.customerType === costumerType) {
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
          if (rate.customerType === costumerType) {
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
          if (rate.customerType === costumerType) {
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
    return hotelSelected;
  }
  return 0;
}
