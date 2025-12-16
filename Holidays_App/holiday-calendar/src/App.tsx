import React, { useEffect, useState } from "react";
import Dropdown from "./components/Dropdown";
import { getCountries } from "./api/holidays.api";

export interface Country {
	isoCode: string;
	name: {
		language: string;
		text: string;
	}[];
	officialLanguages: string[];
}
function App() {
	const [countries, setCountries] = useState([]);
	const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
	useEffect(() => {
		const fetchHolidays = async () => {
			const countries = await getCountries();

			setCountries(countries);
		};
		fetchHolidays();
	}, []);

	useEffect(() => {
		// https://openholidaysapi.org/PublicHolidays?countryIsoCode=DE&validFrom=2023-01-01&validTo=2023-12-31&languageIsoCode=DE&subdivisionCode=DE-BE
	}, [selectedCountry]);
	return (
		<div className="App">
			<Dropdown
				countries={countries}
				value={selectedCountry}
				onChange={(e: any) => setSelectedCountry(e.target.value)}
			/>

			{/* Holiday List */}
			<div>
				<ul></ul>
			</div>
		</div>
	);
}

export default App;
