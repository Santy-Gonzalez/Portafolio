import React from 'react'
import "./skills.css"

const frontendSkills = [
    {
        title: 'HTML5',
        width: '80%',
        percentage: '80%'
    },
    {
        title: 'CSS3',
        width: '70%',
        percentage: '70%'
    },
    {
        title: 'JavaScript',
        width: '60%',
        percentage: '60%'
    },
    {
        title: 'React.Js',
        width: '65%',
        percentage: '65%'
    },
    {
        title: 'Node.Js',
        width: '50%',
        percentage: '50%'
    }
]

const backendSkills = [
    {
        title: 'Bootstrap / Reactstrap',
        width: '80%',
        percentage: '80%'
    },
    {
        title: 'Scss',
        width: '67%',
        percentage: '67%'
    },
    {
        title: 'Git & Github',
        width: '85%',
        percentage: '85%'
    },
    {
        title: 'POO',
        width: '40%',
        percentage: '40%'
    },
    {
        title: 'Balsamiq',
        width: '70%',
        percentage: '70%'
    }
]

const Skills = () => {
  return( 
    <div className="skills__wrapper d-flex gap-5">
        <div className="frontend__skills w-50">
            {
                frontendSkills.map((item,index)=>(
                    <SkillItem 
                        key={index} 
                        title={item.title} 
                        percentage={item.percentage}/>
                ))
            }
        </div>

        <div className="backend__skills w-50">
            {
                backendSkills.map((item,index) => (
                    <SkillItem 
                    key={index} 
                    title={item.title} 
                    percentage={item.percentage}/>
                ))
            }
        </div>
    </div>
  );
};

const SkillItem = ({title, percentage}) => {
   return <div className="skill__data mb-3">
        <div className="skill__title d-flex align-items-center justify-content-between">
            <h6>{title}</h6>
            <span>{percentage}</span>
        </div>
        <div className="skill__bar">
            <span className="skill__bar-percentage" style={{width: `${percentage}`}}></span>
        </div>
    </div>
}

export default Skills
