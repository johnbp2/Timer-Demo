// 60,000 ms per minute

function buttonClicked() {
	
	
	var startTimeMs = new Date().getTime();

	var timerInterval = document.getElementById("timerInterval").getAttribute("value");
		var endTimeMs = startTimeMs + timerInterval;
var	stateObject = new AppState();
	stateObject.timerInterval = timerInterval;
	stateObject.endTimeMs = endTimeMs;
	const currentState = updateButtonLabel(stateObject);
	if (currentState === stateObject.runningState) {
		cleartimerInterval();
	} else {
		var intervalId = setInterval(executeOnInterval, 1000, stateObject);

		
	}
	

}

function updateButtonLabel(appState) {
	const btnElement = document.getElementById("btnStartStop");
	const btnLabel = btnElement.getAttribute("value");
	const currentState = btnElement.getAttribute("data-current-state");
	appState.transitionState();
	btnElement.setAttribute("value", appState.runningLabel);
	return  appState.currentLabel;
	// if (currentState == appState.runningState) {
	// 	btnElement.setAttribute("value", appState.runningLabel);
	// 	return  appState.runningLabel;
	// }
	// else {
	// 	btnElement.setAttribute("value", appState.idleLabel);
	// 	appState.transitionState();
	// 	return appState.idleLabel;
	// 	}
	}




function executeOnInterval(stateObject) {

		var now = new Date().getTime();
			var timeleft = stateObject.endTimeMs - now; 
			var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
			var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
			var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);


	
	document.getElementById("days").innerHTML = days + "d ";
	document.getElementById("hours").innerHTML = hours + "h ";
	document.getElementById("minutes").innerHTML = minutes + "m ";
	document.getElementById("seconds").innerHTML = seconds + "s";


			if (timeleft < 0) {
				clearInterval();
				document.getElementById("days").innerHTML = "";
				document.getElementById("hours").innerHTML = "";
				document.getElementById("minutes").innerHTML = "";
				document.getElementById("seconds").innerHTML = "";
				document.getElementById("end").innerHTML = "TIME UP!!";
			}


}

class AppState {

	constructor() {
			 this.#runningLabel = 'Stop';
	this.#runningState = 'running';
	this.#idleLabel = 'Start';
	this.#idleState = 'idle';
	this.#currentState = this.#idleState;
	
	this.currentLabel = this.#idleLabel
	}

	get runningState() { return this.#runningState; }
	get idleState() { return this.#idleState; }
	get runningLabel() { return this.#runningLabel; }
		get idleLabel() { return this.#idleLabel; }
	timerInterval = 3600000; 
	endTimeMs = 0;
	#runningLabel;
	#runningState;
	#idleLabel;
	#idleState;
	#currentState;
	currentLabel;

	

	transitionState() {
		if (this.currentState === this.#idleState) {
			this.currentState = this.#runningState;
			this.currentLabel = this.#runningLabel;
		} else {
	this.currentState = this.#idleState;
			this.currentLabel = this.#idleLabel;

		}
	}
}
