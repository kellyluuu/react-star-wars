import {useState} from "react"

function Form (props){
  const [form, setForm] = useState({
    search: ""
  })

  const handleChange = (event)=>{
    setForm({...form, [event.target.name]: event.target.value})
  }

  const handleSubmit = (event)=>{
    event.preventDefault()
    props.search(form.search)
  }
    return (
      <div className="search">
    <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type="text" value={props.search} name="search"/>
        <input type="submit" value="search"/>
    </form>
    </div>
    )
  }
  
  export default Form

    // <form onSubmit={handleSubmit}>
    //   <input type="text" onChange={handleChange} value ={props.search} name="search"/>
    //   <input type="submit" value="search"/>
    //       </form>