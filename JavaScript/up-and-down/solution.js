function arrange(strng) {
    const words = strng.split(" ");
    const formatWords = index => {
        words[index] = (index % 2 === 0) ? words[index].toLowerCase() : words[index].toUpperCase();
    }
    const sort = (wordObject, index) => {
        if (index !== words.length - 1) {
            if (index % 2 === 0) {
                if (wordObject.length > words[index + 1].length) {
                    words.splice(index, 2, words[index + 1], wordObject)
                }
            } else {
                if (wordObject.length < words[index + 1].length) {
                    words.splice(index, 2, words[index + 1], wordObject)
                }
            }
        }
        formatWords(index);
    };

    words.forEach(sort);
    return words.join(" ");
};
    
        
console.log(arrange("who hit retaining The That a we taken"));
console.log(arrange("on I came up were so grandmothers"));