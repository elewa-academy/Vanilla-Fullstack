Fill in everything that any app will need

Main Folder:
* filling in package.json
* install requirements we know we'll need
  * express
  * body-parser
  * jsonfile
  * morgan (for logging)
  * cors 
    * (if the api will be open to not-your-frontend)
    * ie. if it's a public api
  * (native modules like "path" don't need to be listed)
  * ( npm install --save express body-parser jsonfile )
* index.js
  * require express
  * initialize app
  * use body parser
  * use morgan
  * statically serve our frontend (path)
  * use the backend service
  * listen on a port

Backend:
* controller.js
  * export an object with an empty model & logic method
* db.json
  * initialize it empty
* index.js: export routes.js
* logic.js: empty.  there is no logic in a crud app
* model.js: copy paste a model from earlier
* routes.js: 
  * create a router instance
  * import the controller
  * import the model
  * set the model in the controller
  * use the controller in the RESTful routes

Frontend:
* index.html
  * general html structure
  * require our scripts: axios, all the js files
  * hello message
* scripts
  * controller
  * handler
  * view
  * init








