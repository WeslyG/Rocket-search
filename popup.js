import { engine } from './engine.js'

document.addEventListener('DOMContentLoaded', function () {
  const search = document.getElementById('search');
	const goButton = document.getElementById('go');

	search.addEventListener('keydown', (event) => {
		engine(event, search.value)
	})

	goButton.addEventListener('click', () => {
		engine(undefined, search.value)
	})

});
