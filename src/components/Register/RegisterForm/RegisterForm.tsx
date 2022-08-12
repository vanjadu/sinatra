import React, { useState, useContext } from 'react'
import './registerform.sass'
import { toast } from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth } from '../../../firebase/firebase-config'
import { UserContext } from '../../../context/UserContext'
import Loader from '../../Loader'

const Register = (): JSX.Element => {
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [pass, setPass] = useState<string>('')

  const { setUser, loading, setLoading } = useContext(UserContext)

  const navigate = useNavigate()

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    if (!email || !pass || !name) {
      toast.error('Popunite sva polja')
      setLoading(false)
      return
    }

    if (pass.length < 6) {
      toast.error('Lozinka mora imati minimalno 6 karaktera')
      setLoading(false)
      return
    }

    if (pass.length > 15) {
      toast.error('Lozinka mora imati maksimalno 20 karaktera')
      setLoading(false)
      return
    }

    if (!email.includes('@') || !email.includes('.')) {
      toast.error('Email adresa nije ispravna')
      setLoading(false)
      return
    }

    if (email && pass) {
      try {
        await createUserWithEmailAndPassword(auth, email, pass)
        const newUser = auth.currentUser

        if (newUser) {
          await updateProfile(newUser, { displayName: name })
        }

        setUser(newUser)
        localStorage.setItem('user', JSON.stringify(newUser))

        toast.success('Uspesno ste se registrovali')
        setLoading(false)
        navigate('/')
      } catch (error) {
        console.log(error)
        toast.error('Došlo je do greške')

        setLoading(false)
      }
    }
  }

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <section className='reg'>
          <h1 className='reg__title'>Napravite nalog</h1>
          <form className='reg__form' onSubmit={submitHandler}>
            <input
              type='text'
              name='name'
              placeholder='Vase ime'
              value={name}
              onChange={(e) => setName(e.target.value)}
              className='reg__input'
            />
            <input
              type='email'
              name='email'
              placeholder='Vas email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='reg__input'
            />
            <input
              type='password'
              name='password'
              placeholder='Vasa lozina'
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              className='reg__input'
            />
            <button type='submit' className='reg__btn'>
              Potvrdite
            </button>
          </form>
          <Link
            to='/login'
            className='reg__switch'
            onClick={() => window.scrollTo(0, 0)}
          >
            Vec imate nalog? <FiArrowRight className='reg__switch-icon' />
          </Link>
        </section>
      )}
    </>
  )
}

export default Register
