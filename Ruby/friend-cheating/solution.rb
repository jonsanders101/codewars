def removNb(n)
  results = []
  (1..n).each do |a|
    b = (n*(n+1)/2.0-a)/(a + 1)
    results << [a, b.to_i] if b % 1 == 0 && b < n && b > 1
  end
  results
end
