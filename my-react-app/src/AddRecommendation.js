import React, { useState } from 'react';
import axios from 'axios';

const AddRecommendation = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [rating, setRating] = useState('');

  const handleSubmit = async () => {
    try {
      await axios.post('/add-recommendation', {
        title,
        author,
        description,
        rating,
      });
      console.log('Recommendation added successfully');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Add Book Recommendation</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <input
        type="text"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        placeholder="Author"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <input
        type="number"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        placeholder="Rating"
      />
      <button onClick={handleSubmit}>Submit Recommendation</button>
    </div>
  );
};

export default AddRecommendation;
