import React from 'react'
import { Link } from 'react-router-dom'
import { useGetAllArticlesQuery } from '../features/APISlice'

export default function Home() {
  const { data, error, isLoading } = useGetAllArticlesQuery()

  return (
    <div>
      <h1>Home</h1>
      {isLoading && <h1>Loading...</h1>}
      {error && <h1>Error...</h1>}
      {data && (
        <div>
          {data.map((item) => (
            <div key={item.id}>
              <h1>{item.title}</h1>
              <h4>{item.description}</h4>
              <p>{item.author}</p>
              <Link to={`/${item.id}`}>
                <button>Read more...{item.id}</button>
              </Link>
            </div>
          ))}
          <hr />
        </div>
      )}
    </div>
  )
}
