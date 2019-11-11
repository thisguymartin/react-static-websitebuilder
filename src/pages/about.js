import React from 'react'
import { useRouteData } from 'react-static'
//
import { Link } from 'components/Router'

export default function Blog() {
  const { posts } = useRouteData()
  return (
    <div className="container">
      <h1> About</h1>

      <iframe src="https://giphy.com/embed/aKE8cuxykToFG" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/rickandmorty-adult-swim-rick-and-morty-02x04-aKE8cuxykToFG"></a></p>      <p>
        This is a simple demo for grapejs working inside a react app. Note: Grapejs is not using Jquery compare to other site builder this is a pure OOP Javascript library.
        So for those use to react libaries of funtional programming. Well that part is missing so sorry.
      </p>
     
    </div>
  )
}
