import React, { useState } from 'react'
import './contactform.sass'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const ContactForm = () => {
  const [name, setName] = useState<string>('')
  const [lastname, setLastname] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [subject, setSubject] = useState<string>('')
  const [message, setMessage] = useState<string>('')

  const navigate = useNavigate()

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!name || !lastname || !email || !subject || !message) {
      toast.error('Popunite sva polja')
    }

    if (name && lastname && email && subject && message) {
      toast.success('Poruka je poslata')
      navigate('/')
    }
  }

  return (
    <div className='contact-form'>
      <h1 className='contact-form__title'>Kontaktirajte nas</h1>
      <form onSubmit={submitHandler} className='contact-form__form'>
        <div className='contact-form__form-group'>
          <input
            type='text'
            name='name'
            placeholder='Vase ime'
            value={name}
            onChange={(event) => setName(event.target.value)}
            className='contact-form__input group'
          />
          <input
            type='text'
            name='lastname'
            placeholder='Vase Prezime'
            value={lastname}
            onChange={(event) => setLastname(event.target.value)}
            className='contact-form__input group'
          />
          <input
            type='email'
            name='email'
            placeholder='Vas email'
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className='contact-form__input group'
          />
        </div>
        <input
          type='text'
          name='subject'
          placeholder='Predmet poruke'
          value={subject}
          onChange={(event) => setSubject(event.target.value)}
          className='contact-form__input'
        />
        <textarea
          name='message'
          placeholder='Vasa poruka'
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          className='contact-form__area'
        ></textarea>
        <button type='submit' className='contact-form__btn'>
          Posaljite
        </button>
      </form>
    </div>
  )
}

export default ContactForm
