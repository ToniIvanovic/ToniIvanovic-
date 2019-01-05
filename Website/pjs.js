//BANNER POP UP

//Get modal element
var modal = document.getElementById('simpleModal');
//Get open modal button
var modalBtn = document.getElementById('modalBtn');
//Get close button
var	closeBtn = document.getElementsByClassName('closeBtn') [0];

//Listen for open click
modalBtn.addEventListener('click', openModal);
//Listen for close click
closeBtn.addEventListener('click', closeModal);
//Listen for outside click
window.addEventListener('click', outsideClick);

//Function to open modal
function openModal(){
	modal.style.display = 'block';
}

//Function to close modal
function closeModal(){
	modal.style.display = 'none';
}

//Function to close modal if outside click
function outsideClick(e){
	if(e.target == modal){
	modal.style.display = 'none';
	}
}

//LOGO POP UP

//Get modal element
var LGmodal = document.getElementById('LGsimpleModal');
//Get open modal button
var LGmodalBtn = document.getElementById('LGmodalBtn');
//Get close button
var	LGcloseBtn = document.getElementsByClassName('LGcloseBtn') [0];

//Listen for open click
LGmodalBtn.addEventListener('click', LGopenModal);
//Listen for close click
LGcloseBtn.addEventListener('click', LGcloseModal);
//Listen for outside click
window.addEventListener('click', LGoutsideClick);

//Function to open modal
function LGopenModal(){
	LGmodal.style.display = 'block';
}

//Function to close modal
function LGcloseModal(){
	LGmodal.style.display = 'none';
}

//Function to close modal if outside click
function LGoutsideClick(e){
	if(e.target == LGmodal){
	LGmodal.style.display = 'none';
	}
}

//THUMBNAILS POP UP

//Get modal element
var TMmodal = document.getElementById('TMsimpleModal');
//Get open modal button
var TMmodalBtn = document.getElementById('TMmodalBtn');
//Get close button
var	TMcloseBtn = document.getElementsByClassName('TMcloseBtn') [0];

//Listen for open click
TMmodalBtn.addEventListener('click', TMopenModal);
//Listen for close click
TMcloseBtn.addEventListener('click', TMcloseModal);
//Listen for outside click
window.addEventListener('click', TMoutsideClick);

//Function to open modal
function TMopenModal(){
	TMmodal.style.display = 'block';
}

//Function to close modal
function TMcloseModal(){
	TMmodal.style.display = 'none';
}

//Function to close modal if outside click
function TMoutsideClick(e){
	if(e.target == TMmodal){
	TMmodal.style.display = 'none';
	}
}

//THREADS POP UP

//Get modal element
var TRmodal = document.getElementById('TRsimpleModal');
//Get open modal button
var TRmodalBtn = document.getElementById('TRmodalBtn');
//Get close button
var	TRcloseBtn = document.getElementsByClassName('TRcloseBtn') [0];

//Listen for open click
TRmodalBtn.addEventListener('click', TRopenModal);
//Listen for close click
TRcloseBtn.addEventListener('click', TRcloseModal);
//Listen for outside click
window.addEventListener('click', TRoutsideClick);

//Function to open modal
function TRopenModal(){
	TRmodal.style.display = 'block';
}

//Function to close modal
function TRcloseModal(){
	TRmodal.style.display = 'none';
}

//Function to close modal if outside click
function TRoutsideClick(e){
	if(e.target == TRmodal){
	TRmodal.style.display = 'none';
	}
}

//HAND DRAWN POP UP

//Get modal element
var HDmodal = document.getElementById('HDsimpleModal');
//Get open modal button
var HDmodalBtn = document.getElementById('HDmodalBtn');
//Get close button
var	HDcloseBtn = document.getElementsByClassName('HDcloseBtn') [0];

//Listen for open click
HDmodalBtn.addEventListener('click', HDopenModal);
//Listen for close click
HDcloseBtn.addEventListener('click', HDcloseModal);
//Listen for outside click
window.addEventListener('click', HDoutsideClick);

//Function to open modal
function HDopenModal(){
	HDmodal.style.display = 'block';
}

//Function to close modal
function HDcloseModal(){
	HDmodal.style.display = 'none';
}

//Function to close modal if outside click
function HDoutsideClick(e){
	if(e.target == HDmodal){
	HDmodal.style.display = 'none';
	}
}

//MOTION DESIGNS POP UP

//Get modal element
var MTmodal = document.getElementById('MTsimpleModal');
//Get open modal button
var MTmodalBtn = document.getElementById('MTmodalBtn');
//Get close button
var	MTcloseBtn = document.getElementsByClassName('MTcloseBtn') [0];

//Listen for open click
MTmodalBtn.addEventListener('click', MTopenModal);
//Listen for close click
MTcloseBtn.addEventListener('click', MTcloseModal);
//Listen for outside click
window.addEventListener('click', MToutsideClick);

//Function to open modal
function MTopenModal(){
	MTmodal.style.display = 'block';
}

//Function to close modal
function MTcloseModal(){
	MTmodal.style.display = 'none';
}

//Function to close modal if outside click
function MToutsideClick(e){
	if(e.target == MTmodal){
	MTmodal.style.display = 'none';
	}
}


