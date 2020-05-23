// Create your global variables below:
var tracklist = ["Broken Whiskey Glass", "Big Lie", "Deja Vu", "No Option", "Cold", "White Iverson", "I Fall Apart", "Patient", "Go Flex", "Feel"];
var volLevels = [];
var volume = 3;
var currentsong = 6;

function init() {
	for (var i = 0; i < 6; i++) {
		volLevels[i] = document.getElementById('vl' + String(i));
		if (i < 3) {
			volLevels[i].style.backgroundColor = 'powderblue';
		}
	}
	setInterval(updateTime,10);
};

function volUp() {
	if (volume == 6) {
		return;
	} else {
		volume++;
		volLevels[volume - 1].style.backgroundColor = 'powderblue';
	}
}

function volDown() {
	if (volume == 0) {
		return;
	} else {
		volume--;
		volLevels[volume].style.backgroundColor = 'white';
	}
}

function changeTime() {
	document.getElementById('time').value++;
}

function updateTime() {
	document.getElementById('lefttime').innerHTML = String(secondsToMs(document.getElementById('time').value));
	if (document.getElementById('time').value == "180") {
		nextSong();
	}
}

function switchPlay() {
	if (document.getElementById('playpause').innerHTML == 'play_arrow') {
		document.getElementById('playpause').innerHTML = 'pause';
		slider = setInterval(changeTime,1000);
	} else {
		document.getElementById('playpause').innerHTML = 'play_arrow';
		clearInterval(slider);
	}
}

function nextSong() {
	document.getElementById('time').value = 0;
	if (currentsong == 10) {
		currentsong = 1;
		document.getElementById('songname').innerHTML = tracklist[currentsong - 1];
	} else {
		currentsong++;
		document.getElementById('songname').innerHTML = tracklist[currentsong - 1];
	}
}

function prevSong() {
	document.getElementById('time').value = 0;
	if (currentsong == 1) {
		currentsong = 10;
		document.getElementById('songname').innerHTML = tracklist[currentsong - 1];
	} else {
		currentsong--;
		document.getElementById('songname').innerHTML = tracklist[currentsong - 1];
	}
}

function secondsToMs(d) {
    d = Number(d);

    var min = Math.floor(d / 60);
    var sec = Math.floor(d % 60);

    return `0${min}`.slice(-1) + ":" + `00${sec}`.slice(-2);
}

init();
