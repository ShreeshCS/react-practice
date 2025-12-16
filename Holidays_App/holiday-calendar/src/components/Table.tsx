import { Holiday } from "../App";

type TableProps = {
	data: Holiday[];
};
const Table: React.FC<TableProps> = (props) => {
	// const { data } = props;
	const columns = [
		{
			id: 0,
			label: "Holiday",
		},
		{
			id: 1,
			label: "Date",
		},
		{
			id: 2,
			label: "Regional Scope",
		},
	];
	return (
		<div className="table-outer">
			<div className="table-header">
				{columns.map((column) => (
					<div key={column.id} className="table-header-cell">
						{column.label}
					</div>
				))}
			</div>
			<div className="table-rows-container"></div>
		</div>
	);
};

export default Table;
