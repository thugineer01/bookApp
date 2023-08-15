import React from 'react';
import BookSearch from './BookSearch';
import AddRecommendation from './AddRecommendation';
import './css/App.css'; // Import the CSS file

function App() {
  return (
    <div className="app-container">
      <header>
        <h1>Book Recommendation Platform</h1>
      </header>
      <main className="main-content">
        <div className="book-search">
          <BookSearch />
        </div>
        <div className="add-recommendation">
          <AddRecommendation />
        </div>
      </main>
    </div>
  );
}

export default App;
