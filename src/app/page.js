'use client'
 
import { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import axios from 'axios';

export default function Home() {
	const [q, setq] = useState(null);
	const [movieInfo, setMovieInfo] = useState(null);
	/**
	 *
	 *
	 * Fetch Movie Info from the IMDB
	 */
	const fetchMovieInfo = async () => {
		try {
			const res = await axios.get(`https://imdb8.p.rapidapi.com/title/find`, {
				params: {q},
				headers: { 
					'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPIDAPI_KEY
				  }
				
			});
			const {data} = res;
			const {results} = data;
			setMovieInfo(results[0]);
		} catch (err) {
			console.log(err);
		}
	};
	return (
		<div className="flex flex-col items-center relative min-h-screen bg-bc ">
			<h2 className="font-raleway font-bold text-6xl text-primary pt-20 pb-6 md:text-3xl">
				Movie <span className="text-secondary">Details</span> App
			</h2>
			<h3 className="text-lightGrey text-2xl font-raleway font-bold uppercase tracking-wide mb-12 md:text-base md:px-4 md:text-center">
				Get info about any movie
			</h3>
			<div className="flex flex-col justify-between items-center w-full md:items-center">
				<div className="flex w-full justify-center md:flex-col md:w-5/6 ">
					<input
						type="text"
						className="border-none outline-none w-2/5 bg-primary px-4 py-2 rounded-lg font-raleway md:w-full"
						placeholder="Search for any movie..."
						onChange={e => setq(e.target.value)}
					/>
					<button
						className="outline-none border border-danger font-bold font-raleway ml-4 px-12 py-2 bg-danger text-primary transition duration-300 hover:bg-bc hover:text-black md:ml-0 md:mt-4 rounded-lg"
						onClick={fetchMovieInfo}
					>
						Search
					</button>
				</div>
				{movieInfo && (
					<div className="flex mt-12 w-3/6 h-4/5 border border-primary md:flex-col md:w-4/6 md:h-full md:mb-12 rounded-lg">
						<div className=' max-lg:w-80 max-lg:h-80 max-xl:w-96 max-xl:h-96'>

						<Image
							src={movieInfo.image.url}
							width={1200}
							height={675}
							alt={movieInfo.title}
							className='rounded-lg'
						/>
						</div>
						<div className="flex flex-col flex-nowrap justify-center m-14 md:mt-6">
							<h2 className="text-primary text-xl text-raleway font-bold tracking-wider md:text-base">
								<span className="text-secondary uppercase">
									Title:{' '}
								</span>{' '}
								{movieInfo.title}
							</h2>
							<h2 className="text-primary text-xl text-raleway font-bold mt-8 tracking-wider md:text-base md:mt-6">
								<span className="text-secondary uppercase">
									Year:{' '}
								</span>{' '}
								{movieInfo.year}
							</h2>
							<h2 className="text-primary text-xl text-raleway font-bold mt-8 tracking-wider md:text-base md:mt-6">
								<span className="text-secondary uppercase">
									Type:{' '}
								</span>{' '}
								{movieInfo.titleType.toUpperCase()}
							</h2>
							<h2 className="text-primary text-xl text-raleway font-bold mt-8 tracking-wider md:text-base md:mt-6">
								<span className="text-secondary uppercase">
									Number of Episodes:{' '}
								</span>{' '}
								{movieInfo.numberOfEpisodes}
							</h2>
							<h2 className="text-primary text-xl text-raleway font-bold mt-8 tracking-wider md:text-base md:mt-6">
								<span className="text-secondary uppercase">
									Run Time:{' '}
								</span>{' '}
								{movieInfo.runningTimeInMinutes}
							</h2>
							{/* <Link href={`https://www.imdb.com${movieInfo.id}`}>
								<a>
									<button className="outline-none border border-danger font-bold font-raleway mt-8 px-12 py-2 rounded-sm bg-danger text-primary transition duration-300 hover:bg-bc hover:text-black md:ml-0 md:my-4">
										Visit on IMDB
									</button>
								</a>
							</Link> */}
						</div>
					</div>
				)}
			</div>
		</div>
	);
}