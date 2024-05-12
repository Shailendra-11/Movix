import { useState } from 'react'
import './styles.scss'

const Switch = ({data , onTabChange}) => {
    const [selectedTab , setSelectTab] =useState();
    const [left, setleft] = useState(0);

    const activeTab = (tab , index) =>{
        setleft(index*100)
        setTimeout(()=>{
           setSelectTab(index)
        },300)
        onTabChange(tab , index)
    }
  return (
    <div className="switchingTabs">
    <div className="tabItems">
        {data.map((tab, index) => (
            <span
                key={index}
                className={`tabItem ${
                    selectedTab === index ? "active" : ""
                }`}
                onClick={() => activeTab(tab, index)}
            >
                {tab}
            </span>
        ))}
        <span className="movingBg" style={{ left }} />
    </div>
</div>
  )
}

export default Switch
