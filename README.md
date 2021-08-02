# Tele Notifier

`Tele notifier` is mini Telegram API made with Javascript and aims to make it easier to provide information when monitoring automation software using Telegram.



## Installation

First, you must install it before you import it to your project. Run this command in your terminal

```shell
$ npm install --save @rzkytmgr/tele-notifier
```



## Usage

Getting started with example code below

```javascript
const TeleNotifier = require('@rzkytmgr/tele-notifier');

(async function() {
    
    // extract TELEGRAM_BOT_TOKEN adn CLIENT_ID from the .env file
    const { TELEGRAM_BOT_TOKEN, CLIENT_ID } = process.env;
    
    const Notifier = new TeleNotifier(TELEGRAM_BOT_TOKEN, CLIENT_ID);
    
    await Notifier.sendMessage('Hello, World!');
    
})();
```

**Note :** Make your own `.env` file in your project directory, you can see `.env.example` for reference.



## API

<details open>
	<ul>
		<li><a href="#sendMessage">TeleNotifier.sendMessage</a></li>
		<li><a href="#sendPhoto">TeleNotifier.sendPhoto</a></li>
		<li><a href="#sendAudio">TeleNotifier.sendAudio</a></li>
		<li><a href="#sendDocument">TeleNotifier.sendDocument</a></li>
	</ul>
</details>


#### sendMessage

`TeleNotifier.sendMessage(textMessage, client = null)`

- `textMessage <string> (required)` fill it with a message what you want to send to your client.
- `client <string> (optional)` fill it with new client id if you want to change the recipient.



**e.g :**

```javascript
const Notifier = new TelegramNotifier(TELEGRAM_BOT_TOKEN, CLIENT_ID);

Notifier.sendMessage("Hello, World!")
	.then(res => console.log(res));
```



#### sendPhoto

`TeleNotifier.sendPhoto(photoUrl, caption = null, client = null)`

- `photoUrl <string> (required)` fill it with valid url with valid image extension.
- `caption <string> (optional)` fill it with text about image you sent.
- `client <string> <optional>` fill it with new client id if you want to change the recipient.



**e.g :**

```javascript
const Notifier = new TelegramNotifier(TELEGRAM_BOT_TOKEN, CLIENT_ID);

const PHOTO_URL = 'https://i.pinimg.com/236x/75/89/b6/7589b6ac4507747d19a84e96593e6d2e.jpg'

Notifier.sendPhoto(PHOTO_URL, 'what?')
	.then(res => console.log(res));
```



#### sendAudio

`TeleNotifier.sendAudio(audioUrl, caption = null, client = null)`

- `audioUrl <string> (required)` fill it with valid url with valid audio extension.
- `caption <string> (optional)` fill it with text about audio you sent.
- `client <string> <optional>` fill it with new client id if you want to change the recipient.



**e.g :**

```javascript
const Notifier = new TelegramNotifier(TELEGRAM_BOT_TOKEN, CLIENT_ID);

const AUDIO_URL = 'https://example.com/Titanic-2-Theme-Song.mp3'

Notifier.sendAudio(AUDIO_URL, 'You should listen to this music, i love this')
	.then(res => console.log(res));
```



#### sendDocument

`TeleNotifier.sendDocument(documentUrl, caption = null, thumbnail = null, client = null)`

- `documentUrl <string> (required)` fill it with valid url with valid document extension (also can send image or music through this method).
- `caption <string> (optional)` fill it with text about document you sent.
- `thumbnail <string> (optional)` fill it with valid image url as a thumbnail
- `client <string> <optional>` fill it with new client id if you want to change the recipient.



**e.g :**

```javascript
const Notifier = new TelegramNotifier(TELEGRAM_BOT_TOKEN, CLIENT_ID);

const DOCUMENT_URL = 'https://example.com/how-to-be-handsome.pdf'
const THUMBNAIL_URL = 'https://example.com/handsome-woman.jpeg'

Notifier.sendAudio(DOCUMENT_URL, 'You should listen to this music, i love this', THUMBNAIL_URL)
	.then(res => console.log(res));
```



## Troubleshooting

Feel free to create an [Issue](https://github.com/rzkytmgr/tele-notifier/issues) , let people solve the same problem.



**Regards,**

[**@rzkytmgr**](https://github.com/rzkytmgr)

