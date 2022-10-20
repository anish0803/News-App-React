import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './News.css'

export default function News(props) {

    const [data,setData] = useState([]);

    useEffect(()=>{
        axios
            .get(`https://newsapi.org/v2/everything?q=tesla&from=2022-10-20&sortBy=publishedAt&apiKey=e5851bb345f24089aecb3088fe55c057`)
            .then((response)=>{
                let result = response.data.articles;
                setData([data,...result]);
                console.log(result)
            })
    },[])


  return (
   <>
                    <div className="searchInput">
          <input type="text" class="css-input" placeholder="enter news here" onChange={(e) => {
              props.getfun(e.target.value);
            }} />
          <button className="inputSubmit">Submit</button>
        </div>

        {data.map((item,index)=>{
                return(
                    <div className='articles' key={index} >
                        <h1>{item.title}</h1>
                        <h3>{item.description}</h3>
                        <img src={item.urlToImage} alt="?" />
                        {/* <a href="/">{item.url}</a> */}
                        <p>{item.content}</p>
                        <p>{item.author}</p>
                        <p>{item.publishedAt}</p>
                   </div>

                )
            })}
   </>
  )
}