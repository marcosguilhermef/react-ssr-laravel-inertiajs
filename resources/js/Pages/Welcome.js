import React from 'react'
import Layout from '../Shared/Layouts'

export default function Welcome(props) {
  return (
    <Layout>
      <h1>Welcome</h1> 
      <p>Welcome to my first Inertia.js app!</p>
      <p>{ props.foo }</p>
    </Layout>
  )
}