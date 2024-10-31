# Todo--Assignment-Project


## Overview
This is a RESTful API for managing a To-Do List application built with Node.js and SQLite. You can create, read, update, and delete to-do items.

## Features
- Get all to-do items.
- Create a new to-do item.
- Get a specific to-do item by ID.
- Update a to-do item by ID.
- Delete a to-do item by ID.

## Requirements
- Node.js (14.x or later)
- SQLite (for the database)
- Express (for the API)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/dkconnect10/Todo--Assignment-Project.git
   cd Todo--Assignment-Project


2. Install the necessary packages:

  -npm install

3. Running the Application

  -To start the server, run:

  node app.js  


# The API will run at http://127.0.0.1:2000/todos.


API Endpoints
GET /todos

    Description: Get a list of all to-do items.
    Response: JSON array of to-do items.

POST /todos

    Description: Create a new to-do item.
    Request Body:

   {
     "title": "string",
     "description": "string (optional)",
     "completed": "boolean (default: false)"
   }
    Response: JSON object of the created to-do item.

GET /todos/{todo_id}

    Description: Get a specific to-do item by its ID.
    Response: JSON object of the requested to-do item.

PUT /todos/{todo_id}

    Description: Update a specific to-do item by its ID.
    Request Body: Same as POST request.
    Response: Message confirming the update.

DELETE /todos/{todo_id}

    Description: Delete a specific to-do item by its ID.
    Response: Message confirming the deletion.

Documentation

    Visit http://127.0.0.1:2000/docs for API documentation.



