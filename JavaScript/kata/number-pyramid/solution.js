const whiteSpace = (bottomRow, middleNumbers) => {
    var output = '';
      for (let i = 0; i < (bottomRow - middleNumbers.length)/2; i++) {
        output = output.concat(' ');
      }
    return output;
  }
  
  const numbers = (n) => {
    var output = '';
      for (let i = 1; i <= n; i++) {
        output = output.concat(i);
      };
    output = output.concat(output.slice(0, output.length - 1).split('').reverse().join(''));
    return output;
  }

export default function pattern(n){
    var output="";
    if (n <= 0) {
        return output;
    }

    var finalRow = numbers(n);
    for (let i = 1; i <= n; i++) {
        var middleNumbers = numbers(i);
        var whiteSpaceString = whiteSpace(finalRow.length, middleNumbers);
        output = output.concat(whiteSpaceString, middleNumbers, whiteSpaceString);
        if (i < n) {
        output = output.concat('\n');
        };
    };
    return output;
};