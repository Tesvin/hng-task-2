# hng-task-2
## Description
A simple REST API capable of CRUD operations on a "person" resource that interfaces with a MongoDB database.
## Available Endpoints
| Route      | Description |
| ----------- | ----------- |
| GET /api/:userId	     | Fetch a user from the database |
| POST /api   | Text        | Create a new user |
| PUT /api/:userId	| Update a user |
| DELETE /api/:userId	| Delete a user |
## API Documentation
- [Document](https://github.com/Tesvin/hng-task-2/blob/main/DOCUMENTATION.md)
## Usage
clone project repository:
git clone https://github.com/Tesvin/hng-task-2.git
cd hng-task-2
Install dependencies:
npm install
Create a .env with the values:
MONGO_URL=<replace-with-mongodb-connection-string>
Start up server:
npm run start
The API will be available at http://localhost:PORT/api
