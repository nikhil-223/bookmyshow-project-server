
# Movie Booking Backend

This repository contains the backend code for a movie booking system developed using Node.js, Mongoose, and MongoDB. The backend server allows users to select movie time slots and seats for booking.

## Prerequisites

Before running this project, please ensure that the following software is installed on your system:

- Node.js: [Download and install Node.js](https://nodejs.org)
- MongoDB: [Download and install MongoDB](https://www.mongodb.com/try/download/community)

## Getting Started

To get started with the movie booking backend, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Install the required dependencies by running the following command:

   ```shell
   npm install
   ```

4. Create a `.env` file in the root directory of the project and provide the following environment variable:

   ```
   MONGO_URI=<your_mongodb_uri>
   ```

   Replace `<your_mongodb_uri>` with the connection URI for your MongoDB database.

5. Start the application by running the following command:

   ```shell
   npm run server
   ```

   This will start the server at `http://localhost:8080`.

## API Endpoints

The following API endpoints are available for movie booking:

### Retrieve Last Booking

- Endpoint: `GET /api/booking`
- Description: Retrieves the details of the last booking.
- Response Format: JSON

### Create New Booking

- Endpoint: `POST /api/booking`
- Description: Creates a new booking.
- Request Format: JSON
- Response Format: JSON

## Error Handling

If there is no previous booking found, the server will send the following response:

```json
{
  "message": "No previous booking found."
}
```

## Database Schema

The movie booking backend uses the following MongoDB schema for storing booking details:

```javascript
const BookingSchema = new mongoose.Schema({
  movie: String,
  timeSlot: String,
  seats: {A1: Number,
		A2: Number,
		A3: Number,
		A4: Number,
		D1: Number,
		D2: Number,}
});
```

## Testing

Unit tests are available to ensure the functionality of the movie booking backend. To run the tests, use the following command:

```shell
npm run test
```

## Contributing

Contributions are welcome! If you find any issues or want to add new features to the movie booking backend, please open an issue or submit a pull request.

## Conclusion

Congratulations! You now have a fully functional backend server for movie ticket booking. Feel free to explore and integrate this API with your frontend application or any other projects as required.

For more detailed information on the available API endpoints and their request/response formats, please refer to the documentation or consult the codebase.

If you have any questions or need further assistance, please don't hesitate to contact us. Enjoy using the movie booking backend!
```
