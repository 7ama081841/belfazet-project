import { Container } from "react-bootstrap";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Category from "./components/Category";
import Cards from "./components/Cards";
import { useState } from "react";
import { data } from "./data";

function App() {
    const [products, setproducts] = useState(data);

    const allCat = ["tout", ...new Set(data.map((i) => i.category))];

    

    // filter by category
    const filterByCategory = (cat) => {
        if (cat === "tout") {
            setproducts(data);
        } else {
            const newFiter = data.filter((item) => item.category === cat);
            setproducts(newFiter);
        }
    };

    // filter by searsh
    const filterBySearsh = (word) => {
        if (word !== "") {
            const result  = data.filter((item) => item.name == word);
            setproducts(result);
        } 
    };

    return (
        <div className="App">
            <NavBar filterBySearsh={filterBySearsh} />
            <Container>
                <Header />
                <Category
                    filterByCategory={filterByCategory}
                    all={setproducts}
                    data={data}
                    allCat={allCat}
                />
                <Cards products={products} />
            </Container>
        </div>
    );
}

export default App;
