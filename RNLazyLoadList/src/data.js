const RECORDS_PER_FETCH = 3;
const TOTAL_RECORDS_NUM = 30;

export const allData = () => {
  return [...Array(TOTAL_RECORDS_NUM).keys()].map((index) => ({
    _id: index + 1,
  }));
};

export const fetchData = (startingId = 0) => {
  const records = allData();
  let obj = [];

  for (let i = startingId; i < startingId + RECORDS_PER_FETCH; i++) {
    if (records[i] === undefined) {
      break;
    }

    obj.push(records[i]);
  }
  return obj;
};
