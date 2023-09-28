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
