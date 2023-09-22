import s from './MyName.module.css'
import img from '../../image/Abstract.png'
const MyName = () => {
  return (
    <div className={s.info}>
      <img src={img} alt="img" className={s.image}/>
      <div className={s.infoTitle}>
        <p className={s.title}>Привет, меня зовут Антоний </p>
        <p className={s.subtitle}>Я frontend developer</p>
      </div>
    </div>
  )
}
 
export default MyName