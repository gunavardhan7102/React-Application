import React from 'react'
import Card from '../components/Card'

const User = () => {
const f = () => {
  alert('Go Details');
}

const cardProps = {
  imageURL : "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740&q=80",
  imagetitle: "User",
  description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled 
 it to make a type specimen book. It has survived not only five centuries, but also the leap into 
 electronic typesetting, remaining essentially unchanged.`,
 actionName : 'Go Details',
 actionEvent: f
}

  return (
    <Card {...cardProps}
    />
  )
}

export default User