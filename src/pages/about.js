import React from 'react'
import { useRouteData } from 'react-static'
//
import { Link } from 'components/Router'

export default function Blog() {
  const { posts } = useRouteData()
  return (
    <div>
      <h1> About</h1>

      <p>
        This is a simple demo for grapejs working inside a react app. Note: Grapejs is not using Jquery compare to other site builder this is a pure OOP Javascript library.
        So for those use to react libaries of funtional programming. Well that part is missing so sorry.

      </p>
     
    </div>
  )
}
