function reverses(word){
  const input = word.split("") // takes the input then splits it into single characters
  const reverse = input.reverse() //takes the variable (input) and then reverses it after it was split
  const reversedWord = reverse.join("") //takes the reversed word and joins it.
  return reversedWord;
}



function isPalindrome(word) {
  // Write your algorithm here
  const reversedWord = reverses(word)
  if( reversedWord === word){
    return true;
  }else{
    return false;
  }


}

/* 
  Add your pseudocode here
  expecting if a word is palindrome(reverse the initial input) to return true 
  e.g: if(bab === bab) return true
  else ( return false)
     
*/

/*
  Add written explanation of your solution here
  I created a helper function that reverses the word(user input)
  once that happens it is checked in the isPalindrome function whether the passed in word is a pa;indrome,
  if its a palidrome the program returns true if not the program returns false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("madam"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("ban"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("bab"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("rat"))
}

module.exports = isPalindrome;
