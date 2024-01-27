# Social Network API

## Description
This is an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. I used Express.js for routing, a MongoDB database, and the Mongoose ODM. In addition to using the Express.js and Mongoose packages, I also used JavaScript Date object to format timestamps.

## Demo
Please see this [video walkthrough](https://drive.google.com/file/d/1JcZxJuGFxB2yWxh-2F0a_1ye2HUBmyB-/view) to see the application being tested in Insomnia Core. 

## Repo Link:
https://github.com/YuliyaTsoy/social-network-api

## Schreenshot
![insomnia screenshot](/assets/screenshot.png)

## Technology
Application was created using:

* Javascript
* Node.js
* Express.js
* MongoDB
* Mongoose

## Installation
* First, install npm packages by running the following command in the terminal:
`npm i`
* Second, invoke the application by running the following command in the terminal:
`npm run`

### Note
The seeding is done using Insomnia Core

## Usage
After the app is invoked, the Mongoose models are synced to the MongoDB database. See below screenshot:
![compass](/assets/image.png)

1) In Insomnia Core open routes for Users and Thoughts and the data for each route will be displayed in formatted JSON
2) Create User, Friend, Thought and Reaction routes to create database and be able to test the application in Insomnia: 

📁 USER

* Create a new user: POST /api/users

* Get all users: GET /api/users

* Get a single user by its id: GET /api/users/:userId

* Update a user by its id: PUT /api/users/:userId

* Delete a user by its id: DELETE /api/user/:userId

📁 FRIEND

* Add a new friend to a user's friend list: POST /api/users/:userid/friends/:friendId
* Delete a friend from a user's friend list: DELETE /api/users/:userid/friends/:friendId

📁 THOUGHT

* Create a new thought: POST /api/thoughts/
* Get all thoughts: GET /api/thoughts/
* Get a single thought by its id: GET /api/thoughts/:thoughtId
* Update a thought by its id: PUT /api/thoughts/:thoughtId
* Delete a thought by its id: DELETE /api/thoughts/:thoughtId

📁 REACTION

* Create a reaction: POST /api/thoughts/:thoughtId/reactions
* Delete a reaction by the reactionId: DEL /api/thoughts/:thoughtId/reactions/:reactionId

## Contact
Feel free to contact me at: 

[My Email](yuliyatsoy2023@gmail.com)

[My LinkedIn](https://www.linkedin.com/in/yuliya-tsoy-fsdeveloper2024/)

[My Github](https://github.com/YuliyaTsoy)