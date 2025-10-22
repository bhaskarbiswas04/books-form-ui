import './App.css';
import AddNewBook from './components/AddNewBook';
import Books from "./components/Books"

function App() {
  return (
    <main>
      <Books />
      <hr />
      <AddNewBook />
    </main>
  );
}

export default App;
