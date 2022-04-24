export const getPhotos = async (api, page, setData, setLoading) => {
	const response = await fetch(`${api}${page}`);
	const photos = await response.json();
	setData(photos);
	setLoading(false);
};

export const searchPhotos = async (api, query, setData, setLoading) => {
	const response = await fetch(`${api}&query=${query}`);
	const photos = await response.json();
	setData(photos.results);
	setLoading(false);
};
