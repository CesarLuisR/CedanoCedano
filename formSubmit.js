let form = document.querySelector(`.php-email-form`);

form.addEventListener("submit", e => {
	e.preventDefault();
	fetch("https://formsubmit.co/ajax/rosangelacedano@gmail.com", {
		method: "POST",
		headers: {
			'Content-Type': 'application/json',
			'Accept': 'application/json'
		},
		body: JSON.stringify({
			nombre: form.name.value,
			email: form.email.value,
			asunto: form.subject.value,
			mensaje: form.message.value
		})
	})
		.then(response => form.reset())
})
