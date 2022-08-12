import React from 'react'
import './singleitemmodal.sass'

interface SingleItemModalProps {
  price?: number
  variations?: Array<object>
  identifier?: number
  isOpen?: boolean
  setIsOpen?: (isOpen: boolean) => void
}

const SingleItemModal = ({
  price,
  variations,
  identifier,
  isOpen,
  setIsOpen,
}: SingleItemModalProps): JSX.Element => {
  return (
    <div className={isOpen ? 'single-modal open' : 'single-modal'}>
      <form className='single-modal__container'>
        {variations ? (
          <div className='single-modal__variations'>
            {variations.map((variation: any, i: any) => (
              <div key={i} className='single-modal__variation'>
                <label
                  htmlFor={`${variation.label}`}
                  className='single-modal__var-label'
                >
                  {variation?.label}
                </label>
                <p className='single-modal__var-price'>
                  {variation?.price},00 RSD
                </p>
                <input
                  type='radio'
                  id={`${variation.label}`}
                  value={`${variation.label}`}
                  name={`${variation.label}`}
                  className='single-modal__radio'
                />
              </div>
            ))}
          </div>
        ) : null}
      </form>
    </div>
  )
}

export default SingleItemModal
