Another way to organize modular applications is by "services". In this approach you take everything that is not environment specific (MCL) and put it together.

If you want to use this service in an application you can require the complete service as a single object and simply write handlers and views for it.  

If the developer of the service wrote good docs, you shouldn't even have to look through the source code to know how to use it.  See if you can build your own browser interface for this tictactoe game after reading only the 'docs' file.