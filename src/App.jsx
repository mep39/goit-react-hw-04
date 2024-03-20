import toast, { Toaster } from "react-hot-toast";
import { useState, useEffect } from "react";
import ImageGallery from "../src/components/ImageGallery/ImageGallery";
import SearchBar from "../src/components/SearchBar/SearchBar";
import Loader from "../src/components/Loader/Loader";
import ErrorMessage from "../src/components/ErrorMessage/ErrorMessage";
import ImageModal from "../src/components/ImageModal/ImageModal";
import { fetchPhotos } from "./utils/images-api";
import LoadMoreBtn from "../src/components/LoadMoreBtn/LoadMoreBtn";
import "./App.css";

export default function App() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState("");
  const [totalPages, setTotalPages] = useState(null);

  useEffect(() => {
    async function getData() {
      if (query === "") {
        return;
      }

      try {
        setLoading(true);
        setError(false);
        const data = await fetchPhotos(query, page);
        setPhotos((prevPhotos) => {
          return [...prevPhotos, ...data[0]];
        });

        setTotalPages(data[1]);

        if (data[0].length === 0) {
          toast.error("Unfortunately, your search returned no results");
        }
      } catch (error) {
        setError(true);
        toast.error("WARNING");
      } finally {
        setLoading(false);
      }
    }

    getData();
  }, [query, page]);

  const handleSearch = (search) => {
    setQuery(search);
    setPage(1);
    setPhotos([]);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  function closeModal() {
    setModalIsOpen(false);
  }

  const handleImgClick = (imageUrl) => {
    setSelectedImg(imageUrl);
    setModalIsOpen(true);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {error && <ErrorMessage />}
      {photos.length > 0 && (
        <ImageGallery items={photos} onImageClick={handleImgClick} />
      )}
      {photos.length > 0 && !loading && totalPages && totalPages !== page && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
      {loading && <Loader />}
      <ImageModal
        onRequestClose={closeModal}
        isOpen={modalIsOpen}
        imageUrl={selectedImg}
      />

      <Toaster />
    </div>
  );
}
