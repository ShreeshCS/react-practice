import { api_routes, languageIsoCode } from "../constants/app.constants";

export const getCountries = async () => {
	const route = api_routes.countries;
	const url = `${route}?languageIsoCode=${languageIsoCode}`;
	const response = await fetch(url);
	return response.json();
};
