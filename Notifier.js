const fetch = require('node-fetch');

// class `TeleNotifier`
class TeleNotifier {
	/**
	 * constructor method
	 * @param {string} token telegram bot token, you can get it from @botfather from telegram chat
	 * when you make a bot using @botfather , it will give you the token.
	 * @param {string} client telegram id/channel username chat example @thisisuser or group id -987654321
	 * remember, use (-) before group id example group id 987654321, you must add - symbol, result -987654321.
	 */
	constructor(token, client) {
		// initialization the `token` property with token value from parameter
		this.token = token;
		// initialization the `client` property with client value from parameter
		this.client = client;

		// initialization the `GLOABL_URL` property with telegram API link
		this.GLOBAL_URL = `https://api.telegram.org/bot${this.token}/`;
	}

	/**
	 * setToken method
	 * @param {string} token re-initialization the bot `token`
	 * @returns null
	 */
	setToken(token) {
		// conditional statement if `token` parameter not setted
		if (token) return null;

		// re-initialization the `token` property with token value from parameter
		this.token = token;
	}

	/**
	 * setClient method
	 * @param {string} client re-initialization the `client`
	 * @returns null
	 */
	setClient(client) {
		// conditional statement if `client` parameter not setted
		if (client) return null;

		// re-initialization the `client` property with token value from parameter
		this.client = client;
	}

	/**
	 * verify method
	 * checking or re-validate the `token` and `client` properties.
	 */
	verify() {
		// conditional statement checking `token` property value
		if (!this.token) {
			throw new Error('Telegram Bot Token Invalid');
		}

		// conditional statement checking `client` property value
		if (!this.client) {
			throw new Error('Telegram Client Id Invalid');
		}
	}

	/**
	 * sendMessage method
	 * @param {string} textMessage message text send to client
	 * @param {string} client
	 * @returns response from sendMessage telegram API
	 */
	async sendMessage(textMessage, client = null) {
		if (client) this.setClient(client);
		this.verify();
		const response = await fetch(this.GLOBAL_URL + 'sendMessage?chat_id=' + this.client + '&text=' + encodeURI(textMessage));
		return await response.json();
	}

	/**
	 * sendPhoto method
	 * @param {string} photoUrl valid url and valid image extension
	 * @param {string} caption photo caption or message default null
	 * @param {string} client
	 * @returns response from sendPhoto telegram API
	 */
	async sendPhoto(photoUrl, caption = null, client = null) {
		if (client) this.setClient(client);
		this.verify();
		const response = await fetch(this.GLOBAL_URL + 'sendPhoto?chat_id=' + this.client + '&photo=' + photoUrl + '&caption=' + encodeURI(caption));
		return await response.json();
	}

	/**
	 * sendAudio method
	 * @param {string} audioUrl valid url and valid audio extension
	 * @param {string} caption audio caption or message default null
	 * @param {string} client
	 * @returns response from sendAudio telegram API
	 */
	async sendAudio(audioUrl, caption = null, client = null) {
		if (client) this.setClient(client);
		this.verify();
		const response = await fetch(this.GLOBAL_URL + 'sendAudio?chat_id=' + this.client + '&audio=' + audioUrl + '&caption=' + encodeURI(caption));
		return await response.json();
	}

	/**
	 * sendDocument method
	 * @param {string} documentUrl valid url and valid document url
	 * @param {string} caption document caption or message , default null
	 * @param {string} thumbnail document thumbnail, valid url and valid image extension
	 * @param {string} client
	 * @returns response from sendDocument telegram API
	 */
	async sendDocument(documentUrl, caption = null, thumbnail = null, client = null) {
		if (client) this.setClient(client);
		this.verify();
		const response = await fetch(this.GLOBAL_URL + 'sendDocument?chat_id=' + this.client + '&document=' + documentUrl + '&caption=' + caption + '&thumb=' + thumbnail);
		return await response.json();
	}
}

module.exports = TeleNotifier;
