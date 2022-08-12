import React, { useState } from 'react'
import './singleitem.sass'
import { FiArrowUpRight } from 'react-icons/fi'
import SingleItemModal from '../SingleItemModal'

interface ItemProps {
  name?: string
  description?: string
  category?: string
  price?: number
  variations?: Array<object>
  identifier?: number
}

const SingleItem = ({
  name,
  description,
  category,
  price,
  variations,
  identifier,
}: ItemProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <div
      key={identifier}
      onClick={(): void => setIsOpen(true)}
      className='single'
    >
      <p className='single__cat'>{category}</p>
      <h1 className='single__title'>{name}</h1>
      <p className='single__desc'>{description && description}</p>
      {variations ? (
        <div className='single__var'>
          {variations.map((variation: any, i: any) => (
            <div key={i} className='single__var-card'>
              <p className='single__var-label'>{variation.label}</p>
              <p className='single__var-price'>{variation.price},00 RSD</p>
            </div>
          ))}
        </div>
      ) : (
        <p className='single__price'>{price},00 RSD</p>
      )}
      <button type='button' className='single__btn'>
        Dodajte u korpu <FiArrowUpRight className='single__btn-icon' />
      </button>
      <SingleItemModal
        price={price}
        variations={variations}
        identifier={identifier}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </div>
  )
}

export default SingleItem
