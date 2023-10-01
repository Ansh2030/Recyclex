import React, { useEffect, useState } from 'react'
import Cards from '../Cards/Cards'

function Blog() {
    const [articles, setArticles] = useState([]); 
    // const [ind, setInd] = useState(0);
 const update= async()=>{
 const url = 'http://localhost:8080/api/blogs';
 const data = await fetch(url);
 let parsedata = await data.json();
 setArticles(parsedata);

 }

 useEffect(()=>{

    update();
 },[])

  return (
    <div>
    {articles.map((element)=>{
        return <Cards des={element.data} name = {element.idd} key={element.id}/>
      })}

      </div>
  )
}

export default Blog