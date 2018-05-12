http post localhost:3001/reset 
http post localhost:3001/notes/add note=0
http post localhost:3001/notes/add note=1
http post localhost:3001/notes/add note=2
http get localhost:3001/notes/all
http post localhost:3001/notes/0/update note=updated-0
http post localhost:3001/notes/1/delete 
http get localhost:3001/notes/all

