# Organization User Structure Management App

This is a tiny server application built with **Node.js** using **TypeScript**. NestJS is used as a framework to provide a robust and scalable structure. The application allows you to manage a simple organization user structure.


## User Roles

1. Administrator: The top-most user with full access and control over the organization's user structure.
2. Boss: Users with subordinates. They can manage their own subordinates and perform specific operations.
3. Regular User: Users without subordinates. They have limited access and can perform basic operations.

## API Endpoints

### Administrator Controller

- **Endpoint:** `GET /administrator`
- **Description:** Get all regular users.
- **Response:** An array of `RegularUser` objects representing the users.

### Boss Controller

- **Endpoint:** `GET /boss/:id`
- **Description:** Get a boss by ID.
- **Parameters:**
    - `id` (path parameter): The ID of the boss.
- **Response:** The `Boss` object representing the boss.
######
- **Endpoint:** `GET /boss`
- **Description:** Get all bosses.
- **Response:** An array of `Boss` objects representing the bosses.
######
- **Endpoint:** `GET /boss/getSubordinates/:id`
- **Description:** Get the subordinates of a boss by ID.
- **Parameters:**
    - `id` (path parameter): The ID of the boss.
- **Response:** An array of `RegularUser` objects representing the subordinates.
######
- **Endpoint:** `POST /boss`
- **Description:** Create a new boss.
- **Request Body:** JSON object containing the boss details.
- **Response:** The created `Boss` object representing the new boss.
######
- **Endpoint:** `PUT /boss/update-boss`
- **Description:** Update a boss.
- **Request Body:** JSON object containing the boss details to be updated.
- **Response:** The updated `RegularUser` object representing the boss.
######
### User Controller

- **Endpoint:** `GET /regularUser/:id`
- **Description:** Get a regular user by ID.
- **Parameters:**
    - `id` (path parameter): The ID of the regular user.
- **Response:** The `RegularUser` object representing the user.
######
- **Endpoint:** `GET /regularUser`
- **Description:** Get all regular users.
- **Response:** An array of `RegularUser` objects representing the users.
######
- **Endpoint:** `POST /regularUser`
- **Description:** Create a new regular user.
- **Request Body:** JSON object containing the user details.
- **Response:** The created `RegularUser` object representing the new user.
######

## Installation

To run the application locally, follow these steps:

1. Clone the repository: `gh repo clone Daniil-Lobko/incode-group_test-task`
2. Install dependencies: `npm install`
3. Configure environment variables: Create a `.env` file and provide the necessary configuration settings for the application.
4. Start the application: Run `npm start` to start the server.

## Technology Stack

The application is built using the following technologies:

- Node.js (Nest.js)
- TypeScript
- TypeORM
