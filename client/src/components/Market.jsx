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
		<div className='container mt-4'>
			<h2>Market</h2>
			{isLoading && <h4>Loading...</h4>}
			{data && (
				<table className='table align-middle'>
					<thead>
						<tr>
							<th scope='col'>S.No</th>
							<th scope='col'>Name</th>
							<th scope='col'>Price</th>
							<th scope='col'>Barcode</th>
							<th scope='col'>Options</th>
						</tr>
					</thead>
					<tbody>
						{data.map((item, idx) => (
							<tr key={item.id}>
								<th scope='row'>{idx + 1}</th>
								<td>{item.name}</td>
								<td>{item.price}</td>
								<td>{item.barcode}</td>
								<td className='d-flex gap-2'>
									<button type='button' className='btn btn-info'>
										More Info
									</button>
									<button type='button' className='btn btn-success'>
										Purchase Item
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			)}
		</div>
	);
};

export default Market;
