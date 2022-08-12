import React from 'react'
import './loader.sass'
import { Bars } from 'react-loader-spinner'

interface Props {
  small?: boolean
}

const Loader = ({ small }: Props): JSX.Element => {
  return (
    <div className={small ? 'loader small' : 'loader'}>
      <Bars height='120' width='120' color='#f9f9f9' ariaLabel='loading' />
    </div>
  )
}

export default Loader
