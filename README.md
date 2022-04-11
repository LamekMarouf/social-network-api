# Social Network API

## Description

This is a social network API that uses mongoDB, Mongoose, Node.js and Express.js to create a database that stores information of users and their thoughts. To begin with, the "npm install" command needs to be ran to install all necessary packages. Following this step, the "npm run seed" and "npm run start" command need to be ran in order to seed the data and run the server. You can then use an app, such as Insomnia, to test CRUD operations and see how this project works.

### List of CRUD URLs
* GET All Users: ```http://localhost:3001/api/users/```
* GET User by ID: ```http://localhost:3001/api/users/:userID```
* CREATE User: ```http://localhost:3001/api/users```
* UPDATE User: ```http://localhost:3001/api/users/:userID```
* DELETE User: ```http://localhost:3001/api/users/:userID```
* GET All Thoughts: ```http://localhost:3001/api/thoughts```
* GET Thougt by ID: ```http://localhost:3001/api/thoughts/:thoughtID```
* CREATE Thought: ```http://localhost:3001/api/thoughts```
* UPDATE Thought: ```http://localhost:3001/api/thoughts/:thoughtID```
* DELETE Thought: ```http://localhost:3001/api/thoughts/:thoughtID```
* ADD Friend: ```http://localhost:3001/api/users/:userID/friends/:userID```
* REMOVE Friend: ```http://localhost:3001/api/users/:userID/friends/:friendID```

## Screenshot of my project

![image](https://user-images.githubusercontent.com/89329958/162654526-c5bee436-52e7-40e3-b41e-3bfa1c6f6440.png)


## Video Demonstration of the Social Network API

The file has been compressed to a .zip file in order for me to upload it.

[social-network-api-demo.zip](https://github.com/LamekMarouf/social-network-api/files/8460585/social-network-api-demo.zip)
