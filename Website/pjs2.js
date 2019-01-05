//LOGO POP UP

//Get modal element
var LGmodal = document.getElementById('LGsimpleModal');
//Get open modal button
var LGmodalbtn = document.getElementById('LGmodalBtn');
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
	modal.style.display = 'block';
}

//Function to close modal
function LGcloseModal(){
	modal.style.display = 'none';
}

//Function to close modal if outside click
function LGoutsideClick(e){
	if(e.target == modal){
	modal.style.display = 'none';
	}
}