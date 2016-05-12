# Overly Engineered [Conway's Game of Life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life) #
This project was created as a fun challenge from [Jack Russel Software/Tabula Rasa Healthcare](http://www.tabularasahealthcare.com/).

This is by no means a finished website. This is just a skills test for Angular in NodeJS. Although this app correctly
generates and creates successive generations, security, performance, and styling are minimal. Consider this a proof of concept.

The main app is located in the server/nodeApp.js file. When the site loads up a random Game of Life board will be generated.
successive generations will compute on the client side into perpetuity.

Special thanks to RosettaCode.org for a nextGen() function for Conway's Game of Life

## Loading and starting the app ##
- git clone the project locally
- navigate to /server
- npm install
- node nodeApp.js

## Possible future updates: ##
- Re-implement next gen to be more functional
- Make next gen and init more performant
- Make board size updatable via form
- Make gen update time modifiable
- Add stop/start function/button
- Create better styling
- Figure out a way to remove the need for a $scope.$apply() (send function into directive and setInterval from there?)