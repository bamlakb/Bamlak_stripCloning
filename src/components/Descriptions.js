import React from 'react'



const Descriptions =()=>{

    return(

      
                  <div className="title">
            <div className="title_box">
                <h1>Pricing built for businesses of all sizes. <span className="headerSpan">Always know what you’ll pay.</span></h1>
            </div>
            <div className ="Descripton_Box">
            <div className="First_Description_Box">
        <div className="First_Description_Box_Standard">
            <h2 className="First_Description_Title">Intergated</h2>
            <div className="First_Description_Intergated">
                 Access a complete payments platform with simple, pay-as-you-fo pricing.
                
            </div>
            <div className="First_Description_Box_Price">
            <div className="First_Description_Box_Price_Rate">
                <div className="First_Description_Box_Price_RatePercent">
                    2.9% +
                    
                </div>
                <div className="plan-cardRate-plus"> +</div>
                <div className="First_Description_Box_Price_cents_sign">
                  30¢
               
               </div>

                <div className="First_Description_Box_Price_Description">
                    <p> per succesful card charge</p>
                   
                </div>

           
            <ul className="First_Description_Box_List">
                <li className="Box_ListItem"><img src="../public/logo512.png" alt=""/>Everything you need to manage payments</li>
                <li className="Box_ListItem"><img src="../images/ham.svg" alt=""/>get hundreds of feature update</li>
                <li className="Box_ListItem"><img src="" alt=""/>no setup fees, monthly fees, or hidden fee</li>

            
                <a href='#' className="First_Description_Box_Button"> Get started in minutes</a>
                </ul>
            
            
            </div>
            </div>
        </div>
        </div>
            <div className="Second_Description">
            <div className="Second_Description_Box_Standard">

                <h2 className ="Second_Description_Title" ><p>Customized</p> </h2>
                <div className="Second_Description_advert"><p>Design a custom package for you buisness</p></div>
                <div className="Second_Description_advertDesc"> <p>Available for buisness with large payments volume or unique buisness models</p></div>
                <div className="TableContainer">
                    <table className="advert_Table">
                        <tbody>
                            <tr className="advert_Table_Row">
                                <td className="advert_table_Row_one_data_one">Volume Discount</td>
                                <td className="advert_table_Row_one_data_two ">Country-specific -rates</td>
                            </tr>
                            <tr className="advert_Table_Row">
                                <td className="advert_table_Row_two_data_one">Multi-product-discount</td>
                                <td className="advert_table_Row_two_data_two">Interchanging price</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <a href="#" className="Second_Description_Box_Button">Contact Sales </a>
            </div>
            </div>
        </div>
             </div>
               
        
        
      
       

    )
}
export default Descriptions