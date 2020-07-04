let number="";
let numArray=[];
let operaArray=[];
let answer=0;
let display=userInput.value;
let numSelect="";
let kp=false;
console.log(kp);
let memory = 0;

userInput.addEventListener("keyup", keyEntry)

 function keyEntry (event) {	
	let numSelect=event.key;
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
	 kp=false;	
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
	number=answer;
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
		
	userInput.value=0;
	document.getElementById('userInput').focus();
	document.getElementById('userInput').selectionEnd= -1;
}

function neg () {

 console.log("neg");
 	userInput.value=userInput.value * -1;


}


function mem (keyInput) {
 console.log(keyInput)
 	switch (keyInput) {
		 	case "ms":
		 		memory=number; 
		 		console.log(memory);
		 		break;
	 		case "mr":
		 		userInput.value = memory;
		 		break;
	 		case "mc":
		 		memory = 0;
		 		break;
	 		case "m+":
		 		memory=memory+number;
		 		break;
	 		case "^":
		 		 
		 		break;
		 }

}





function scroll () {
	let len=userInput.scrollWidth;
	let inputLen= document.getElementById("userInput").clientWidth;
	let oFlow= len-inputLen;
	if(oFlow>0) {
		userInput.scrollLeft=oFlow;
	}	
}



