const display=document.querySelector('#display');
const buttons= Array.from(document.querySelector('.button'));

buttons.map(button =>{
	button.addEventListener('click',(e)=>{
		switch(e.target.innerText){
			case 'c':
			display.innerText='';
			default:
				display.innerText += e.target.innerText;

		}

	});
});
