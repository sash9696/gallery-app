import React from "react";
import useFetchPhotos from "./utils/CustomHooks/useFetchPhotos";
import Loading from "./components/Loading/Loading";
import Gallery from "./components/Gallery/Gallery";
function App() {
	const { loading, photos, setPhotos, page, setPage, setQuery } =
		useFetchPhotos();

	return (
		<div className="app">
			{loading ? (
				<Loading />
			) : (
				<Gallery
					loading={loading}
					photos={photos}
					setPhotos={setPhotos}
					page={page}
					setPage={setPage}
					setQuery={setQuery}
				/>
			)}
		</div>
	);
}

export default App;
