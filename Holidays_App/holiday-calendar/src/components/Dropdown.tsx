import { Country } from "../App";

type DropdownProps = {
	countries: Country[];
	value: Country | undefined;
	onChange: React.ChangeEventHandler<HTMLSelectElement>;
};
const Dropdown: React.FC<DropdownProps> = (props) => {
	const { countries, value, onChange } = props;
	return (
		<div>
			<select
				aria-label="country dropdown"
				className="country-dropdown"
				value={value?.isoCode}
				onChange={onChange}
			>
				{countries.map((country: Country, idx) => (
					<option key={idx} value={country.isoCode}>
						{country.name[0].text}
					</option>
				))}
			</select>
		</div>
	);
};

export default Dropdown;
