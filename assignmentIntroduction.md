# FastAPI To-Do List Assignment

## Objective
Create a basic RESTful API using FastAPI and SQLite that allows users to manage a simple "To-Do List" application.

## Requirements

### Set Up FastAPI Project:
1. Create a new FastAPI project in a GitHub repository.
2. Use SQLite as the database for storing to-do items.

### API Endpoints:
Implement the following endpoints:
- **GET /todos**: Retrieve a list of all to-do items.
- **POST /todos**: Create a new to-do item. The request body should include:
  - `title`: string
  - `description`: string (optional)
  - `completed`: boolean (default: false)
- **GET /todos/{todo_id}**: Retrieve a specific to-do item by its ID.
- **PUT /todos/{todo_id}**: Update a specific to-do item by its ID. The request body can include any of the fields in the POST request.
- **DELETE /todos/{todo_id}**: Delete a specific to-do item by its ID.

### Database Schema:
Create a simple SQLite database schema with a table for to-do items that includes the following fields:
- `id`: integer (primary key, autoincrement)
- `title`: text
- `description`: text
- `completed`: boolean

### Documentation:
- Include basic API documentation using FastAPI’s automatic documentation feature (Swagger UI).
- Add comments to your code for clarity.

## Submission:
1. Create a GitHub repository for your project.
2. Ensure that your code is well-organized and includes a README file with instructions on how to run the application.
3. Send the GitHub repository link to `founder@23bg.tech` or `iamprathameshmore07@gmail.com`, or message through Wellfound.

## Evaluation Criteria:
- **Functionality**: All API endpoints work as specified.
- **Code Quality**: Clean, well-structured code with comments.
- **Documentation**: Clear instructions in the README file.
- **Time Management**: Complete the assignment within 6 hours.
