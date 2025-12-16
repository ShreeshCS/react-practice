import { api_routes, languageIsoCode } from "../constants/app.constants";

export const getCountries = async () => {
	const route = api_routes.countries;
	const url = `${route}?languageIsoCode=${languageIsoCode}`;
	const response = await fetch(url);
	return response.json();
};

export const getHoldidaysByCountry = async (args: {
	countryIsoCode: string;
	validTo: string;
	validFrom: string;
}) => {
	const route = api_routes.holidaysByCountry;
	const url = `${route}?countryIsoCode=${args.countryIsoCode}&validFrom=${args.validFrom}&validTo=${args.validTo}&languageIsoCode=${languageIsoCode}`;
	const response = await fetch(url);
	return response.json();
};
