import React, { useEffect, useState } from 'react'
import Cards from '../Cards/Cards'
import'./Blog.css'
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

      <div className='firstsection'>
        <h1>R- blogs .. Read - create - share</h1>
        </div>
        <div><h3>Get Started with out best stories</h3></div>
      <div className='blogs'>
      {articles.map((element)=>{
        return <Cards des={element.data} name = {element.idd} key={element.id}/>
      })}
      </div>
    

      </div>
  )
}

export default Blog
