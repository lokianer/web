---
title:  "Syncbot"
author: Lokianer
author_image: '/../images/loki.png'
excerpt: 'This is a SyncBot. It synchronises a Twitch chat with a specific Discord channel.'
tag: Code
cover_image: '/../images/posts/code.jpeg'
date: '2021-04-01'
featured: true
---
## Description

This is a SyncBot. It synchronises a Twitch chat with a specific Discord channel.

Download it <a class='sololink' href='https://github.com/lokianer/SyncBot'>here</a>.

## Start the bot
With node ``index.js``, you can start the bot. Before that make sure, you create a ``config.JSON`` with the respectiv Attributes, or add the values directly to the ``index.js``.

## Dependencies
* discord.js: „^12.5.3“
* dotenv: „^9.0.2“
* nodemon: „^2.0.7“
* tmi.js: „^1.8.3

## Accounts
### Twitch
You need a Twitch account to join the channel and read the messages. Additionally, you need an OAuth Token. You can request one <a class='sololink' href='https://twitchapps.com/tmi/'>here</a>.
### Discord-Bot
You need a Discord application, you can create one <a class='sololink' href='https://discord.com/developers/applications'>here</a>. Add the bot to your server

## License
ISC License (ISC) Copyright 2021 Lokianer

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED „AS IS“ AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.