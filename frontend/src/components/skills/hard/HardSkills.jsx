import React from 'react'
import s from './HardSkills.module.css'

const HardSkills = ({skill}) => {
  return (
    <div className={s.skill}>{skill}</div>
  )
}

export default HardSkills