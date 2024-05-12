import Herobanner from "./Herobanner/Herobanner"
import Tranding from "./Tranding/Tranding"
import "./home.scss"
import Popular  from "./popular/Popular"
import TopRated from "./topRating/TopRated"
const Home = () => {
  return (
    <div>
       <Herobanner/> 
       <Tranding/>
       <Popular/>
        <TopRated />
    </div>
  )
}

export default Home
