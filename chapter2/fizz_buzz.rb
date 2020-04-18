def fizz_buzz(n)
  if n % 15 == 0
    return "FizzBuzz"
  elsif n%5 == 0
    return "Buzz"
  elsif n%3 == 0
    return "Fizz"
  else
    return n.to_s
  end
end

puts fizz_buzz(gets.to_i)