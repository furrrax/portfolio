import React from 'react';

const Form = () => {

    return (
        <form className="contact__form form">
            <h5 className="form__title">Написать мне</h5>
            <label className='form__label'>
                <input className='form__label__input' type="text" name="name" placeholder="Имя" maxLength={25}/>
            </label>
            <label className='form__label'>
                <input className='form__label__input' type="email" name="email" placeholder='Email' maxLength={25}/>
            </label>
            <label className='form__label'>
                <textarea className='form__label__input form__label__input--textarea' name="comment" placeholder='Сообщение' maxLength={281}/>
            </label>
            <button className="form__submit btn">Отправить</button>
        </form>
    )
}

export default Form;