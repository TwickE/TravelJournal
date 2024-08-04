import Header from "./Header.jsx";
import Card from "./Card.jsx";
import data from "./data.js";

function App() {
    const cards = data.map((item) => {
        return <Card key={item.id} {...item} />;
    });

    return (
      <>
        <Header />
       {cards}
      </>
    );
}

export default App;
