function Header({count ,  color}) {
    return (
      <div className="header">
        <h1 style={{color}}>REDUX Project</h1>
        <h3>  counter : {count} </h3>
      </div>
    );
  }
  
  export default Header;