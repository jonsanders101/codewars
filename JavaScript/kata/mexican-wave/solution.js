export default function wave(word){
    return Array.from(word, (character, index) => {
      if (character !== ' ') {
        return word.slice(0, index) + character.toUpperCase() + word.slice(index + 1);
      }
    }).filter(Boolean);
};