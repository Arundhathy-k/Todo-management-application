# Todo-management-application 

Prerequisites:

Java 11 or higher (https://www.oracle.com/java/technologies/downloads/)

Maven (https://maven.apache.org/)

Node.js and npm (or yarn) (https://nodejs.org/)

MySQL database server (https://www.mysql.com/downloads/)


Set up the database:

Create a MySQL database for this application.

Update the application.properties file (backend directory) with your database connection details (URL, username, password).

Install backend dependencies:

mvn clean install

Install frontend dependencies:

cd frontend

npm install (or yarn install)

Running the Application

- In Backend to run spring boot application on PORT = 8080.

Start the backend:

mvn spring-boot:run

Start the frontend development server:

cd frontend

npm start (or yarn start)

This will start the server, and the application will be accessible at http://localhost:3000.

Add("/todos") in the URL.

Usage

The application provides a user interface for CRUD operations on tasks.

You can create new tasks, view existing tasks, update task details, and mark tasks as completed or incomplete.
