Test: It will remove spaces and punctiation from input string.
Code: crypto(hello there!)
Result: hellothere

Test: It will convert input string to lowercase.
Code: crypto(HeLlO TheRe!)
Result: hellothere

Test: It will find the length of the new string.
Code: hellothere
Result: 10

Test: It will find the square root of the length of the string.
Code: 10
Result: 3.16227766017

Test: It will split the string every nth element, where n is the square root of the length of the string rounded down to the nearest integer.
Code: hellotherethisisthestring
Result: ["hello", "there", "thisi", "sthes", "tring"]

Test: It will make a new string out of the first letters of each element.
Code: ["hello", "there", "thisi", "sthes", "tring"]
Result: "httst"

Test: It will make a new string from the second letters of each element and so on.
Code: ["hello", "there", "thisi", "sthes", "tring"]
Result: ["httst", "ehhtr", "leihi", "lrsen", "oeisg"]

Test: It will create a single string with no spaces from the coded array.
Code: ["httst", "ehhtr", "leihi", "lrsen", "oeisg"]
Result: ["httstehhtrleihilrsenoeisg"]

Test: It will add a space after every 5th character.
Code: ["httstehhtrleihilrsenoeisg"]
Result: "httst ehhtr leihi lrsen oeisg"