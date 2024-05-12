import Carousel from "../../../carousel/Carousel"
import ContentWrapper from "../../../contentWrapper/ContentWrapper";
import Switch from "../../../switch/Switch";
import useFetch from "../../../Hooks/useFetch"
import { useState } from "react";


const Popular = () => {
  const [endpoint, setEndpoint] = useState("movie");

  const { data, loading } = useFetch(`/${endpoint}/popular`);

  const onTabChange = (tab) => {
      setEndpoint(tab === "Movies" ? "movie" : "tv");
  };
  return (
    <div className="carouselSection">
            <ContentWrapper>
                <span className="carouselTitle">What's Popular</span>
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

export default Popular
