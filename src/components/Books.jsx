import useFetch from "../useFetch"

const Books = ()=>{
    const { data, loading, error } = useFetch(
      "https://books-dummy-level-one.vercel.app/books"
    );

     if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching books</p>;

  return (
    <div>
      <h2>All Books</h2>
      <ul>
        {data?.map((book) => (
          <li key={book._id}>{book.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Books;