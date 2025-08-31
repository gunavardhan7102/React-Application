import React from 'react'
import Card from '../components/Card'

const Search = () => {
const products = [
{
    imageURL: "https://guesseu.scene7.com/is/image/GuessEU/M63H24W7JF0-L302-ALTGHOST?wid=1500&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0",
    title: "CHECK PRINT SHIRT",
    description: "Hello world...",
    actionName: "Click"
    
  },
  {
    imageURL: "https://guesseu.scene7.com/is/image/GuessEU/FLGLO4FAL12-BEIBR?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0",
    title: "GLORIA HIGH LOGO SNEAKER",
    description: "Namastey ...",
    actionName: "Go..."
    
  },
  {
    imageURL: "https://guesseu.scene7.com/is/image/GuessEU/HWVG6216060-TAN?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0",
    title: "CATE RIGID BAG",
    description: "Bag product...",
    actionName: "Click Here."
    
  }
]

  return ( 
    <div 
    
    className='d-flex justify-content align-items-center flex-column'> 
    <h3>Search</h3>
    {products.map((products) => {
      return <Card {...products} actionEvent={()=>{
        alert(products.title)
      }}/>
    })}
    </div>
  )
}

export default Search