import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import active from '../images/activecases.png'
import dignose from '../images/diagnosed-cases.png'
import deaths from '../images/deaths.png'
import recover from '../images/recovered.png'
import '../App.css'
import { useNavigate } from "react-router";

function Api() {
    const [dt, setdt] = useState([])
    const navigate=useNavigate({});
    
    const findbyfilterdata=(st)=>{
        let found =dt.filter(e=>(e.state===st))
        navigate('/SearchResult',{state:found});
        console.log(found)
    }

    let apiHandle = axios.create({
        baseURL: 'https://api.covidtracking.com/v1/states/current.json'
    });
    const getData = () => {
        apiHandle.get('').then((e) => {
            console.log(e.data)
            setdt(e.data);
        })
    }
    useEffect(() => {
        getData();
    }, [])
    return (
        <div className="d-flex align-items-center justify-content-center flex-column w-100">
            <div className="w-100 "><select className="bg-dark text-light btn-group btn mt-3 mb-3"
             style={{paddingRight:"100px",paddingLeft:"100px"}}
              onChange={(e)=>findbyfilterdata(e.target.value)}>
               { 
               dt.map(e=>(
                <option>
                    {e.state}
                </option>   
                ))
                }
            </select></div>
            <div className="w-100">
                {dt.map((e,i)=>(
                    <>
               <div className=" w-100 mt-3 mb-3 d-flex justify-content-around align-items-center flex-row">
               <div className="d-flex justify-content-center align-items-center flex-column">
               <h1>
                   {e.state}
                </h1>
                <div className="w-100 d-flex justify-content-around align-items-center flex-row">
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
               </div>
               </div>
               </>

                ))}
                </div>
            
            
        </div>
    )
}

export default Api
