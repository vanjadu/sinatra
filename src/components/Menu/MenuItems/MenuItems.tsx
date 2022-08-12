import React, { useState, useEffect } from 'react'
import './menuitems.sass'
import { db } from '../../../firebase/firebase-config'
import { collection, getDocs, query, orderBy } from 'firebase/firestore'
import Loader from '../../Loader'
import { toast } from 'react-toastify'
import SingleItem from '../SingleItem'
import { FiSearch } from 'react-icons/fi'

const MenuItems = (): JSX.Element => {
  const [items, setItems] = useState<any | null>(null)
  const [loading, setLoading] = useState<boolean>(false)

  const [searchInput, setSearchInput] = useState<string>('')

  useEffect(() => {
    const fetchItems = async () => {
      setLoading(true)

      try {
        const menuItemsRef = collection(db, 'menuitems')

        const q = query(menuItemsRef, orderBy('id', 'asc'))
        const querySnap = await getDocs(q)

        let menuItems = [] as any[]

        querySnap.forEach((doc: any) => {
          return menuItems.push({
            id: doc.id,
            data: doc.data(),
          })
        })

        setItems(menuItems)
        setLoading(false)
      } catch (error: any) {
        console.log(error.message)

        toast.error('Došlo je do greške.')
        setItems(null)
        setLoading(false)
      }
    }

    fetchItems()
  }, [])

  // distinct categories from items
  const lookup = {} as any
  const categories = [] as any[]

  if (items) {
    for (let item, i = 0; (item = items[i++]); ) {
      if (!lookup[item.data.category]) {
        lookup[item.data.category] = 1
        categories.push(item.data.category)
      }
    }
  }

  let sortedMenu = [] as any[]

  if (items) {
    categories.map((category: any, i: any) => {
      sortedMenu.push({
        category: category,
        items: items.filter((item: any) => item.data.category === category),
      })
      return items
    })
  }

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <section className='menu-items'>
          <div className='menu-items__container'>
            <div className='menu-items__search-container'>
              <input
                type='text'
                name='search'
                placeholder='Pretražite...'
                value={searchInput}
                onChange={(e: any) => setSearchInput(e.target.value)}
                className='menu-items__search-input'
              />
              <FiSearch className='menu-items__search-icon' />
            </div>
            <div className='menu-items__categories'>
              {categories &&
                categories?.map((category: string, i: number) => (
                  <a
                    href={`#${category}`}
                    key={i}
                    className='menu-items__category'
                  >
                    {category}
                  </a>
                ))}
            </div>
            <div className='menu-items__items-container'>
              {sortedMenu
                ?.filter((item: any) => {
                  return (
                    item.items.filter((item: any) => {
                      return item.data.name
                        .toUpperCase()
                        .replaceAll('Č', 'C')
                        .replaceAll('Ć', 'C')
                        .replaceAll('Ž', 'Z')
                        .replaceAll('Š', 'S')
                        .replaceAll('Đ', 'DJ')
                        .includes(searchInput.toUpperCase())
                    }).length > 0
                  )
                })
                .map((item: any, i: number) => (
                  <div key={i} className='menu-items__items'>
                    <h1
                      className='menu-items__category-title'
                      id={item.category}
                    >
                      {item.category}
                    </h1>
                    {item.items
                      ?.filter((item: any) => {
                        return item.data.name
                          .toUpperCase()
                          .replaceAll('Č', 'C')
                          .replaceAll('Ć', 'C')
                          .replaceAll('Ž', 'Z')
                          .replaceAll('Š', 'S')
                          .replaceAll('Đ', 'DJ')
                          .includes(searchInput.toUpperCase())
                      })
                      .map((singleItem: any, i: number) => (
                        <SingleItem key={i} {...singleItem.data} />
                      ))}
                  </div>
                ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}

export default MenuItems
