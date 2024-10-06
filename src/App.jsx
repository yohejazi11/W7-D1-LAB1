import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";

import axios from 'axios'
import './App.css'

function App() {
  const [carachter, setCarachter] = useState([]);
  const navigate = useNavigate()
  const [selected, setSelected] = useState([])
  useEffect(() => {
    getData()
  },[])

  function getData(){
    axios
      .get('https://66f0eef8f2a8bce81be7056d.mockapi.io/posts')
      .then(function (response) {
        setCarachter(response.data)
      })
  }

  function deleteBTN(id){
    axios
    .delete(`https://66f0eef8f2a8bce81be7056d.mockapi.io/posts/${id}`)
    .then(function(response){
      getData();
      console.log(response)
    })
  }

  function editeFun(id){
    navigate(`/update/${id}`)
  }

  return (
    <div className='flex flex-col items-center gap-y-[1rem]'>
      <div>
        <button className='h-[40px] text-[1rem] bg-blue-700 px-[20px] text-white font-bold rounded-[15px]' onClick={() => { navigate('/add') }}>Add Carachter</button>

      </div>

      <div>
        <input className='h-[40px] border-[1px] border-gray-500 rounded-[15px]' type='search' value={selected} onChange={(e) => { setSelected(e.target.value) }}></input>
        <div>
          {carachter.filter((char) => {
            if (char.name === selected) {
              <div>
                <img src={char.image}></img>
                <p>{char.name}</p>
              </div>
            }
            else {
              <h1>not found</h1>
            }
          })
          }
        </div>
      </div>

      <div className='flex flex-wrap gap-[2rem] w-[100vw] justify-center'>
        {
          carachter.map(item => (
            <div key={item.id} className='w-[15vw] flex flex-col items-center gap-y-[1rem]'>
              <img src={item.image}></img>
              <p>{item.name}</p>
              <button onClick={()=>{deleteBTN(item.id)}} className='h-[40px] border-red-700 text-red-700 bg-transparent border-[3px] rounded-[10px] font-bold'>DELETE</button>
              <button onClick={()=>{editeFun(item.id)}} className='h-[40px] border-blue-700 text-blue-700 bg-transparent border-[3px] rounded-[10px] font-bold'>EDITE</button>

            </div>
          ))
        }
      </div>


    </div>
  )
}

export default App
