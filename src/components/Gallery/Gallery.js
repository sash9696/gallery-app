import React, { useState } from "react";
import "./Gallery.css";
import Image from "../Image/Image";
import { getPhotos, searchPhotos } from "../../utils/UtilityFunctions";
import { GET_PHOTOS_API_URL, SEARCH_API_URL } from "../../utils/constants";

function Gallery({
	loading,
	setLoading,
	photos,
	setPhotos,
	page,
	setPage,
	setQuery,
}) {
	const [sortByLikePhotos, setSortByLikePhotos] = useState([]);

	const nextPage = () => {
		setPage((oldPage) => {
			let nextPage = oldPage + 1;
			if (nextPage > photos.length - 1) {
				nextPage = 0;
			}
			return nextPage;
		});
	};

	const prevPage = () => {
		setPage((oldPage) => {
			let prevPage = oldPage - 1;
			if (prevPage < 0) {
				prevPage = photos.length - 1;
			}
			return prevPage;
		});
	};

	const handlePage = (index) => {
		setPage(index);
	};

	const handleChange = (e) => {
		if (e.target.value.length > 0) {
			setQuery(e.target.value);
			callSearchPhotos(e.target.value);
			return;
		}
		getPhotos(GET_PHOTOS_API_URL, 1, setPhotos, setLoading);
	};

	const callSearchPhotos = (query) => {
		searchPhotos(SEARCH_API_URL, query, setPhotos, setLoading);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	const sortAscending = () => {
		let newPhotos = [...photos];
		const sortedPhotos = newPhotos.sort((a, b) => {
			return b.likes - a.likes;
		});

		setSortByLikePhotos(sortedPhotos);
	};

	const handleFilterChange = (e) => {
		if (e.target.value === "2") {
			if (sortByLikePhotos.length > 0) {
				setSortByLikePhotos([]);
			}
		}
		if (e.target.value === "3") {
			sortAscending();
		}
	};

	return (
		<div className="gallery">
			<h1>Gallery</h1>
			<div className="underline"></div>
			<div className="gallery_filter_container">
				<form
					className="gallery_search"
					onSubmit={(e) => handleSubmit(e)}>
					<h3>Search</h3>
					<input
						type="text"
						placeholder="Search Image"
						onChange={(e) => handleChange(e)}
					/>
				</form>
				<div>
					<select onChange={(e) => handleFilterChange(e)}>
						<option value="1" selected disabled>
							Sort by
						</option>
						<option value="2">Default</option>
						<option value="3">Most Liked</option>
					</select>
				</div>
			</div>

			<div className="gallery_container">
				{!sortByLikePhotos.length > 0
					? photos?.map((photo) => (
							<Image
								key={photo.id}
								id={photo?.id}
								image={photo?.urls?.full}
							/>
					  ))
					: sortByLikePhotos?.map((photo) => (
							<Image
								key={photo.id}
								id={photo?.id}
								image={photo?.urls?.full}
							/>
					  ))}
			</div>
			{!loading && (
				<div className="btn-container">
					<button className="prev-btn" onClick={prevPage}>
						prev
					</button>
					{photos?.map((_, index) => {
						return (
							<button
								key={index}
								className={`page-btn ${
									index === page ? "active-btn" : null
								}`}
								onClick={() => handlePage(index)}>
								{index + 1}
							</button>
						);
					})}
					<button className="next-btn" onClick={nextPage}>
						next
					</button>
				</div>
			)}
		</div>
	);
}

export default Gallery;
