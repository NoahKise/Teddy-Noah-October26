Test: Recognize if input is 4000 or greater and return null if so. 
Code: roman(4000)
Result: null

Test: It will recognize the length of the string.
Code: roman(400)
result: 3

Test: If string length is 1, return correct roman numeral.
Code roman(2)
result: II

Test: It will transform input to an array of numbers.
Code roman("267")
Result: [2, 6, 7]

Test: If string length is 2, return roman numeral for tens place.
Code: roman(20)
return: XX

Test: If string length is 3, return roman numeral for hundreds place.
Code: roman(300);
Return: CCC

Test: It will run all 4 functions and combine the results into a string.
Code: roman(3999)
Return: MMMCMXCIX

Test: It will return an empty string if the input is not a number.
Code: roman("hello")
Return: ""

Test: It will return "Romans couldn't count that high" if the input is 4000 or greater.
Code: roman(4999)
Return: "Romans couldn't count that high"