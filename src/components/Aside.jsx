import randomColor from 'randomcolor'

function Aside({color , setColor}) {
    
    const newColor = randomColor()

    const changeColor = () =>{
        setColor(newColor)
    }

    return (
      <div className="aside">
        <h2 style={{color}}> Aside</h2>
        <button onClick={changeColor}>Change Color</button>
      </div>
    );
  }
  
  export default Aside;