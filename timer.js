// 60,000 ms per minute

function buttonClicked() {
	
	
	var startTimeMs = new Date().getTime();
	var endTimeMs = startTimeMs + timerInterval;
timerInterval =	document.getElementById("timerInterval").getAttribute("value");
	stateObject = new StateObject();
	stateObject.timerInterval = timerInterval;
	startObject.endTimeMs = endTimeMs;
	const currentState = updateButtonLabel();
	if (currentState === stateRunning) {
		cleartimerInterval();
	} else {
		var intervalId = setInterval(executeOnInterval, 1000, stateObject);

		
	}
	

}

function updateButtonLabel() {
	const btnElement = document.getElementById("btnStartStop");
	const currentBtnSate = btnElement.getAttribute("value");
	if (currentBtnSate == stateRunning) {
		btnElement.setAttribute("value", btnStateIdleLabel);
		return btnStateIdleLabel;
	}
	else {
		btnElement.setAttribute("value", stateRunning);
		return stateRunning;
		}
	}




function executeOnInterval(stateObjecy) {

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

export class AppState {
	timerInterval = 3600000; 
	endTimeMs = 0;
	#runningLabel;
	#runningState;
	#idleLabel;
	#idleState;
	#currentState;
	currentLabel;

	constructor() {
			 this.#runningLabel = 'Stop';
	this.#runningState = 'running';
	this.#idleLabel = 'Start';
	this.#idleState = 'idle';
	this.#currentState = this.#idleState;
	
		this.currentLabel = this.#btnStateIdleLabel
	}

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
