import { useEffect } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { fetchDataFromApi } from "./Compnents/Api"
import { useSelector, useDispatch } from "react-redux";
import {getApiConfiguration, getGenres } from  "./Compnents/Store/homeslice"
import Header from "./Compnents/Header/Header";
import Footer from "./Compnents/Footer/Footer";
import Home from "./Compnents/pages/home/Home";
import Details from "./Compnents/pages/details/Details";
import SearchResult from "./Compnents/pages/searchResult/SearchResult";
import Explore from "./Compnents/pages/explore/Explore";
import PagesNotFound from "./Compnents/pages/404/PagesNotFound"




const App = () => {
  const dispatch = useDispatch();
  const { url } = useSelector((state) => state.home)
  // console.log(url);


  useEffect(() => {
    fetchApiConfig();
    genresCall();
  }, [])

  const fetchApiConfig = () => {
    fetchDataFromApi("/configuration").then((res) => {
      // console.log(res);

      const url = {
        backdrop: res.images.secure_base_url + "original",
        poster: res.images.secure_base_url + "original",
        profile: res.images.secure_base_url + "original",
      };

      dispatch(getApiConfiguration(url));
    });
  };


  const genresCall = async () => {
    let promises = [];
    let endPoints = ["tv", "movie"];
    let allGenres = {};

    endPoints.forEach((url) => {
        promises.push(fetchDataFromApi(`/genre/${url}/list`));
    });

    const data = await Promise.all(promises);
    // console.log(data);
    data.map(({genres}) => {
        return genres.map((item) => (allGenres[item.id] = item));
    });
      // console.log(allGenres);
    dispatch(getGenres(allGenres));
};



  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:mediaType/:id" element={<Details />} />
        <Route path="/search/:query" element={<SearchResult />} />
        <Route path="/explore/:mediaType" element={<Explore />} />
        <Route path="*" element={<PagesNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
