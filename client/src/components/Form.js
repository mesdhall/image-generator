import axios from "axios"
import { useState, useEffect } from "react"

function ImageForm(props){
    const [image, setImage] = useState('')

    function handleSubmit(event){
        console.log(image)
        event.preventDefault()
        axios.post('http://localhost:3001/form', {test: image})
    }

    useEffect(() => {
        //console.log(image)
    })    

    return(
        <div>
            <form onSubmit={(event)=>{handleSubmit(event)}}>
                <input type="text" placeholder={props.placeholder} onChange={(event)=>{setImage(event.target.value)}}></input> 
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default ImageForm