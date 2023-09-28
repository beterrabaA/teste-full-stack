import { MouseEventHandler } from 'react'

export interface beersResponse {
  id: number
  name: string
  tagline: string
  first_brewed: string
  description: string
  image_url: string
  abv: number
  ibu: number
  target_fg: number
  target_og: number
  ebc: number
  srm: number
  ph: number
  attenuation_level: number
  volume: {
    value: number
    unit: string
  }
  boil_volume: {
    value: number
    unit: string
  }
  method: {
    mash_temp: {
      temp: {
        value: number
        unit: string
      }
      duration: number
    }[]
    fermentation: {
      temp: {
        value: number
        unit: string
      }
    }
    twist: string
  }
  ingredients: {
    malt: {
      name: string
      amount: {
        value: number
        unit: string
      }
    }[]
    hops: {
      name: string
      amount: {
        value: number
        unit: string
      }
      add: string
      attribute: string
    }[]
    yeast: string
  }
  food_pairing: string[]
  brewers_tips: string
  contributed_by: string
}

export interface OptionProps {
  title: string
  value: string
}

export interface CustomFilterProps {
  title: string
  options: OptionProps[]
}

export interface FilterProps {
  field: string
  order: string
  search: string
  limit: number
}

export interface HomeProps {
  searchParams: FilterProps
}

export interface CustomButtonProps {
  title: string
  btnType?: 'button' | 'submit' | 'reset'
  containerStyles?: string
  handleClick?: MouseEventHandler<HTMLButtonElement>
  textStyles?: string
  rightIcon?: string
  isDisabled?: boolean
}

export interface ShowMoreProps {
  pageNumber: number
  isNext: boolean
}

export interface RegisterInputProps {
  username: string
  email: string
  password: string
}
