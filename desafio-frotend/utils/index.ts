import { beersResponse } from '@/types'
import axios from 'axios'

export async function fetchBeers(filters: {
  search: string
  field: string
  limit: number
}): Promise<beersResponse[]> {
  const options = {
    method: 'GET',
    url: `${process.env.API_BASE_URL}/beers`,
    params: { [filters.field]: filters.search, per_page: filters.limit },
  }

  if (filters.search === '') {
    delete options.params[filters.field]
  }

  const { data } = await axios.request(options)
  return data
}

export const updateSearchParams = (type: string, value: string) => {
  const searchParams = new URLSearchParams(window.location.search)

  searchParams.set(type, value)

  const newPathname = `${window.location.pathname}?${searchParams.toString()}`

  return newPathname
}
