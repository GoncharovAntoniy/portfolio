import React from 'react'
import s from './SoftSkills.module.css'

const SoftSkills = ({skill}) => {
  return (
    <div className={s.skill}>{skill}</div>
  )
}

export default SoftSkills