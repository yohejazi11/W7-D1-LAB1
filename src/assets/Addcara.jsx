import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios'

function Addcara() {
    const [name, setName] = useState()
    const [pic, setPic] = useState()
    const [gender, setGender] = useState()
    const navigate=useNavigate()

    function addFun() {
        if(name && pic && gender){
        axios
            .post('https://66f0eef8f2a8bce81be7056d.mockapi.io/posts', {
                name,
                gender,
                image: pic
            })
            .then(function(response){
                console.log(response)
                navigate('/')
            })
        }
        else{
            window.alert("there is messing value")
        }
    }
    return (
        <div className='flex  w-[100vw] justify-center items-center h-[100vh] '>
            <div className='flex flex-col gap-y-[2rem] w-[60vw] rounded-[10px] bg-gray-300 p-[20px] items-center'>
                <h1 className='font-bold text-[2rem]'>Add carachter info</h1>
                <input className='w-[70%] h-[40px] text-right rounded-[10px] px-[20px]' type='text' value={pic} onChange={(e) => { setPic(e.target.value) }} placeholder='add carachter photo'></input>
                <input className='w-[70%] h-[40px] text-right rounded-[10px] px-[20px]' type='text' value={name} onChange={(e) => { setName(e.target.value) }} placeholder='carachter name'></input>
                <input className='w-[70%] h-[40px] text-right rounded-[10px] px-[20px]' type='text' value={gender} onChange={(e) => { setGender(e.target.value) }} placeholder='carachter gender'></input>
                <button className='w-[20%] h-[40px] rounded-[15px] bg-blue-700 font-bold text-white' onClick={addFun}>Add</button>
            </div>
        </div>
    )
}

export default Addcara
