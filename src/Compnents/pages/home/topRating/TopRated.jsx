import { useState } from "react"
import Carousel from "../../../carousel/Carousel";
import ContentWrapper from "../../../contentWrapper/ContentWrapper";
import Switch from "../../../switch/Switch";
import useFetch from "../../../Hooks/useFetch";
const TopRated = () => {
  const [endpoint, setEndpoint] = useState("movie");

    const { data, loading } = useFetch(`/${endpoint}/top_rated`);

    const onTabChange = (tab) => {
        setEndpoint(tab === "Movies" ? "movie" : "tv");
    };
  return (
    <div className="carouselSection">
    <ContentWrapper>
        <span className="carouselTitle">Top Rated</span>
        <Switch
            data={["Movies", "TV Shows"]}
            onTabChange={onTabChange}
        />
    </ContentWrapper>
    <Carousel
        data={data?.results}
        loading={loading}
        endpoint={endpoint}
    />
</div>
  )
}

export default TopRated;
