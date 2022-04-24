import { useEffect, useState } from "react";
import { getPhotos } from "../UtilityFunctions";
import { GET_PHOTOS_API_URL } from "../constants";

const useFetchPhotos = () => {
	const [photos, setPhotos] = useState([]);
	const [loading, setLoading] = useState(true);
	const [page, setPage] = useState(0);
	const [query, setQuery] = useState("");

	useEffect(() => {
		getPhotos(GET_PHOTOS_API_URL, page, setPhotos, setLoading);
	}, [loading, page]);

	return {
		loading,
		setLoading,
		photos,
		setPhotos,
		page,
		setPage,
		query,
		setQuery,
	};
};

export default useFetchPhotos;
