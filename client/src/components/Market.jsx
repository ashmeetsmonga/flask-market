import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

const Market = () => {
	const { data, isLoading, isError } = useQuery("market", async () => {
		const { data } = await axios.get("http://127.0.0.1:5000/market");
		return data;
	});

	if (data) {
		console.log(data);
	}

	return (
		<div className='container'>
			<h2>Market</h2>
			{isLoading && <h4>Loading...</h4>}
			{data && (
				<table className='table'>
					<thead>
						<tr>
							<th scope='col'>S.No</th>
							<th scope='col'>Name</th>
							<th scope='col'>Price</th>
							<th scope='col'>Barcode</th>
						</tr>
					</thead>
					<tbody>
						{data.map((item, idx) => (
							<tr key={item.id}>
								<th scope='row'>{idx + 1}</th>
								<td>{item.name}</td>
								<td>{item.price}</td>
								<td>{item.barcode}</td>
							</tr>
						))}
					</tbody>
				</table>
			)}
		</div>
	);
};

export default Market;
