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
