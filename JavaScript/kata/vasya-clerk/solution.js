const tickets = (peopleInLine) => {
  var tillTable = {25: 0, 50: 0, 100: 0};
  var changeTable = {25: [{25:0}], 50: [{25: 1}], 100:[{25:3}, {50:1, 25:1}]};

  const isEnoughChange = (cashAmount, changeRequired, tillTable) => {
    tillTable[cashAmount]++;
    let result = Object.keys(changeRequired).every(denomination => {

      let enoughChange = tillTable[denomination] >= changeRequired[denomination];
      return enoughChange;
    });
            Object.keys(changeRequired).forEach(denomination => {
              tillTable[denomination] = tillTable[denomination] - changeRequired[denomination];
            });
    return {result, tillTable};
  };

  const checkQueue = (peopleInLine, tillTable) => {
    return peopleInLine.every((cashAmount, index) => {
      let changeRules = changeTable[cashAmount];
      if (changeRules.length === 1) {
        let result = isEnoughChange(cashAmount, changeRules[0], {...tillTable});
        if (result.result) {
          tillTable = result.tillTable;
        };
        return result.result;
      };
      let currentTillState = {...tillTable};
      return changeRules.some(changeRequired => {
        let nuffChange = isEnoughChange(cashAmount, changeRequired, {...currentTillState});
        return nuffChange.result && checkQueue(peopleInLine.slice(index + 1), nuffChange.tillTable);
      });
    });
  };
  return checkQueue(peopleInLine, tillTable) ? 'YES' : 'NO' ;
}

export default tickets;
