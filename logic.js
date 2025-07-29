function processData(inputArray) {
  const even_numbers = [];
  const odd_numbers = [];
  const alphabets = [];
  const special_characters = [];
  let sum = 0;
  let lettersConcat = "";

  inputArray.forEach(item => {
    if (/^[0-9]+$/.test(item)) {
      const num = parseInt(item);
      if (num % 2 === 0) {
        even_numbers.push(item);
      } else {
        odd_numbers.push(item);
      }
      sum += num;
    } else if (/^[a-zA-Z]+$/.test(item)) {
      alphabets.push(item.toUpperCase());
      lettersConcat += item;
    } else {
      special_characters.push(item);
    }
  });

  const reversed = lettersConcat.split('').reverse();
  let concat_string = "";
  for (let i = 0; i < reversed.length; i++) {
    concat_string += i % 2 === 0
      ? reversed[i].toUpperCase()
      : reversed[i].toLowerCase();
  }

  return {
    is_success: true,
    user_id: "nikhil_sharma_29072001",
    email: "nikhil@email.com",
    roll_number: "XYZ123",
    odd_numbers,
    even_numbers,
    alphabets,
    special_characters,
    sum: sum.toString(),
    concat_string
  };
}

module.exports = processData;
