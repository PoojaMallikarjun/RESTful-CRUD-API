# RESTful-CRUD-API
A CRUD API using NodeJS, ExpressJS, MongoDB and Mongoose.
<pre>
Installation:

1.Go to the project's root directory cd /path/to/directory.  
2.run npm install.  
3.start the MongoDB process and run it in the background by running mongod command.  
4.run the command to start the node server: nodemon run start.  

Available end-points:
GET /people

GET /people/:id

POST /people  
Request body (raw)   
{  
  	"name":"",  
	"interests":"",  
	"age":""  
}  

PATCH /people/:id  
    
DELETE /people/:id
</pre>
