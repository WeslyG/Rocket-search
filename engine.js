import { config } from './config.js'

export let selectedProfile = 'default'

export const profilesList = config.map(i => i.profile);

export const engine = (event, value) => {
	if (event == undefined) {
		goAction(value)
	}
	if (event.key === 'Enter') {
		goAction(value)
	}
}

const createURLFromString = (string, value) => string.replace('{search}', encodeURI(value))

export const goAction = (value) => {
	console.log(config.filter(i => i.profile === selectedProfile));
	config.filter(i => i.profile === selectedProfile)[0].links.map(i => {
			chrome.tabs.create({ url: createURLFromString(i.url, value) });
	})
}