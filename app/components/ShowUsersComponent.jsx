import React from 'react'
import { useFetcher } from '@remix-run/react'
import { useEffect, useState } from 'react'


function ShowUsersComponent() {

	const fetcher = useFetcher();
	const [fetcherData, setFetcherData] = useState(null);

	useEffect(() => {
		// Trigger the fetch request

		fetcher.load("/send-user");

	}, []);

	if (fetcher.state = "idle" && fetcher.data?.error) {
		console.log("Error in fetcher data");
		return (<div>Error : {fetcher.data?.error?.message}</div>)
	}

	useEffect(() => {
		if (fetcher.data) {
			setFetcherData(fetcher.data);
			console.log("fetherData", fetcherData);
		}
	}, [fetcher.data]);

	return (
		<div>
			{
				fetcher.state === "loading" && <p>Loading...</p>
			}

			{
				fetcher.data && (
					<div>
						<h1>Fetched Data:</h1>
						<p>{fetcher.data.message}</p>
						<p>{fetcher.data.data?.fullName}</p>
						<p>{fetcher.data.data?.age}</p>
					</div>
				)
			}


		</div>
	)
}

export default ShowUsersComponent