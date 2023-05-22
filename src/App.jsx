import './App.css';
import Header from './components/Header';
// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import { useState, useEffect, createContext } from "react";

export const DataContext = createContext();

function App() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        // .then(data => console.log(data))
        .then(data => setProducts(data))
    }, [])

    return (
        <>
            {/* <Header backgroundColor='#0095A0' /> */}
            <Header />
            <DataContext.Provider value={products}>
                <Home />
            </DataContext.Provider>
        </>
    )
}

export default App;
