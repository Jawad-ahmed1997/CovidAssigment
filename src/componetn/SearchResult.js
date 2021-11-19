import React, { useEffect, useState } from 'react'
import {useLocation} from 'react-router';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import active from '../images/activecases.png'
import dignose from '../images/diagnosed-cases.png'
import deaths from '../images/deaths.png'
import recover from '../images/recovered.png'
import '../App.css'



function SearchResult() {
    
    const [geted,setgeted]=useState([])
    const location = useLocation();
    useEffect(() => {
        setgeted(location.state)
    }, [])

    return (
        <div>
            <div>
                {geted.map((e,i)=>(
                    <>
                    <div className=" w-100 d-flex justify-content-around align-items-center flex-row">
                    <div className="div_h Conformed d-flex justify-content-center align-item-center flex-column  border">
                        <div className=" d-flex justify-content-center align-items-center flex-row">
                            <h5>Conformed Cases</h5>
                            <img height="100px" width="100px" src={dignose}/>
                        </div>
                        <div className="d-flex justify-content-center align-items-center">
                            <h3>{e.totalTestResults}</h3>
                        </div>
                    </div>
                    <div className=" Deaths div_h d-flex justify-content-center align-item-center flex-column border">
                        <div className=" d-flex justify-content-center align-items-center flex-row">
                            <h5>Total Deaths</h5>
                            <img height="100px" width="100px" src={deaths}/>
                        </div>
                        <div className=" d-flex justify-content-center align-items-center">
                            <h3>{e.death}</h3>
                        </div>
                    </div>
                    <div className="div_h d-flex Recovered justify-content-center align-item-center flex-column  border">
                        <div className=" d-flex justify-content-center align-items-center flex-row">
                            <h5>Recovered</h5>
                            <img height="100px" width="100px" src={recover}/>
                        </div>
                        <div className=" d-flex justify-content-center align-items-center">
                            <h3>{e.recovered}</h3>
                        </div>
                    </div>
                    <div className=" div_h Active d-flex justify-content-center align-item-center flex-column  border">
                        <div className="  d-flex justify-content-center align-items-center flex-row">
                            <h5>Active cases</h5>
                            <img height="100px" width="100px" src={active}/>
                        </div>
                        <div className=" d-flex justify-content-center align-items-center">
                            <h3>{e.positive}</h3>
                        </div>
                    </div>
                    </div>
                    </>
                ))}
                </div>
         </div>
    )
}

export default SearchResult;
