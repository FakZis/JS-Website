let button = document.querySelector('.button');
let form = document.querySelector('#form');
let username = document.querySelector('#username');
let message = document.querySelector('.message');
let liste = document.querySelector('#users');

button.addEventListener('click', (e) => {
	e.preventDefault();

	console.log(username.value);
	if (username.value == '') {
		message.innerHTML = 'Bitte einen Namen angeben';
		message.classList.add('danger');

		setTimeout(() => message.classList.remove('danger'), 3000); //5000ms = 1s
	} else {
		//success
		// message.innerHTML = username.value;
		// message.classList.remove('danger');

		// neues li über das document-obj erzeugen
		let li = document.createElement('li');
		li.appendChild(document.createTextNode(`${username.value}`));

		liste.appendChild(li);
		username.value = ''; // leert das eingabefeld wenn der name erstellt wurde
	}
});
