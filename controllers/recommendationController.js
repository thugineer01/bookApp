const Recommendation = require('../models/Recommendation');

exports.addRecommendation = async (req, res) => {
  try {
    const { title, author, description, rating } = req.body;

    const newRecommendation = new Recommendation({
      title,
      author,
      description,
      rating,
    });

    await newRecommendation.save();

    res.status(201).json({ message: 'Recommendation added successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error adding recommendation' });
  }
};
