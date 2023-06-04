const express = require("express");
const router = express.Router();
const bookMovieSchema = require("./schema");

// Creating new booking and adding it to database.
router.post("/booking", async (req, res) => {
	const { movie, slot, seats } = req.body;

	const myBooking = new bookMovieSchema({ movie, slot, seats });
	const savedBooking = await myBooking.save();

	if (savedBooking) {
		//on successfull
		res.status(200).json({ data: myBooking, message: "Booking successful!" });
	} else {
		//on error
		res.status(500).json({
			data: null,
			message: "Something went wrong!. Please try again.",
		});
	}
});

// Getting last booking details form database and sending it to frontend.

router.get("/booking", async (req, res) => {
	const myBooking = await bookMovieSchema.find().sort({ _id: -1 }).limit(1);

	if (myBooking.length === 0) {
		//Sending "No previous Booking found" message if no last booking found
		res.status(200).json({ data: null, message: "No previous Booking found!" });
	} else {
		//Sending data if last booking found
		res.status(200).json({ data: myBooking[0] });
	}
});

module.exports = router;
