# Portfolio Meta-App

Create a single application that features each of your express apps as a separate service.  Turn each services into a Local Module that is listed in your package.json and can be installed with "npm install".  Once you've done this, you can require them from anywhere in your application without a file path (ie. require("local_module")).  

This process is surprisingly simple, you might even have fun doing it! But it can be annoying to delete and re-install each module in the node_modules folder every time you make a change.  This is where the build scripts from last project come in.


### Index
* [Learning Objectives](#learning-objectives)
* [Specifications](#specifications)
* [Resources](#resources)

---

## Learning Objectives

* Creating Build Scripts
* Using Local Modules
* NPM Scripts
* Deploying to Heroku

[TOP](#index)

---

## Specifications



1. Take all of your Express apps that you are most proud of and host them on a single Heroku deployment as services in a single project.  Users can experience your different application by accessing different base URL extentions (ie. ".com/notes/...", ".com/calculator/..."). 
2. Write a gulpfile that deletes and reinstalls a local module every time it is modified. 
3. Include a script in your package.json that runs this script, so someone who simply wants to use your application can clone it and set it up without needing to modify a file.


[TOP](#index)

---

## Resources

* There is some code to study for part 1 of the project.  

NPM Scripts:
* [NPM Scripts](https://medium.freecodecamp.org/introduction-to-npm-scripts-1dbb2ae01633)
* [Scotch Tutorial](https://scotch.io/tutorials/using-npm-as-a-build-tool)
* [NPM Build Scripts](https://deliciousbrains.com/npm-build-script/)
* [NPM as a build tool](https://www.keithcirkel.co.uk/how-to-use-npm-as-a-build-tool/)

Deploying to Heroku:
* [Their own tutorial](https://devcenter.heroku.com/articles/getting-started-with-nodejs#introduction)
* [Scotch.io](https://scotch.io/tutorials/how-to-deploy-a-node-js-app-to-heroku)

[TOP](#index)

___
___
### <a href="http://elewa.education/blog" target="_blank"><img src="https://user-images.githubusercontent.com/18554853/34921062-506450ae-f97d-11e7-875f-6feeb26ad72d.png" width="100" height="40"/></a>

