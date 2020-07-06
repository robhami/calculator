let number="";
let numArray=[];
let operaArray=[];
let answer=0;
let numSelect="";
let kp=false;
let leadZero=false;
let memory = 0;

userInput.addEventListener("keypress", keyEntry)
userInput.addEventListener("keyup", keyEntry2)

 function keyEntry (event) {	
	let numSelect=event.key;
	let numKey = /[1-9]/;
	let decKey = /[.]/;
	console.log(numSelect);
	kp = true;
	clearZero();

	if (numKey.test(numSelect)) {
		console.log("num valid: ", numSelect);	
		num(numSelect, kp);
	}

	if (numSelect === "+" || numSelect === "*" || numSelect === "-" || numSelect === "/") {
		console.log("opera valid: ", numSelect);
		opera(numSelect, kp);	
	}

	if (decKey.test(numSelect)) {
		console.log("dec valid: ", numSelect);
		dec(numSelect, kp);	
	}
}

 function keyEntry2 (event) {	
	let numSelect=event.key;
	kp = true;
	clearZero();

	if (numSelect==="=") {
		console.log("= valid: ",numSelect);
		kp = true;
		equals(numSelect);	

	}

	if (numSelect=="0") {
		console.log("zero");
		if (leadZero) {
			num(numSelect,kp)
			console.log("valid: ",numSelect);
		} else {
		userInput.value="0";
		leadZero=true;
		
		}
	}
}

function clearZero () {
	
	if(userInput.value==="0" && (!leadZero)) {		
	 	userInput.value="";
	 	leadZero=true;
 	 } 
}

function num (numSelect, kp) {	
	clearZero();
	console.log(number)	; 
 	 if (!kp) {
 	 	userInput.value=userInput.value+numSelect;
 	}  

 	// 0. entered parsefloat is returning .
	 number=(number+numSelect);
	 scroll();
	 document.getElementById('userInput').focus();
	 kp=false;
	 console.log("num: ", number);	
}

function dec () {
	console.log(kp);
	if (!kp) {
	userInput.value=(userInput.value + '.');
	
	}

	number=number+'.';


}


function opera (operaSelect, kp) {

	if (!kp) {
		userInput.value=userInput.value+operaSelect;		
	}
	numArray.push(parseFloat(number));
	console.log("opera: ", number);
	number="";
	operaArray.push(operaSelect);
	numSelect="";
}


function equals (equalSelect) {
	console.log(kp);
	
	numArray.push(parseFloat(number));
	

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
	answer = parseFloat(answer.toPrecision(10));
		
	userInput.value=(userInput.value).concat(answer);
	number=answer;
	numArray=[];
	operaArray=[];
	console.log(userInput.value);
	document.getElementById('userInput').focus();	

	scroll();
	
}

function clr () {
	// probably just reload window?
	console.log("clear");
	number="";
	numArray=[];
	operaArray=[];
	answer=0;
		
	userInput.value="0";
	leadZero=false;
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



