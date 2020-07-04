let number="";
let numArray=[];
let operaArray=[];
let answer=1
let display=userInput.value;
let numSelect="";
let kp=false;
console.log(kp);

userInput.addEventListener("keypress", keyEntry)

 function keyEntry (event) {	
	let keyCodeVal=event.keyCode;

	let numSelect = String.fromCharCode(keyCodeVal);
	let numKey = /[0-9]/;
	let operator = /[+-/*]/;
	let equalsym = /[=]/;
	let decKey = /[.]/;

	kp = true;
	clearZero();

	if (numKey.test(numSelect)) {
		console.log("valid: ",numSelect);	
		num(numSelect, kp);
	}

	if (operator.test(numSelect)) {
		console.log("valid: ",numSelect);
		opera(numSelect, kp);	

	}

	if (equalsym.test(numSelect)) {
		console.log("valid: ",numSelect);
		kp = true;
		equals(numSelect);	

	}

	if (decKey.test(numSelect)) {
		console.log("valid: ",numSelect);
		dec(numSelect, kp);	

	}

 	scroll();

}

function clearZero () {
	if(userInput.value==="0") {		
	 	userInput.value="";
 	 } 
}

function num (numSelect, kp) {	
	clearZero();	 
 	 if (!kp) {
 	 	userInput.value=userInput.value+numSelect;
 	}  


	 number=parseFloat(number+numSelect);
	 scroll();
	 document.getElementById('userInput').focus();	
}

function dec () {
	userInput.value=(userInput.value + '.');
	number=number+'.';
}


function opera (operaSelect, kp) {

	if (!kp) {
		userInput.value=userInput.value+operaSelect;		
	}
	numArray.push(parseFloat(number));
	number="";
	operaArray.push(operaSelect);
	numSelect="";
}


function equals (equalSelect) {
	console.log(kp);

	numArray.push(number);
	

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
	if (!kp) {
		userInput.value=userInput.value+'=';
	}

	console.log(answer);
	console.log(userInput.value);
	
		
	userInput.value=(userInput.value).concat(answer);
	numArray=[];
	operaArray=[];
	console.log(userInput.value);
	document.getElementById('userInput').focus();	
	scroll();
	
}

function clr () {
	console.log("clear");
	number="";
	numArray=[];
	operaArray=[];
	answer=1;
	document.getElementById('userInput').focus();	
	userInput.value=0;
	
}

function scroll () {
	let len=userInput.scrollWidth;
	let inputLen= document.getElementById("userInput").clientWidth;
	let oFlow= len-inputLen;
	if(oFlow>0) {
		userInput.scrollLeft=oFlow;
	}	
}



