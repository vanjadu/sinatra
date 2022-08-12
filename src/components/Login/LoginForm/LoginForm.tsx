import React, { useContext, useState } from 'react'
import './loginform.sass'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../../firebase/firebase-config'
import { UserContext } from '../../../context/UserContext'
import Loader from '../../Loader'

const SigninForm = (): JSX.Element => {
  const [email, setEmail] = useState<string>('')
  const [pass, setPass] = useState<string>('')

  const { setUser, loading, setLoading } = useContext(UserContext)

  const navigate = useNavigate()

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    if (!email || !pass) {
      toast.error('Popunite sva polja')
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
        await signInWithEmailAndPassword(auth, email, pass)
        const signedUser = auth.currentUser

        setUser(signedUser)
        localStorage.setItem('user', JSON.stringify(signedUser))

        toast.success('Uspesno ste se ulogovali')
        setLoading(false)
        navigate('/')
      } catch (error) {
        console.log(error)
        toast.error('Pogrešno korisničko ime ili lozinka')

        setLoading(false)
      }
    }
  }

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <section className='sign'>
          <h1 className='sign__title'>Ulogujte se</h1>
          <form className='sign__form' onSubmit={submitHandler}>
            <input
              type='email'
              name='email'
              placeholder='Vas email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='sign__input'
            />
            <input
              type='password'
              name='password'
              placeholder='Vasa lozina'
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              className='sign__input'
            />
            <button type='submit' className='sign__btn'>
              Potvrdite
            </button>
          </form>
          <Link
            to='/register'
            className='sign__switch'
            onClick={() => window.scrollTo(0, 0)}
          >
            Nemate nalog? <FiArrowRight className='sign__switch-icon' />
          </Link>
        </section>
      )}
    </>
  )
}

export default SigninForm
