import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
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
            <table className="table shadow table-bordered">
                <thead className="table-active">
                <tr>
                    <th>State</th>
                    <th>Positive</th>
                    <th>Negative</th>
                    <th>Recovered</th>
                    <th>Detath</th>
                </tr>
                </thead>
                <tbody>
                {dt.map((e,i)=>(
                <tr>
                
                    <td >{e.state}</td>
                    <td >{e.positive}</td>
                    <td >{e.negative}</td>
                    <td >{e.recovered}</td>
                    <td >{e.death}</td>
                </tr>
                ))}
                </tbody>
            </table></div>
            
            
        </div>
    )
}

export default Api
