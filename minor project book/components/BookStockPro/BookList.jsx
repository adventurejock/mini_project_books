
import React from 'react';

const books = [
  { id: 1, title: "Book 1", author: "Author1", category: "Health", quantity: 3 },
  { id: 2, title: "Book 2", author: "Author2", category: "Health", quantity: 10 },
  { id: 3, title: "Book 3", author: "Author3", category: "Health", quantity: 3 },
  { id: 4, title: "Book 4", author: "Author4", category: "Health", quantity: 6 },
  { id: 5, title: "Book 5", author: "Author5", category: "Health", quantity: 3 },
];

const BookList = () => {
  return (
    <section className="mt-20 ml-40 text-3xl text-black max-md:mt-10 max-md:max-w-full">
      <div className="mb-6">Sr No Title Author Category Quantity</div>
      {books.map((book) => (
        <div key={book.id} className="mt-7">
          {book.id} {book.title} {book.author} {book.category} - {book.quantity} +
        </div>
      ))}
    </section>
  );
};

export default BookList;