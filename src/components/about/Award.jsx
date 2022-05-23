import React from 'react'
import "./award.css"

const Award = () => {
  return <div className="award__container d-flex align-items-center flex-wrap justify-content-between">

    <div className="award__item">
        <AwardItem 
            year='2022' 
            title='Best FrontEnd Developer' 
            text='coming soon'
        />
    </div>
    <div className="award__item">
        <AwardItem 
            year='2022' 
            title='Best FrontEnd Developer' 
            text='coming soon'
        />
    </div>
    <div className="award__item">
        <AwardItem 
            year='2022' 
            title='Best FrontEnd Developer' 
            text='coming soon'
        />
    </div>
    <div className="award__item">
        <AwardItem 
            year='2022' 
            title='Best FrontEnd Developer' 
            text='coming soon'
        />
    </div>
      
  </div>
}

const AwardItem = ({year, title, text}) =>{
   return <div className="single__award">
            <div className="award__year">{year}</div>
                <h6 className="award__title">{title} - <br />
                <span>{text}</span>
            </h6>
           </div>
}

export default Award
