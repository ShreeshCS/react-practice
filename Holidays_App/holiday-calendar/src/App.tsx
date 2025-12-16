import React, { useEffect, useState } from "react";
import Dropdown from "./components/Dropdown";
import { getCountries, getHoldidaysByCountry } from "./api/holidays.api";
import { formatDateMMDDYYYY } from "./utility/app.util";
import Table from "./components/Table";

export interface Country {
	isoCode: string;
	name: {
		language: string;
		text: string;
	}[];
	officialLanguages: string[];
}

export interface Holiday {
	id: string;
	name: {
		language: string;
		text: string;
	}[];
	startDate: string;
	endDate: string;
	type: string;
	regionalScope: string;
}

function App() {
	const [countries, setCountries] = useState<Country[]>([]);
	const [selectedCountry, setSelectedCountry] = useState<Country>();
	const [holidays, setHolidays] = useState<Holiday[]>([]);
	useEffect(() => {
		const fetchCountries = async () => {
			const countries = await getCountries();

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

			const countryIsoCode = selectedCountry
				? selectedCountry.isoCode
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
	}, [selectedCountry, countries]);
	return (
		<div className="App">
			<Dropdown
				countries={countries}
				value={selectedCountry}
				onChange={(e: any) => setSelectedCountry(e.target.value)}
			/>

			{/* Holiday List */}
			<Table data={holidays} />
		</div>
	);
}

export default App;
