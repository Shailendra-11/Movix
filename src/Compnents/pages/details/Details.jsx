import { useParams } from "react-router-dom"
import useFetch from "../../Hooks/useFetch"
import "./styles.scss"
import  DetailsBanner from "./detailsBanner/DetailsBanner"
import VideoSection from "./videosSection/VideosSection"
import Similar from "./carousels/Similar"
import Recommendation from "./carousels/Recommendation"
import Cast from "./cast/Cast"
const Details = () => {
  const { mediaType, id } = useParams();
  const { data, loading } = useFetch(`/${mediaType}/${id}/videos`);
  const { data: credits, loading: creditsLoading } = useFetch(
    `/${mediaType}/${id}/credits`
);
  return (
    <div>
            <DetailsBanner video={data?.results?.[0]} crew={credits?.crew} />
            <Cast data={credits?.cast} loading={creditsLoading} />
            <VideoSection data={data} loading={loading} />
            <Similar mediaType={mediaType} id={id} />
            <Recommendation mediaType={mediaType} id={id} />
        </div>
  )
}

export default Details
