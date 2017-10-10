def anagrams(word, words)
  word = word.chars.sort
  words.select {|test| test.chars.sort == word}
end
