# Movie Booking Backend

This is a backend project developed using Node.js, Mongoose, and MongoDB to facilitate the booking of movie tickets. Users can select movie time slots and seats for booking.

## Prerequisites

Before running this project, make sure you have the following installed on your system:

- Node.js: [Download and install Node.js](https://nodejs.org)
- MongoDB: [Download and install MongoDB](https://www.mongodb.com/try/download/community)

## Getting Started

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Install the required dependencies by running the following command:

   ```shell
   npm install
   ```

4. Create a `.env` file in the root directory and provide the following environment variables:

   ```
   PORT=3000
   MONGODB_URI=<your_mongodb_uri>
   ```

   Replace `<your_mongodb_uri>` with the connection URI for your MongoDB database.

5. To start the application, run the following command:

   ```shell
   npm start
   ```

   This will start the server at `http://localhost:3000`.

## API Endpoints

The following API endpoints are available:

### Bookings

- `GET api/booking`: Retrieve last booking.
- `POST api/booking`: Create a new booking.

## Error Handling

In case of errors, the server will respond with an appropriate HTTP status code and a JSON response containing an error message.

## Conclusion

Congratulations! You now have a backend server for booking movie tickets. Feel free to explore and integrate this API with your frontend or any other applications as needed.

For more information on the available API endpoints and their request/response formats, please refer to the documentation or consult the codebase.

If you have any questions or need further assistance, please don't hesitate to contact me. Enjoy your movie booking experience!