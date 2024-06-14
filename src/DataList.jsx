import React, { useState, useEffect } from 'react';

function App() {
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((response) => response.json())
            .then((data) => {
                setProducts(data);
                setFilteredProducts(data);
            });
    }, []);

    const handleSearch = () => {
        const filtered = products.filter(product =>
            product.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredProducts(filtered);
    };

    return (
        <div>
            <h1>Product List</h1>
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by title"
            />
            <button onClick={handleSearch}>Search</button>
            <div>
                {filteredProducts.map((product) => (
                    <div key={product.id}>
                        <h2>{product.title}</h2>
                        <p>${product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;
