import { useState } from "react";
import useFetch from "../useFetch";

const Books = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const { data, loading, error } = useFetch(
    "https://books-dummy-level-one.vercel.app/books"
  );

  const handleDelete = async (bookId) => {
    try {
      const response = await fetch(
        `https://books-dummy-level-one.vercel.app/books/${bookId}`,
        { method: "DELETE" }
      );

      if (!response.ok) {
        throw "Failed to delete book.";
      }

      const data = await response.json();
      console.log(data);

      if (data) {
        setSuccessMessage("Book deleted Successfully.");
      }
    } catch (error) {
      console.error("Error:", error);
      setSuccessMessage("Book deleted successfully!");
      window.location.reload();
    }
  };


  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching books</p>;

  return (
    <div>
      <h2>All Books</h2>
      <ul>
        {data?.map((book) => (
          <li key={book._id}>
            {book.title}{" "}
            <button onClick={() => handleDelete(book._id)}>Delete</button>
          </li>
        ))}
      </ul>

      <p style={{ color: "green" }}>{successMessage}</p>
    </div>
  );
};


export default Books;
