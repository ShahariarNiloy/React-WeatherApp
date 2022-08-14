import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { geoApiOptions, GEO_API_URL } from "../api";

const Search = ({ onSearchChange }: any) => {
  const [search, setSearch] = useState<any>(null);
  const handleChange = (searchData: any) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };
  const loadOptions: any = async (inputValue: any) => {
    return await fetch(
      `${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
      geoApiOptions
    )
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response?.data?.map((city: any) => {
            return {
              value: `${city?.latitude} ${city?.longitude}`,
              label: `${city?.name}, ${city?.countryCode}`,
            };
          }),
        };
      })
      .catch((err) => console.error(err));
  };
  return (
    <AsyncPaginate
      placeholder="Search for city"
      debounceTimeout={600}
      value={search}
      onChange={handleChange}
      loadOptions={loadOptions}
      className="searchBar"
    />
  );
};
export default Search;
