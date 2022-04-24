const BASE_URL = "https://api.unsplash.com";
const CLIENT_ID =
	"client_id=8f9fbd10d8bb0a7e69dd531aea77d5a0b84152b806286ed7f83f896c1987413b";

export const GET_PHOTOS_API_URL = `${BASE_URL}/photos?${CLIENT_ID}&page=`;
export const SEARCH_API_URL = `${BASE_URL}/search/photos?${CLIENT_ID}&page=1&query=office`;
