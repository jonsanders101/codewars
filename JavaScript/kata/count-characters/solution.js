export default function count (string) {  
    var result = {};
    string.split("").forEach(char => {
      result[char] ? result[char]++ : result[char] = 1;
    });
    return result;
};