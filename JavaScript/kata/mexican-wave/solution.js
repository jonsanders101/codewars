export default function wave(word){
    return word.split('').map((character, index) => {
      if (character === ' ') {
        return;
      }
      const wordArray = word.split('');
      wordArray[index] = character.toUpperCase();
      
      return wordArray.join('');
    }).filter(Boolean);
};