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