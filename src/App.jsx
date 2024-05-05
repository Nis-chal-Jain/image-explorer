import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [imgurl,setimgurl] = useState("")
  const [name,setname] = useState('')
  const [namelink,setnamelink] = useState('')
  const unsplashAPIKey = import.meta.env.VITE_UNSPLASH_API_KEY
  const randRequesturl = `https://api.unsplash.com/photos/random?client_id=${unsplashAPIKey}`
    async function img(){
      const data = await fetch(randRequesturl)
      const dataJSON = await data.json()
      setimgurl(dataJSON.urls.raw)
      setname(dataJSON.user.name)
      setnamelink(dataJSON.user.links.html)
      console.log(imgurl)
      console.log(name)
      console.log(namelink)
    }
    
  
  
  
  
  
  return (
    <>
      <h1 className=' text-2xl bg-green-600 text-yellow-200'>hello</h1>
      {/* <img src='https://images.unsplash.com/photo-1714165860569-b4b8e1dd7096?ixid=M3w1OTc5Nzh8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTQ5MTg0NDV8&ixlib=rb-4.0.3' alt="" /> */}
      <img src={imgurl} alt="" width='200px'/>
      <p>Photo by <a  href={namelink} className=' text-blue-500'>{name}</a> on unsplash</p>
      <input type="button" value="Next" onClick={img} className=' text-2xl gap-x-4 cursor-pointer'/>
    </>
  )
}

export default App
