const axios = require('axios');

exports.searchBooks = async (req, res) => {
  try {
    const { query, type } = req.query;

    const response = await axios.get(`https://api.example.com/books?q=${query}&type=${type}`);

    const books = response.data; // Adjust this based on the API response structure

    res.json(books);
  } catch (error) {
    res.status(500).json({ message: 'Error searching books' });
  }
};
