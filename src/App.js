import { Header } from "./components/Header";
import { Container } from "./components/styles/Container.styled";
import { ThemeProvider } from "styled-components";
import { Bookstats } from "./components/Bookstats";
import { BookList } from "./components/BookList";
//import { BookWish } from "./components/BookWish";

const theme = {
  colors: {
    header: "#ebfbff",
    body: "#FFF",
    footer: "#528B8B",
  },
  mobile: "768px",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Header />
        <Container>
          <Bookstats />
          <BookList />
        </Container>
      </>
    </ThemeProvider>
  );
}

export default App;
