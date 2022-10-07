document.addEventListener('DOMContentLoaded', function () {
  const search = document.getElementById('search');

	const goButton = document.getElementById('go');

	const profiles = ["default", "torrents", "books"]
	const selectedProfile = 0

	const config = {
		"dns": {
			url: "https://www.dns-shop.ru/search/?q={search}",
			profiles: [0, 1]
		},
		"citilink": {
			url: "https://www.citilink.ru/search/?text={search}",
			profiles: [0, 1]
		},
		"aliexpress": {
			url: "https://aliexpress.ru/wholesale?catId=&SearchText={search}",
			profiles: [0, 1]
		},
		"market": {
			url: "https://market.yandex.ru/search?text={search}",
			profiles: [0, 1]
		},
		"ozon": {
			url: "https://www.ozon.ru/search/?text={search}&from_global=true",
			profiles: [0, 1]
		},
		"wildberries": {
			url: "https://www.wildberries.ru/catalog/0/search.aspx?sort=popular&search={search}",
			profiles: [0, 1]
		}
	}

	search.addEventListener('keydown', (event) => {
		engine(event)
	})

	goButton.addEventListener('click', () => {
		engine(true)
	})

	const engine = (event) => {
		if (event === true) {
			goAction()
		}
		if (event.key === 'Enter') {
			goAction()
		}
	}

	const goAction = () => {
		Object.keys(config).map(i => {
			if (config[i].profiles.includes(selectedProfile)) {
				chrome.tabs.create({ url: createURLFromString(config[i].url, search.value) });
			}
		})
	}

	const createURLFromString = (string, value) => string.replace('{search}', encodeURI(value))

});
