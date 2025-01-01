import React, { useEffect, useState } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
// import { ChevronDown } from "react-icons/fi";
import { ChevronDown } from "lucide-react";

const CurrencyDropdown = () => {
  const [currencies, setCurrencies] = useState([]);
  const [filteredCurrencies, setFilteredCurrencies] = useState([]);
  const [selectedCurrency, setSelectedCurrency] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCurrencies = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();

        // Extract unique currencies
        const currencySet = new Set();
        const formattedCurrencies = [];
        data.forEach((country) => {
          if (country.currencies) {
            Object.entries(country.currencies).forEach(([code, details]) => {
              if (!currencySet.has(code)) {
                currencySet.add(code);
                formattedCurrencies.push({
                  code,
                  name: details.name,
                  symbol: details.symbol || "",
                });
              }
            });
          }
        });

        setCurrencies(formattedCurrencies);
        setFilteredCurrencies(formattedCurrencies);
      } catch (err) {
        setError(err.message || "Something went wrong.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchCurrencies();
  }, []);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    const filtered = currencies.filter(
      (currency) =>
        currency.name.toLowerCase().includes(query) ||
        currency.code.toLowerCase().includes(query)
    );
    setFilteredCurrencies(filtered);
  };

  const handleSelect = (currency) => {
    setSelectedCurrency(currency);
  };

  if (isLoading) {
    return <p>Loading currencies...</p>;
  }

  if (error) {
    return <p className="text-red-500">Error: {error}</p>;
  }

  return (
    <div>
      <p className="text-start font-medium">Currency</p>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger className="focus:outline-none border rounded-lg w-full">
          <div className="flex justify-between items-center gap-2 px-1 py-2.5 rounded-lg">
            <div className="flex gap-2 items-center">
              {selectedCurrency ? (
                <>
                  <span>{selectedCurrency.symbol}</span>
                  {selectedCurrency.name} ({selectedCurrency.code})
                </>
              ) : (
                <>Select a currency</>
              )}
            </div>
            <ChevronDown size={16} />
          </div>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content className="bg-white shadow-lg px-3 py-2 rounded-lg space-y-2 w-60 max-h-64 overflow-y-auto">
          <div className="px-2 relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              placeholder="Search"
              value={searchQuery}
              onChange={handleSearch}
              className="block w-full p-2.5 ps-10 text-sm border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 outline-none"
            />
          </div>
          {filteredCurrencies.map((currency) => (
            <DropdownMenu.Item
              key={currency.code}
              onClick={() => handleSelect(currency)}
              className="flex items-center gap-2 px-2 py-1 rounded-lg hover:bg-gray-100 cursor-pointer"
            >
              <span>{currency.symbol}</span>
              {currency.name} ({currency.code})
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </div>
  );
};

export default CurrencyDropdown;
