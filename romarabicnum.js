function romanToArabic(roman) {
    const romanNumerals = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000
    };
  
    let result = 0;
  
    for (let i = 0; i < roman.length; i++) {
      const currentNumeral = romanNumerals[roman[i]];
      const nextNumeral = romanNumerals[roman[i + 1]];
  
      if (nextNumeral > currentNumeral) {
        result += nextNumeral - currentNumeral;
        i++; // Skip the next numeral as it has already been considered
      } else {
        result += currentNumeral;
      }
    }
  
    return result;
  }
  
  
  const romanNumeral = 'IVXLCDM';
  const arabicNumeral = romanToArabic(romanNumeral);
  console.log(`The Arabic numeral for ${romanNumeral} is ${arabicNumeral}`); // The Arabic numeral for IVXLCDM is 1444