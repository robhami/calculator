
function tab (tabSelect) {

	;
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