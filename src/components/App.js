import React from "react" 
import HeaderLinks from "./HeaderLinks"
import Descriptions from "./Descriptions"
import LocalNavigation from "./LocalNavigation"
import FeatureInfo from "./FeatureInfo"
import Payments from "./Payments"
import Secondpayment from "./Secondpayment"
import Package from "./Package"


const App = () => {
    
    return (
        <div>
              <HeaderLinks />
              
        <Descriptions />
        < LocalNavigation/>
        <FeatureInfo />
        <Payments />
        <Secondpayment />
        <Package />
      
        
        
        
        
        
        
        
        </div>
       
     
      
    )
  }

  export default App