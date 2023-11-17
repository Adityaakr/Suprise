import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './App.jsx'
import Intro from './Intro.jsx'
import CardOne from './Image.jsx'
import Contact from './Contact.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
<>
 <Navbar/>
 <Intro/>
 <CardOne username='Beautiful Portrait' btnText='Shows Beautiful Indian Attire and representing indian culture' 
 image="public/didi.png"/>
 <CardOne username='Didi & JIJU' btnText='Didi and Jiju, a perfect pair, complementing each other with love and laughter, creating a forever bond.' 
 image="/public/didi.png"/>
 <CardOne username='Goat Virat Kohli' btnText='One and only Virat Kohli, Legend.' 
 image="/public/virat.png"/>
 <CardOne username='Girl Portrait' btnText='Shows Beautiful representing indian culture, Enjoying life to the fullest' 
 image="/public/random image.png"/>
 <Contact/>

</>

)
