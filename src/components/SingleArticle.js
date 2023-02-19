import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetArticlesByIdQuery } from '../features/APISlice'
import { Link } from 'react-router-dom'

export default function SingleArticle() {
  // const { id } = useParams()

  const { id } = useParams()

  const { data, error, isLoading } = useGetArticlesByIdQuery(id)

  return (
    <div>
      <Link to='/'>
        <button>Back</button>
      </Link>

      <h1>{id}</h1>
      <p>SingleArticle</p>
      {isLoading && <h1>Loading...</h1>}
      {error && <h1>Error...</h1>}
      {data && (
        <div>
          <h1>{data.title}</h1>
          <p>- {data.author}</p>
          <h3>{data}</h3>
        </div>
      )}
    </div>
  )
}
