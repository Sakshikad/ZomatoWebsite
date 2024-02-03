import React from 'react'

const TabOptions = ({activeTab,setActiveTab}) => {
  return (
    <div>
     <button onClick={()=>setActiveTab('Nightlife')}>On click</button>
    </div>
  )
}

export default TabOptions
