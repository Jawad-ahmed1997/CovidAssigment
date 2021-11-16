import React, { useEffect, useState } from 'react'
import {useLocation} from 'react-router';


function SearchResult() {
    
    const [geted,setgeted]=useState([])
    const location = useLocation();
    useEffect(() => {
        setgeted(location.state)
    }, [])

    return (
        <div>
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
                {geted.map((e,i)=>(
                <tr>
                
                    <td >{e.state}</td>
                    <td >{e.positive}</td>
                    <td >{e.negative}</td>
                    <td >{e.recovered}</td>
                    <td >{e.death}</td>
                </tr>
                ))}
                </tbody>
            </table>
         
        </div>
    )
}

export default SearchResult;
