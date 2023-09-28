'use client'

import { useState } from 'react'

import { beersResponse } from '@/types'

import Image from 'next/image'
import CustomButton from './CustomButton'

const BeerCard = ({ beer }: { beer: beersResponse }) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="flex flex-col p-6 justify-between items-center text-black-100 bg-primary-blue-100 hover:bg-gray-100 hover:shadow-md rounded-3xl group">
      <div className="flex justify-between items-center gap-2">
        <p className="text-[22px] leading-[26px] font-bold capitalize text-center">
          {beer.name}
        </p>
      </div>
      <div className="flex flex-row relative my-3 h-40 w-auto object-contain">
        <Image src={beer.image_url} alt={beer.name} width={50} height={75} />
      </div>
      <div className="relative mt-2 flex w-full">
        <div className="text-gray flex w-full justify-between group-hover:invisible">
          <div className="flex flex-col items-center justify-center gap-2">
            <h2>ABV</h2>
            <p>{beer.abv}</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <h2>IBU</h2>
            <p>{beer.ibu}</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <h2>ABV</h2>
            <p>{beer.ebc}</p>
          </div>
        </div>

        <div className="hidden group-hover:flex absolute bottom-0 w-full z-10">
          <CustomButton
            title="View More"
            containerStyles="bg-blue-300 rounded-full w-full py-[10px] "
            textStyles="text-white text-[14px] leading-[17px] font-bold"
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>
    </div>
  )
}

export default BeerCard
