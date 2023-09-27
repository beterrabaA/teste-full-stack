'use client'

import { FormEvent, useState } from 'react'
import CustomFilter from './CustomFilter'
import { filterOptionsText } from '@/constants'
import { useRouter } from 'next/navigation'

const SearchBar = () => {
  const [model, setModel] = useState('' as string)
  const router = useRouter()

  const handleSearch = (e: FormEvent) => {
    e.preventDefault()
    updateSearchParams()
  }

  const updateSearchParams = () => {
    const searchParams = new URLSearchParams(window.location.search)

    searchParams.set('search', model)

    const newPathname = `${window.location.pathname}?${searchParams.toString()}`

    router.push(newPathname)
  }

  console.log(filterOptionsText)

  return (
    <form
      onSubmit={handleSearch}
      className="flex items-center justify-start max-sm:flex-col w-full relative max-sm:gap-4 max-w-3xl"
    >
      <div className="flex max-sm:w-full justify-start items-center relative">
        <CustomFilter title="field" options={filterOptionsText} />
      </div>
      <div className="flex-1 max-sm:w-full flex justify-start items-center relative">
        <input
          className="w-full h-[48px] pl-12 p-4 rounded-r-full max-sm:rounded-full outline-none cursor-pointer text-sm"
          id="search-model"
          name="model"
          onChange={(e) => setModel(e.target.value)}
          placeholder="Eletric India"
          value={model}
          type="text"
        />
        <button
          type="button"
          className="bg-gray-100 max-sm:hidden px-4 p-2 rounded-3xl"
        >
          Limpar
        </button>
        <button
          type="submit"
          className="bg-gray-100 max-sm:hidden px-4 p-2 rounded-3xl"
        >
          Search
        </button>
        {/* <SearchButton otherClasses="sm:hidden" /> */}
      </div>
    </form>
  )
}

export default SearchBar
