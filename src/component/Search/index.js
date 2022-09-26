import React, { Fragment, useState } from 'react';
import {useHistory} from "react-router-dom"
import "./Search.css"


const Search = () => {
    
    const [keyword, setKeyword]=useState("")

    const history = useHistory()

    const handleSearchSubmit=(e)=>{
        e.preventDefault()
        if(keyword.trim()){
            history.push(`/products/${keyword}`)
        }else{
             history.push('/products')
        }
    }


  return (
   <Fragment>
       <form className='searchBox' onSubmit={handleSearchSubmit}>
        <input type="text" placeholder='Seach Products ...' onChange={e=>setKeyword(e.target.value)}/>
        <input type="submit" value="Search" />
       </form>
   </Fragment>
  )
}

export default Search
