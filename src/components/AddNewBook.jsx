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
        
    } catch (error) {
        
    }
 }


 return (
   <div>
     <h2>Add New Book</h2>
     <form>
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
   </div>
 );
}

export default AddNewBook;
