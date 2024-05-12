import { useState } from "react"
import ContentWrapper from "../../../contentWrapper/ContentWrapper"
import Switch from "../../../switch/Switch"
import useFetch  from "../.././../Hooks/useFetch"
import Carousel from "../../../carousel/Carousel"
const Tranding = () => {
const [endpoint, setEndpoint] = useState("day")
const { data ,loading } =useFetch(`/trending/movie/${endpoint}`);

// console.log("tranding" , data);
const onTabChange = (tab) =>{
    setEndpoint(tab === "Day" ? "day" : "week");
 };
  return (
    <div className="carouselSection">
      <ContentWrapper>
         <span className="carouselTitle">Trending</span>
         <Switch data={["Day" ,"Week" ]} onTabChange={onTabChange}/>
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading}/>
    </div>
  )
}

export default Tranding
