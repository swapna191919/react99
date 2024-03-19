const JsxFunctional =()=>{
    

        const object={
            name:"swapna",
            age: 23,
            width:100,
            height:100
        }
    
    
        return(
            
            <div>
    <h2>this is functional jsx code</h2>
      
    
            <h3>
              Good morning  {object.name}
              
            </h3>
            <h3 className="hello" >{object.name}</h3>
            <button onClick={()=>{}} >click</button>
            <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" width={object.width} height={object.height}></img>
            <>
      {/* Hello world */}
      <div className="awesome" style={{ border: "1px solid red" }}>
        <label htmlFor="name">Enter your name: </label>
        <input type="text" id="name" />
      </div>
      <p>Enter your HTML here</p>
    </>
    
            </div>
    
        )
    }
    
    export default JsxFunctional
