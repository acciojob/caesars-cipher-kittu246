// Your Script here.

const lookup = {
  A: "N",
  B: "O",
  C: "P",
  D: "Q",
  E: "R",
  F: "S",
  G: "T",
  H: "U",
  I: "V",
  J: "W",
  K: "X",
  L: "Y",
  M: "Z",
  N: "A",
  O: "B",
  P: "C",
  Q: "D",
  R: "E",
  S: "F",
  T: "G",
  U: "H",
  V: "I",
  W: "J",
  X: "K",
  Y: "L",
  Z: "M",
  "?": "?",
  ",": ",",
};

function rot13(encodedStr) {
  let decodedArr = []; // Your Result goes here
  // Only change code below this line
	for(let i in encodedStr){

		if(encodedStr.charCodeAt(i) >=65 && encodedStr.charCodeAt(i)<= 90 ){
		let ascii = encodedStr.charCodeAt(i);
		let code = ascii -65 +13; // -65 to get the exact number fro 0-25 as just adding 13 we cant get exact decoded char ex z= 90 and if we add 13 we get 103 we is not correct ascii no of decorded char
		let exact= code%26;

		let ansAscii= exact +65;
		let char = String.fromCharCode(ansAscii);
		decodedArr.push(char);
			
		}
		else{
		decodedArr.push(encodedStr[i]);	
		}
	}

  return decodedArr;
}

// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(rot13("SERR YBIR? NPPVBWBO"));

// Do not change this line
window.rot13 = rot13;
