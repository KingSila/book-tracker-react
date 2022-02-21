import "./App.css";
import { Header } from "./components/Header";
import { Bookstats } from "./components/Bookstats";
import { BookList } from "./components/BookList";
import { BookWish } from "./components/BookWish";

function App() {
  return (
      <Header />
      <div className="container">
        <Bookstats />
        <BookList />
        <BookWish />
        
      </div>
    
  );
}

export default App;