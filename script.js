let number="";
let numArray=[];
let operaArray=[];
let answer=1

function num (numSelect) {
	console.log(numSelect)
	
	
	 if(userInput.value==0) {	
	 	userInput.value="";
	 	userInput.value=numSelect;
	 	number=numSelect;
	 } else {

	 	userInput.value=userInput.value+numSelect;
	 	number=number+numSelect;
	 	// console.log("display: ",display)
	 	// console.log("UI val: ",userInput.value)
	 }

}


function opera (operaSelect) {
	// console.log(display);
	// console.log(operaSelect);
	userInput.value=userInput.value+operaSelect;
	numArray.push(number);
	number="";
	operaArray.push(operaSelect);
	
	console.log(operaArray);

}



function equals () {
	numArray.push(number);
	console.log(numArray);
	for(i=0;i<operaArray.length;i++) {

		if((operaArray[i])="*");
		 answer=answer*numArray[i]*numArray[i+1]; 
		
	}
	console.log(answer);
}

function clr () {
	console.log("clear");
	number="";
	numArray=[];
	operaArray=[];
	answer=1;
	userInput.value=0;

}





function clearChildNodes (DDToClear) {
 	//clear childNodes whilst any exist
	while(DDToClear.hasChildNodes()){
	DDToClear.removeChild(DDToClear.firstChild);

	}
 	
}

function formSubmit () {
	
	ddChecker(unitsFrom);
	ddChecker(unitsTo);
	console.log(userInput.value);
	let decimal = /[0-9]/;
	

	if (userInput.value.match(decimal)) {
		
		getResult(userInput.value);
		 
	} else {
		alert ("Invalid Character Input");
		throw "Invalid character input";
	}

}


function ddChecker (ddCheck) {	
	
	if(ddCheck.value=="") {
		let ddError = `${ddCheck.textContent}`;
		alert (ddError + " dropdown is not selected");
		throw (ddError + " dropdown is not selected");
		//return;			
	}

}

function getResult (userInputVal) {
	
	var unitsFromX = document.getElementById("unitsFrom").value;
	var unitsToX = document.getElementById("unitsTo").value;
	
	resultX= +(userInputVal*(unitsToX/unitsFromX)).toFixed(7);
	
	userOutput.value = resultX;
	console.log(userOutput.value);
	

}