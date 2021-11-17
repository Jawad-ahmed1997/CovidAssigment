import React, { useEffect, useState } from 'react'
import {useLocation} from 'react-router';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import active from '../images/activecases.png'
import dignose from '../images/diagnosed-cases.png'
import deaths from '../images/deaths.png'
import recover from '../images/recovered.png'



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
                    <div className="d-flex justify-content-center align-item-center flex-column w-23 border">
                        <div className=" d-flex justify-content-center align-items-center flex-row">
                            <h5>Conformed Cases</h5>
                            <img src={dignose}/>
                        </div>
                        <div className=" d-flex justify-content-center align-items-center">
                            <h1>{e.totalTestResults}</h1>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center align-item-center flex-column w-23 border">
                        <div className=" d-flex justify-content-center align-items-center flex-row">
                            <h5>Total Deaths</h5>
                            <img src={deaths}/>
                        </div>
                        <div className=" d-flex justify-content-center align-items-center">
                            <h1>{e.death}</h1>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center align-item-center flex-column w-23 border">
                        <div className=" d-flex justify-content-center align-items-center flex-row">
                            <h5>Recovered</h5>
                            <img src={recover}/>
                        </div>
                        <div className=" d-flex justify-content-center align-items-center">
                            <h1>{e.recovered}</h1>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center align-item-center flex-column w-23 border">
                        <div className=" d-flex justify-content-center align-items-center flex-row">
                            <h5>Active cases</h5>
                            <img src={active}/>
                        </div>
                        <div className=" d-flex justify-content-center align-items-center">
                            <h1>{e.positive}</h1>
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
