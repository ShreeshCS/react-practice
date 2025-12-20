import React, { useEffect, useState } from "react";
import Dropdown from "./components/Dropdown";
import { getCountries, getHoldidaysByCountry } from "./api/holidays.api";
import { formatDateMMDDYYYY } from "./utility/app.util";
import Table from "./components/Table";
import "../src/styles/App.scss";
import { Country, Holiday } from "./types/types";

function App() {
	const [countries, setCountries] = useState<Country[]>([]);
	const [selectedCountryCode, setSelectedCountryCode] = useState<string>();
	const [holidays, setHolidays] = useState<Holiday[]>([]);
	useEffect(() => {
		const fetchCountries = async () => {
			const countries: Country[] = await getCountries();

			setCountries(countries);
		};
		fetchCountries();
	}, []);

	useEffect(() => {
		const fetchHolidays = async () => {
			const currentDate = new Date();
			const validFrom = formatDateMMDDYYYY(currentDate);

			const nextYearDate = new Date(currentDate);
			nextYearDate.setFullYear(currentDate.getFullYear() + 1);
			const validTo = formatDateMMDDYYYY(nextYearDate);

			console.log(selectedCountryCode);
			const countryIsoCode = selectedCountryCode
				? selectedCountryCode
				: countries.find((country: Country) => country.isoCode === "NL")
						?.isoCode || "NL";
			const holidays = await getHoldidaysByCountry({
				countryIsoCode,
				validFrom,
				validTo,
			});

			setHolidays(holidays);
			console.log(holidays);
		};
		fetchHolidays();
	}, [selectedCountryCode, countries]);
	return (
		<div className="App">
			<Dropdown
				countries={countries}
				value={selectedCountryCode}
				onChange={(e: any) => setSelectedCountryCode(e.target.value)}
			/>

			{/* Holiday List */}
			<Table data={holidays} />
		</div>
	);
}

export default App;
