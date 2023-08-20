import React, { useState } from 'react';

const SearchBar: React.FC = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState<{ name: string; category: string; id: number }[]>([]);

    const productUrlMapping: { [name: string]: string } = {
        "Sweet Red": "/SweetRed",
        "Sauvignon": "/Sauvignon",
        "Merchandise Item": "/Shop",
        // Add more product mappings here
    };

    const toggleSearch = () => {
        setIsExpanded(prevState => !prevState);
    };

    const handleSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newSearchTerm = event.target.value;
        setSearchTerm(newSearchTerm);

        if (newSearchTerm.trim() === '') {
            setSearchResults([]);
        } else {
            const filteredResults = [
                { name: "Sweet Red", category: "wine", id: 1 },
                { name: "Sauvignon", category: "wine", id: 2 },
                { name: "Merchandise Item", category: "merchandise", id: 3 },
                // ... Add more products
            ].filter(result =>
                result.name.toLowerCase().includes(newSearchTerm.toLowerCase())
            );
            setSearchResults(filteredResults);
        }
    };

    const handleSearchSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        const selectedProduct = searchResults.find(
            product => product.name.toLowerCase() === searchTerm.toLowerCase()
        );

        if (selectedProduct) {
            const productPath = productUrlMapping[selectedProduct.name];
            if (productPath) {
                window.location.href = productPath;
            }
        }
    };

    return (
        <div className="flex items-center justify-end space-x-5 relative">
            <button
                type="button"
                className="p-2 -m-2 text-gray-900 transition-all duration-200 hover:text-gray-700"
                onClick={toggleSearch}
            >
                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </button>

            {isExpanded && (
                <div className="absolute right-0 mt-2 bg-white border border-gray-300 p-2 w-48">
                    <form onSubmit={handleSearchSubmit}>
                        <input
                            type="text"
                            className="w-full border border-gray-300 rounded px-2 py-1"
                            placeholder="Search products"
                            value={searchTerm}
                            onChange={handleSearchInput}
                        />
                    </form>
                    {searchTerm && (
                        <ul className="mt-2">
                            {searchResults.map((product, index) => (
                                <li key={index}>
                                    <a href={productUrlMapping[product.name]}>
                                        {product.name} ({product.category})
                                    </a>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            )}

            <span className="w-px h-6 bg-gray-200 lg:hidden" aria-hidden="true"></span>
        </div>
    );
};

export default SearchBar;
