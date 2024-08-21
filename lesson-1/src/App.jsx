import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
let a=5000;
const Name="Ali İhsan"
let vize1=60;
let vize2=80;
let sonuc=true;

let İsimler=[
  "Ali",
  "Nazlı",
  "Kubra",
  "Elif",
  "Beyza"
]

  return (
    <>
    <div>
      <p>müşterinin adı:{Name}</p>
      <p>harcama tutarı: {a}  Euro</p>
      </div>

<div>
<p>vize ortalaması:{(vize1+vize2)/2}
</p>  
  <p>{(vize1+vize2)/2 >= 50 ? <p>DERSTEN GEÇTİNİZ</p> : <p>DERSTEN KALDINIZ:(</p> }
 
  
  </p>
</div>
<div>
{ sonuc?  <p>ehliyeti alabilirsin :)</p> :    <p>ehliyeti alma hakkınız şuanlık yok</p> }
</div>

<div>
{
  İsimler.map((isim,index)=>(
    <div style={{backgroundColor:"yellowgreen",
      border:"2px solid red",
      color:"white",
    }} key={index}>{isim}</div>
  ))
}


</div>

    </>
  )
}

export default App
