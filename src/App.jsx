import Header from "./Header.jsx";
import Card from "./Card.jsx";
import data from "./data.js";

function App() {
    let count = 0
    const cards = data.map((item) => {
        count ++
        return <Card
         key={item.id} 
         isLast={count === data.length}
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
