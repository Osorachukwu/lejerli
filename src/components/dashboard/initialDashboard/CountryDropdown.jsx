import React, { useEffect, useState } from "react";
import axios from "axios";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import earthIcon from "../../../assets/icons/earth-icon.svg";
import { ChevronDown } from "lucide-react";

const CountryDropdown = () => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [retryCount, setRetryCount] = useState(0);

  const MAX_RETRIES = 3;
  const RETRY_DELAY = 3000; // 3 seconds

  const fetchCountries = async (retry = 0) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.get("https://restcountries.com/v3.1/all");
      const data = response?.data;

      // Format the data for dropdown
      const formattedData = data.map((country) => ({
        name: country.name.common,
        flag: country.flags.png,
      }));

      setCountries(formattedData);
      setFilteredCountries(formattedData);
    } catch (err) {
      if (retry < MAX_RETRIES) {
        setTimeout(() => {
          setRetryCount((prev) => prev + 1);
          fetchCountries(retry + 1);
        }, RETRY_DELAY);
      } else {
        setError(err.message || "Something went wrong.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    const filtered = countries.filter((country) =>
      country.name.toLowerCase().includes(query)
    );
    setFilteredCountries(filtered);
  };

  const handleSelect = (country) => {
    setSelectedCountry(country);
  };

  return (
    <div>
      <p className="text-start font-medium">Country</p>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger className="focus:outline-none border rounded-lg w-full">
          <div className="flex justify-between items-center gap-2 px-1 py-2.5 rounded-lg">
            <div className="flex gap-2 items-center">
              {selectedCountry ? (
                <>
                  <img src={selectedCountry.flag} alt="" className="w-5 h-5" />
                  {selectedCountry.name}
                </>
              ) : (
                <>
                  <img src={earthIcon} alt="" />
                  Select a country
                </>
              )}
            </div>
            <ChevronDown size={16} />
          </div>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content className="bg-white shadow-lg px-3 py-2 rounded-lg space-y-2 w-60 max-h-64 overflow-y-auto">
          {isLoading ? (
            <div className="flex justify-center items-center h-20">
              <div className="loader" />
            </div>
          ) : error ? (
            <div className="text-center text-red-500">
              <p>Error: {error}</p>
              <p>Retrying... ({retryCount}/{MAX_RETRIES})</p>
            </div>
          ) : (
            <>
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
              {filteredCountries.map((country) => (
                <DropdownMenu.Item
                  key={country.name}
                  onClick={() => handleSelect(country)}
                  className="flex items-center gap-2 px-2 py-1 rounded-lg hover:bg-gray-100 cursor-pointer"
                >
                  <img src={country.flag} alt={country.name} className="w-5 h-5" />
                  {country.name}
                </DropdownMenu.Item>
              ))}
            </>
          )}
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </div>
  );
};

export default CountryDropdown;

/* CSS for loader */
<style jsx>{`
  .loader {
    border: 4px solid #f3f3f3;
    border-top: 4px solid #3498db;
    border-radius: 50%;
    width: 24px;
    height: 24px;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`}</style>