export default function (arr) {
    const findEqual = arr => {
      if (arr[0] === arr[1] || arr[0] === arr[2]) {
        return arr[0];
      } else {
        return arr[1];
      }
    };
    return arr.find(number => {
      return number !== findEqual(arr);
    });
  };