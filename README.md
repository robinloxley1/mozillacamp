Chat Leo, a side project from mozillacamp
===========

repo for boot camp by mozilla and ntu 2013.

It is a Client-Server chat application using node.js and javascript at client side.
The main purpose is to demonstrate the use of html5 and bootstrap framework for web applications.
The application is deployable to Firefox OS and tested on firefox os mobile devices.

# Development workflow of Client
1. on Windows develop in dev branch, using webstorm
2. on Windows after test, commit to github
3. on Linux	git fetch from dev
4. run client by node web.js after npm install express

# Server
1. require("ws") for websocket service. reference: http://einaros.github.io/ws/
2. node server.js after npm install ws
3. Port for websocket must be open.

# Deploy to Heroku


# To Do List

1. allow user to change user name.
2. enable enter to send text without click buttons
3. read public IP address from configuration files.
