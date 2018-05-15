# Youtube Wannabe

The objective of this project is to drop a few advanced techniques into one app.  It includes: 
* Asynchronous programming
    * API calls
    * callbacks
    * promises
* building from source
* task runners
* es6 -> es5 conversion
* closure, execution context
* factories
___

### Third-Party APIs

At it's heart, an API isn't very different from a website:  
1. A user sends a request over the internet 
2. A server recieves and processes the request  
3. The server sends a response containing what the user asked for, or an error
4. The user does something with that response

The main difference between an API and a website is what that response contains.  With a website, that response will carry HTML, JS, CSS, images ... Everything needed to render and interact with a website.  With an API, that response will contain pure data, typically in [JSON format](http://www.json.org).  

What does this mean for a developer?  It means you can access all of YouTube's videos without going to their website!  It also means you can do it from your own app without having to refresh the browser if you use __asynchronous API calls__.  The app sends a request to the API, waits for the data to return, and only then completes the task which needs that data. 

In this app it means: 
1. A request is sent to the YouTube API using the "youtube-api-search" module. 
2. YouTube processess the request - valid api key? what's the query? ...
3. YouTube sends a response carrying either the video or an error
4. Once the response arrives, your app executes the callback that was waiting for the videos.  ie. renders the search results.


To work with an API, you will usually need to register your application with the API provider (and get an API key to identify yourself with when making a request).

That's enough info for now, we'll look much closer at API's in week 8 when we build our won. If you want to learn more about using the YouTube API check out this [codeacademy course](http://www.codecademy.com/tracks/youtube).

___
### Build Scripts - automating with a task runner
So far we haven't seen any difference between the source code we write and the code our applications run.  In the real world there usually is, and in this application there is.  

There are many reasons to build projects from source before running them.  In the JS world these are some of the most reasons:  
* It's nicer to write in es6 than es5, but not all browsers support it. Thus [babel](https://babeljs.io) and [babelify](https://github.com/babel/babelify).
* You want to serve only a single js file, but develop your code in a directory structure with many files.
* Some build tools will optimize your software while compiling what you wrote.

In this application we are building from source so you can use some es6 (classes, promises) and so you can have the 'view' class in a different file from the 'app' funciton.  This sounds great but is really annoying in practice. Everytime you change a line of code, you'll need to re-build the entire project before can test it! 
Enter 'Task Runners' - you can think of these as next-level 'nodemon'. Nodemon re-runs JS files in node every time a change is made in that file.  Task runners are like that, but you get to decide what they do and decide when they do it. We will be using gulp to re-build our application every time a change is saved anywhere in the source code.  

Take a closer look at the tools we'll be using: 
* [babelify and browserify](http://egorsmirnov.me/2015/05/25/browserify-babelify-and-es6.html)
* [gulp](https://css-tricks.com/gulp-for-beginners/)  
* Our own [lesson](https://github.com/jankeLearning/content-md/blob/master/dev-knowledge/04-packaging.md) breaking down the script you'll use for this project.

___
### Assignment 
Replicate the app from scratch:
1. Write the list of user stories this app supports.  
2. Get your own [YouTube API key](https://developers.google.com/youtube/v3/getting-started)
2. Put our code aside and build this app again from scratch implementing one user story at a time. Don't worry about making your code match ours - _the app is about the stories not the implementation_  
3. Complete a GH repo to showcase your lovely work.

Below are some suggested steps for studying the working code we've provided:
* Open the project directory in terminal and type 'gulp watch'. Open 'index.html' in your browser.
    * you will get an error.  remember what it was, you'll fix it in step 2.
* Read through gulpfile.js:
    * the error from step 1 comes from 'gulpfile.js', where? fix it.
    * why does gulpfile need babelify?
    * what happens if you run 'gulp js' in terminal?
    * or if you run 'gulp default'?
    * right now, app.js has to be in 'src'.  modify the application (directory structure and gulpfile) so app.js has to be in a folder called 'source'.
* Read and document the view object.
* Read and document app.js (in this order):
    1. videoSearch, getVideoDetail
    2. setupHandlers
    3. app
* Read the source code for 'youtube-api-search'
    1. open node_modules
    2. scroll all the way down to 'youtube-api-search'
    3. read 'index.js'
    4. document this module


___

Challenges: 
* Implement auto-complete for previous searches using a model object
* Replace all callbacks with promises



