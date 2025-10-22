import { useState } from "react";

//
const AddNewBook = ()=>{
 const [bookData, setBookData] = useState({
   title: "",
   author: "",
   publishedYear: "",
   genre: "",
   language: "",
   country: "",
   rating: "",
   summary: "",
   coverImageUrl: "",
 });
 const [addedBooks, setAddedBooks] = useState([]);
 

 //Function to handle change during user input.
 const handleChange = (event)=>{
    const {name, value} = event.target;
    setBookData({ ...bookData, [name]: value });
 }

 //function to handle submit of form.
 const handleSubmit = async (event)=>{
    event.preventDefault();
    console.log("Submitted Book:", bookData);
    try {
        const response = await fetch(
          "https://books-dummy-level-one.vercel.app/books",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(bookData),
          }
        );

         if (!response.ok) {
           throw new Error(`Server Error: ${response.status}`);
         }

        const data = await response.json();
        console.log("Book added successfully:", data);
        alert("Book added successfully!");

        setAddedBooks((prevBooks) => [...prevBooks, data.book]);
        console.log(addedBooks);
        

        setBookData({
          title: "",
          author: "",
          publishedYear: "",
          genre: "",
          language: "",
          country: "",
          rating: "",
          summary: "",
          coverImageUrl: "",
        });
    } catch (error) {
        console.error("Error adding book:", error);
        alert(" Failed to add book");
    }
 }


 return (
   <div>
     <h2>Add New Book</h2>
     <form onSubmit={handleSubmit}>
       <label htmlFor="title">Title: </label>
       <input
         type="text"
         name="title"
         value={bookData.title}
         onChange={handleChange}
         required
       />
       <br />
       <br />

       <label htmlFor="author">Author: </label>
       <input
         type="text"
         name="author"
         value={bookData.author}
         onChange={handleChange}
         required
       />
       <br />
       <br />

       <label htmlFor="publishedYear">Published Year: </label>
       <input
         type="number"
         name="publishedYear"
         value={bookData.publishedYear}
         onChange={handleChange}
         required
       />
       <br />
       <br />

       <label htmlFor="genre">Genre: </label>
       <input
         type="text"
         name="genre"
         value={bookData.genre}
         onChange={handleChange}
         required
       />
       <br />
       <br />

       <label htmlFor="language">Language: </label>
       <input
         type="text"
         name="language"
         value={bookData.language}
         onChange={handleChange}
         placeholder="English"
       />
       <br />
       <br />

       <label htmlFor="country">Country: </label>
       <input
         type="text"
         name="country"
         value={bookData.country}
         onChange={handleChange}
       />
       <br />
       <br />

       <label htmlFor="rating">Rating (0-5): </label>
       <input
         type="number"
         name="rating"
         value={bookData.rating}
         onChange={handleChange}
         step="0.1"
         min="0"
         max="5"
       />
       <br />
       <br />

       <label htmlFor="summary">Summary: </label>
       <textarea
         name="summary"
         value={bookData.summary}
         onChange={handleChange}
       ></textarea>
       <br />
       <br />

       <label htmlFor="coverImageUrl">Cover Image URL: </label>
       <input
         type="url"
         name="coverImageUrl"
         value={bookData.coverImageUrl}
         onChange={handleChange}
       />
       <br />
       <br />

       <button type="submit">Add Book</button>
     </form>

     {/* Displaying newly added books. */}
     <div style={{ marginTop: "30px" }}>
       <h3>Books Added:</h3>
       {addedBooks.length === 0 ? (
         <p>No books added yet.</p>
       ) : (
         <ul>
           {addedBooks.map((book, index) => (
             <li key={index}>
               <strong>{book.title}</strong> by {book.author}
             </li>
           ))}
         </ul>
       )}
     </div>
   </div>
 );
}

export default AddNewBook;
