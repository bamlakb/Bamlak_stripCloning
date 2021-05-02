import React from 'react'

const HeaderLinks =() =>{


    return(
        <div className="navigation_list">
            <div className="navbar">
           <a href="#" className= "logo_icon">Strip</a>
           
            <nav>
            <svg  className="ham" viewBox="0 0 100 80" width="40" height="40">
  <rect width="100" height="20"></rect>
  <rect y="30" width="100" height="20"></rect>
  <rect y="60" width="100" height="20"></rect>
</svg>
            
                <div class="close-icon-container">
  <span class="close-icon">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" enable-background="new 0 0 40 40">
      <line x1="15" y1="15" x2="25" y2="25" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-miterlimit="10"></line>
      <line x1="25" y1="15" x2="15" y2="25" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-miterlimit="10"></line>    
      <circle class="circle" cx="20" cy="20" r="19" opacity="0" stroke="#000" stroke-width="2.5" stroke-linecap="round" stroke-miterlimit="10" fill="none"></circle>
      <path d="M20 1c10.45 0 19 8.55 19 19s-8.55 19-19 19-19-8.55-19-19 8.55-19 19-19z" class="progress" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-miterlimit="10" fill="none"></path>
    </svg>
  </span>
</div>
                
               <ul  className="show-desktop hide-mobile" id="nav">
                   
                    <li>     <a href="#">Home</a>      </li>
                    <li>     <a href="#">Services</a>  </li>
                    <li>     <a href="#">About</a>     </li>
                    <li>     <a href="#">Contact</a>    </li>
                </ul>
            </nav>
            
            
           
           
         
    
</div> 
</div>       
    
      )


}

export default HeaderLinks