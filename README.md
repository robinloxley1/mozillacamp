Chat Leo, a side project from mozillacamp
===========

repo for boot camp by mozilla and ntu 2013.

It is a Client-Server chat application using node.js and javascript at client side.
The main purpose is to demonstrate the use of html5 and bootstrap framework for web applications.
The application is deployable to Firefox OS and tested on firefox os mobile devices.

# Development workflow of Client
1. on Windows develop in dev branch, using webstorm
2. on Windows after test, commit to github
3. on Linux	git fetch from dev, deploy to heroku

# Server
1. require("ws") for websocket service. reference: http://einaros.github.io/ws/
2. node server.js after npm install ws

# Deploy to Heroku
