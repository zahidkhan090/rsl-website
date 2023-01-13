import React, { Component } from 'react';

class Content extends Component {
    render() {
        return (

            <>

<div className="partner-area app-partner py-5" style={{backgroundColor: "#12282B",}}>
            
            <div class="container py-5" >
                <h1 className='py-5' style={{color: "white", textAlign:"center"}}>Our Partner's</h1>
  
            
            <div class="row" >
                <div class="card col-md-3" style={{backgroundColor: "#12282B",}}>
                    <img class="card-img-top" src="/images/Emirates-logo.png"/>
  
                    <div class="card-body">
                        <h3 class="card-title" style={{color: "white", textAlign:"center"}}>Emirates</h3>
                      
                    </div>
                </div>
  
                <div class="card col-md-3" style={{backgroundColor: "#12282B",}}>
                <img class="card-img-top" src="/images/Emmar-logo.png"/>
                      
                    <div class="card-body">
                        <h3 class="card-title" style={{color: "white", textAlign:"center"}}>Emaar</h3>
                    </div>
                </div>
                  
                <div class="card col-md-3" style={{backgroundColor: "#12282B",}}>
                <img class="card-img-top" src="/images/Majid1-logo.png"/>
                      
                    <div class="card-body">
                        <h3 class="card-title " style={{color: "white", textAlign:"center"}}>Majid Al Futtaim</h3>
                    </div>
                </div>

                <div class="card col-md-3" style={{backgroundColor: "#12282B",}}>
                <img class="card-img-top" src="/images/Marhaba-logo.png"/>
                      
                    <div class="card-body">
                        <h3 class="card-title" style={{color: "white", textAlign:"center"}}>Marhaba</h3>
                    </div>
                </div>
            </div>
        </div>
        </div>
              
                
           </>
        );
    }
}

export default Content;
