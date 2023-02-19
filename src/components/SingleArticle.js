import React from 'react'
import { useParams } from 'react-router-dom'

export default function SingleArticle() {
  const { id } = useParams()
  return (
    <div>
      <h1>{id}</h1>
      <h1>SingleArticle</h1>
    </div>
  )
}
