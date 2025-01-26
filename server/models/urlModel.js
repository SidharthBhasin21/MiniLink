const mongoose = require('mongoose');

const UrlSchema = new mongoose.Schema({

  destinationUrl: { type: String, required: true },
  shortUrl: { type: String, required: true, unique: true },
  expirationDate: { type: Date },
  remarks: { type: String },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  createdAt: { type: Date, default: Date.now },
  analytics: [
    {
      timestamp: { type: Date, default: Date.now },
      ip: { type: String },
      userAgent: { type: String },
    },
  ],
});

module.exports = mongoose.model('Link', UrlSchema);
