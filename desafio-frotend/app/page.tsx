import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'

import BeerCard from '@/components/BeerCard'
import SearchBar from '@/components/SearchBar'
import ShowMore from '@/components/ShowMore'
import LogoutButton from '@/components/LogoutButton'

import { fetchBeers } from '@/utils'

import { HomeProps } from '@/types'

export default async function Home({ searchParams }: HomeProps) {
  const beers = await fetchBeers({
    search: searchParams?.search,
    field: searchParams?.field || 'beer_name',
    limit: searchParams?.limit || 12,
  })
  const isDataEmpty = !Array.isArray(beers) || beers.length < 1 || !beers

  const cookiesList = cookies()

  const hasCookie = cookiesList.has('user')

  if (!hasCookie) {
    redirect('/login')
  }
  return (
    <main className="overflow-hidden mx-2">
      <div className="mt-12 w-full flex-between items-center flex-wrap gap-5">
        <SearchBar />
        <div className="flex justify-start flex-wrap items-center gap-2">
          <LogoutButton />
        </div>
      </div>
      {!isDataEmpty ? (
        <section>
          <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-8 pt-14">
            {beers.map((beer) => (
              <BeerCard key={beer.id} beer={beer} />
            ))}
          </div>
          <ShowMore
            pageNumber={(searchParams.limit || 12) / 12}
            isNext={(searchParams.limit || 12) > beers.length}
          />
        </section>
      ) : (
        <h2 className="text-xl font-bold text-black">Oops, no results</h2>
      )}
    </main>
  )
}
