import "../styles/Table.scss";
import { Holiday } from "../types/types";
type TableProps = {
	data: Holiday[];
};
const Table: React.FC<TableProps> = (props) => {
	const { data } = props;
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
			<table>
				<thead className="table-header">
					<tr>
						{columns.map((column) => (
							<th key={column.id} className="table-header-cell">
								{column.label}
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{data.map((row, idx) => (
						<tr key={idx} className="table-row">
							<td className="table-row-cell">
								{row.name[0].text}
							</td>
							<td className="table-row-cell">{row.startDate}</td>
							<td className="table-row-cell">
								{row.regionalScope}
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Table;
