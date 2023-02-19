# DCIT205miniproject
This is a backend service for a school management system built using Node.js, Express, MongoDB, and Postman stack. The service provides RESTful APIs for managing students
registration into the school.

Getting Started
Clone the repository: git clone https://github.com/mariepearl/DCIT205miniproject.git
Install dependencies: npm install express cors mongoose 
Configure environment variables by creating a .env file at the root of the project with the following variables:

Start the server: npm start
The server should now be running on the specified port and ready to receive requests.

The following API endpoints are available:

Students
GET /api/students: Get a list of all students
GET /api/students/:id: Get a single student by ID
POST /api/students: Create a new student

Testing with Postman
The project includes a Postman collection file (Marie-backend.postman_collection.json) that can be used to test the API endpoints. 
Import the file into Postman and execute the included requests to interact with the API.

Contributing
Contributions are welcome! Please open a pull request or submit an issue if you encounter any problems or have suggestions for improvement.

License
This project is licensed under the MIT License.
