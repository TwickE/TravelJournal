import Header from "./Header.jsx";
import Card from "./Card.jsx";
import data from "./data.js";

function App() {
    const cards = data.map((item) => {
        return <Card
         key={item.id} 
         isLast={item.id === data.length}
         {...item} 
         />;
    });

    return (
        <>
            <Header />
            <div className="cards-container">
              {cards}
            </div>
        </>
    );
}

export default App;
