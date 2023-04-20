// import React from 'react';
// import './BookDetails.css';

// function BookDetails() {
//   const book = {
//     title: 'It Ends With Us',
//     author: 'Colleen Hoover',
//     summary:
//       'Sometimes it is the one who loves you who hurts you the most. Lily hasn’t always had it easy, but that’s never stopped her from working hard for the life she wants. She’s come a long way from the small town in Maine where she grew up — she graduated from college, moved to Boston, and started her own business. So when she feels a spark with a gorgeous neurosurgeon named Ryle Kincaid, everything in Lily’s life suddenly seems almost too good to be true. Ryle is assertive, stubborn, maybe even a little arrogant. He’s also sensitive, brilliant, and has a total soft spot for Lily. And the way he looks in scrubs certainly doesn’t hurt. Lily can’t get him out of her head. But Ryle’s complete aversion to relationships is disturbing. Even as Lily finds herself becoming the exception to his “no dating” rule, she can’t help but wonder what made him that way in the first place. As questions about her new relationship overwhelm her, so do thoughts of Atlas Corrigan — her first love and a link to the past she left behind. He was her kindred spirit, her protector. When Atlas suddenly reappears, everything Lily has built with Ryle is threatened.',
//     image: 'it ends with us.jpeg'
//   };


//   const handleGoBack = () => {
//     // handle going back
//   };

//   const handleCheckmark = () => {
//     // handle checkmark click
//   };

//   const handleLogout = () => {
//     // handle logout
//   };

//   return (
//     <div className="book-details-container">
//       <div className="top-container">
//         <button className="logout-btn" onClick={handleLogout}>
//           Logout
//         </button>
//         <h2 className="your-list">Your List</h2>
//       </div>
//       <div className="box">
//         <button className="back-btn" onClick={handleGoBack}>
//           Go Back
//         </button>
//         <img src={book.image} alt={book.title} className="book-image" />
//         <div className="book-details">
//           <h1 className="book-title">{book.title}</h1>
//           <h3 className="book-author">By {book.author}</h3>
//           <p className="book-summary">{book.summary}</p>
//         </div>
//         <div className="card-btns">
//           <button className="checkmark-btn" onClick={handleCheckmark}>
//             Checkmark
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default BookDetails;



import React, { useState } from 'react';
import './BookDetails.css';

function BookDetails() {
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState('');

  const book = {
    title: 'It Ends With Us',
    author: 'Colleen Hoover',
    image: 'it ends with us.jpeg',
    summary: 'this is a book',
    
  };

  const handleGoBack = () => {
    // handle going back
  };

  const handleCheckmark = () => {
    // handle checkmark click
  };

  const handleLogout = () => {
    // handle logout
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (commentText !== '') {
      setComments([...comments, commentText]);
      setCommentText('');
    }
  };

  return (
    <div className="book-details-container">
      <div className="top-container">
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
        <h2 className="your-list">Your List</h2>
      </div>
      <div className="box">
        <button className="back-btn" onClick={handleGoBack}>
          Go Back
        </button>
        <img src={book.image} alt={book.title} className="book-image" />
        <div className="book-details">
          <h1 className="book-title">{book.title}</h1>
          <h3 className="book-author">By {book.author}</h3>
        </div>
        <form onSubmit={handleCommentSubmit} className="comment-form">
          <input
            type="text"
            placeholder="Add a comment"
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
          />
          <button type="submit">Post</button>
        </form>
        <div className="comment-section">
          {comments.map((comment, index) => (
            <p key={index}>{comment}</p>
          ))}
        </div>
        <div className="card-btns">
          <button className="checkmark-btn" onClick={handleCheckmark}>
            Checkmark
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookDetails;
