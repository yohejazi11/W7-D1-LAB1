import { useState } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios'

function Update() {
    const [pic, setPic] = useState()
    const navigate = useNavigate()

    let { id } = useParams();

    function edite(){
        axios
        .put(`https://66f0eef8f2a8bce81be7056d.mockapi.io/posts/${id}`,{
            image:pic,
        }).then(function(){
            navigate('/')
        })
    }
    return (
        <div className='flex  w-[100vw] justify-center items-center h-[100vh] '>
            <div className='flex flex-col gap-y-[2rem] w-[60vw] rounded-[10px] bg-gray-300 p-[20px] items-center'>
                <h1 className='font-bold text-[2rem]'>Add carachter info</h1>
                <input className='w-[70%] h-[40px] text-right rounded-[10px] px-[20px]' type='text' value={pic} onChange={(e) => { setPic(e.target.value) }} placeholder='add carachter photo'></input>
                <button className='w-[20%] h-[40px] rounded-[15px] bg-blue-700 font-bold text-white' onClick={edite}>Add</button>
            </div>
        </div>
    )
}

export default Update
