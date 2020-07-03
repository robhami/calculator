let number="";
let numArray=[];
let operaArray=[];
let answer=1
let display=userInput.value;
let numSelect="";


userInput.addEventListener("keypress", function (event) {
	console.log("event");
	let keyCodeVal=event.keyCode;
	console.log(keyCodeVal);
	let numSelect = String.fromCharCode(keyCodeVal);
	console.log(numSelect);
 	num(numSelect);
	 // if(userInput.value==="0") {
	 // 	userInput.value="";	
	 // 	number=numSelect;
	 // } 
	 // 	else{
	 // 	console.log("else");
	 // 	number=parseFloat(number+numSelect);
	 // }
	 console.log(number);
	 scroll();
	console.log(number);
})



function num (numSelect) {
	console.log("num func");


	
	 if(userInput.value==="0") {
	 	// userInput.value="";
	 	// userInput.text="";		
	 	userInput.value=numSelect;
	 	number=numSelect;
	 } 
	 	else{
	 	userInput.value=userInput.value+numSelect;
	 	number=parseFloat(number+numSelect);
	 }
	 console.log(number);
	 scroll();
}

function dec (decSelect) {
	userInput.value=(userInput.value + '.');
	number=number+'.';
}


function opera (operaSelect) {
	userInput.value=userInput.value+operaSelect;
	numArray.push(parseFloat(number));
	number="";
	operaArray.push(operaSelect);
	numSelect="";
}


function equals () {
	numArray.push(number);
	userInput.value=userInput.value+"=";
	console.log(numArray);
	for(i=0;i<operaArray.length;i++) {
		 switch (operaArray[i]) {
		 	case "*":
		 		answer=numArray[i]*numArray[i+1]; 
		 		break;
	 		case "+":
		 		answer=numArray[i]+numArray[i+1]; 
		 		break;
	 		case "-":
		 		answer=numArray[i]-numArray[i+1]; 
		 		break;
	 		case "/":
		 		answer=numArray[i]/numArray[i+1]; 
		 		break;
	 		case "^":
		 		answer=Math.pow(numArray[i],numArray[i+1]); 
		 		break;
		 }
	}
	console.log(answer);
	userInput.value=userInput.value+answer;
	number=answer;
	numArray=[];
	operaArray=[];
	// userOutput.value=answer;
	console.log(userInput.value);
	scroll();
}

function clr () {
	console.log("clear");
	number="";
	numArray=[];
	operaArray=[];
	answer=1;
	userInput.value=0;
	// userOutput.value="Result";

}

function scroll () {
	let len=userInput.scrollWidth;
	let inputLen= document.getElementById("userInput").clientWidth;
	let oFlow= len-inputLen;
	// console.log(inputLen);
	// console.log(len);
	// console.log(oFlow);

	if(oFlow>0) {
		userInput.scrollLeft=oFlow;
	}

	
	
}



