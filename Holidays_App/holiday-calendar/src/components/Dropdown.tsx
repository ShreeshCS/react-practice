import { Country } from "../App";

type DropdownProps = {
	countries: Country[];
	value: string | null;
	onChange: React.ChangeEventHandler<HTMLSelectElement>;
};
const Dropdown: React.FC<DropdownProps> = (props) => {
	const { countries, value, onChange } = props;
	return (
		<div>
			<select
				aria-label="country dropdown"
				className="country-dropdown"
				value={value ?? undefined}
				onChange={onChange}
			>
				{countries.map((country: Country, idx) => (
					<option key={idx} value={country.name[0].text}>
						{country.name[0].text}
					</option>
				))}
			</select>
		</div>
	);
};

export default Dropdown;
