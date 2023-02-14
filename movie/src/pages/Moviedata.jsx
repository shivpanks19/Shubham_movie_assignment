import React, { useEffect, useState } from 'react'
// import { DataGrid } from '@mui/x-data-grid';


// Image
// title
// Genre
// IMDB rating
// Release Date
const column = [
  {field:"poster",headerName:"Image",width:300},
  {field:"title",headerName:"title",width:300},
  {field:"Genre",headerName:"Genre",width:300},
  {field:"imdbRating",headerName:"IMDB rating",width:300},
  {field:"year",headerName:"Release Date",width:300}


]
export const Moviedata = () => {
    const [data , setdata] = useState([])
    const [row,setRows]= useState(data)

    useEffect(()=>{
        fetch("https://hexanovate-1oc3v5uf6-thephenom1708.vercel.app/api/movies")
        .then((res)=>res.json())
        .then((data)=>setdata(data))
        .catch((err)=>console.log(err))
    },[])


  return (
    <div style={{width:'100%',height:700}}>
  {data.map((user) => (
    <>
    <div style={{display:'grid', gridTemplateColumns:"1fr 1fr 1fr"}}>
     <img src={user.poster}></img>
     <div>{user.title}</div>
     <div>{user.Genre}</div>
     <div>{user.imdbRating}</div>
     <div>{user.year}</div>
     </div>
     </>
      ))}
    </div>
  )
}
