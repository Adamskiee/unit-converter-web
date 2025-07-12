"use strict"

const length = document.getElementById('length-tab'); 
const weight = document.getElementById('weight-tab');
const temperature = document.getElementById('temperature-tab');
const lengthContainer = document.querySelector('.length-container');
const form = document.getElementById('myForm');

form.addEventListener('submit', async (e) => {
	e.preventDefault();
	const formData = new FormData(form);
	const data  = {
		length: formData.get('length'),
		unit_from: formData.get('unit_from'),
		unit_to: formData.get('unit_to')
	};
	console.log(data);
	// Send POST request via fetch
	const response = await fetch('/submit', {
		method: 'POST',
	        headers: { 'Content-Type': 'application/json' },
	        body: JSON.stringify(data)
	});

	// Read the response text
	const text = await response.text();

	// Change only the message div
	lengthContainer.innerHTML = text;

	// Optionally clear the form
	form.reset();		
}); 
