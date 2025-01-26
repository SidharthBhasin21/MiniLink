const Link = require("../models/urlModel")
const shortid = require("shortid");


module.exports.createUrl = async (req, res) => {
    const { destinationUrl, userId, remarks , expirationDate } = req.body;
    console.log(req.body)


    if (!destinationUrl) {
        return res.status(400).json({ 
            status: 'error',
            message: "Destination URL is required." });
    }

    try {
        // Generate a unique short URL
        const shortUrl = shortid.generate();

        // Create and save the link
        const newLink = new Link({
        destinationUrl,
        shortUrl,
        expirationDate: expirationDate ? new Date(expirationDate) : null,
        userId,
        remarks // Optional: Associate the link with a user
        });

        await newLink.save();

        return res.status(201).json({
            status: 'success',
            message: "Short URL created successfully.",
            data: {
                destinationUrl: newLink.destinationUrl,
                shortUrl: `${req.headers.host}/${newLink.shortUrl}`,
                expirationDate: newLink.expirationDate,
            },
        });
    } catch (err) {
        console.error("Error creating short URL:", err);
        res.status(500).json({ 
            status: 'error',
            message: "Server error. Please try again later." });
    }
}
