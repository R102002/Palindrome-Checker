function checkPalindrome() {
  let plinput = document.getElementById("plinput").value;
  //dad->dad
  //abc->cba
  let result = document.getElementById("result");
  let reverse = plinput.split("").reverse().join("");
  if (plinput == "") {
    alert("Please enter a word");
  } else if (plinput.toLowerCase() == reverse.toLowerCase()) {
    console.log(plinput, reverse);
    result.style.display = "block";
    result.innerHTML = `${plinput} is a Palindrome`;
  } else {
    // alert("It's not a Palindrome");
    result.style.display = "block";
    result.innerHTML = `${plinput} is not a Palindrome`;
  }
}
