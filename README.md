# DOM II - Event Exploration

  

Fun Bus wants you to make their site more interactive. They are relying on you to provide 10 unique events to enhance their site. Explore the many events available to you by using the [MDN events reference](https://developer.mozilla.org/en-US/docs/Web/Events).

  

## Task 1: Set Up The Project With Git

  

* [X] Fork the project into your GitHub user account

* [X] Clone the forked project into a directory on your machine

* [X] You are now ready to build this project with your preferred IDE

  

## Task 2: Set Up LESS Preprocessor

* [X] Verify that you have LESS installed correctly by running `lessc -v` in your terminal, if you don't get a version message back, reach out to your project manager for help.

* [X] Open your terminal and navigate to your preprocessing project by using the `cd` command

* [X] Once in your project's root folder, run the following command `less-watch-compiler less css index.less`

* [X] Verify your compiler is working correctly by changing the `background-color` on the `html` selector to `red` in your `index.less` file.

* [X] Once you see the red screen, you can delete that style and you're ready to start on the next task

## Task 3: Create Unique Event Listeners

* [ ] Using your [index.js file](js/index.js), create 10 [unique event listeners](https://developer.mozilla.org/en-US/docs/Web/Events). using your creativity to make the Fun Bus site more interactive.  Here are some unique events you could try to use: 
	* [X] `mouseover`
	* [X] `keydown`
	* [X] `wheel`
	* [ ] `drag / drop`
	* [X] `load`
	* [X] `focus`
	* [X] `resize`
	* [X] `scroll`
	* [X] `select`
	* [X] `dblclick`
	* [X] `copy`

Using the 10 unique events, find ways to update the DOM in creative ways. For example you could change colors, animate objects, remove objects, etc.

* [X] Nest two similar events somewhere in the site and prevent the event propagation properly
* [X] Stop the navigation from items from refreshing the page by using `preventDefault()`

## Stretch Task:

* [ ] Go look at [GSAP](https://greensock.com/) and implement the animations found in that library with your custom events.

  

## Stretch assignment

* [ ] Take a look at the [stretch assignment](stretch-assignment) and follow the instructions in the read me file.