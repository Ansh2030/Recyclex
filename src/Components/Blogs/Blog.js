import React, { useEffect, useState } from 'react'
import Cards from '../Cards/Cards';
import Navbar from '../Navbar/Navbar';
import Chat from "../Icons/Chat"
import { Navigate } from 'react-router-dom';
import'./Blog.css'
import { useUserAuth } from '../../Context/UserAuthContext';
import Footer from '../Footer/Footer';
function Blog() {
    const [articles, setArticles] = useState([]); 
    // const [ind, setInd] = useState(0);
 const update= async()=>{
 const url = 'http://localhost:8080/api/blogs';
 const data = await fetch(url);
 let parsedata = await data.json();
 setArticles(parsedata);

 }

 const {user} = useUserAuth();

 useEffect(()=>{

    update();
 },[])


 
  return (
   
    <div>
    <Navbar/>
      <div className='firstsection'>
        <h1>"There is no such thing as 'Away'. Every away goes somewhere."
        </h1>
        </div>
        <div><h2 className='st'>Get Started with out best stories</h2></div>
      <div className='blogs'>
      {articles.map((element)=>{
        return <Cards image = {element.img} des={element.data} name = {element.idd} key={element.id}/>
      })}
      </div>
    

<Footer/>

      </div>
   
  )
}

export default Blog
