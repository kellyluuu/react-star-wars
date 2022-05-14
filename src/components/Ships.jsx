
function Ships (props){
  //let data=[]
    return  (
      <div className="card-dash">
      {props.starShip.map((el,index)=>(
        <div class="animate__animated animate__jackInTheBox">
        <div key={index} className="card">{el.name}</div>
        </div>
      ))}
      </div>
    )
  }
  
  export default Ships


 