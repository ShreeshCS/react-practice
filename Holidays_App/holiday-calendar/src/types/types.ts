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
