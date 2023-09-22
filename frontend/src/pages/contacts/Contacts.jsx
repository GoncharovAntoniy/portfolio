import { useState } from 'react'
import s from './Contacts.module.css'

const Contacts = () => {

    const [valueOne, setValueOne] = useState('')
    const [valueTwo, setValueTwo] = useState('')
    const [valueThree, setValueThree] = useState('')

    function formHandler(event) {
        event.preventDefault()
    }

  return (
    <div className={s.container}>
        <form onSubmit={formHandler} className={s.form}>
            <h3 className={s.title}>Оставьте контакты <br /> для обратной связи</h3>
            <label className={s.label} htmlFor="">
                <input className={s.input} value={valueOne} onChange={(event) => setValueOne(event.target.value)} type="text" placeholder='Имя'/>
            </label>

            <label className={s.label} htmlFor="">
                <input className={s.input} value={valueTwo} onChange={(event) => setValueTwo(event.target.value)} type="text" placeholder='Фамилия'/>
            </label>

            <label className={s.label} htmlFor="">
                <input className={s.input} value={valueThree} onChange={(event) => setValueThree(event.target.value)} type="number" placeholder='Номер телефона'/>
            </label>
            <button className={s.button}>Отправить</button>
        </form>
    </div>
  )
}

export default Contacts