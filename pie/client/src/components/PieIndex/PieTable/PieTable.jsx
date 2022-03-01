import React, { useState, useEffect } from 'react';
import { APIURL, EndPoints } from '../../endpoints';
import PieRow from './PieRow/PieRow';
import './PieTable.css';


const PieTable = (props) => {
    const [pies, setPies] = useState([])

    useEffect(() => {
        fetchPies();
    }, [props.refreshPieTable]);
    async function fetchPies(){
        const requestOptions = {
            method: "GET",
            headers: new Headers({
                "Content-Type": "application/json",
                "Authorization": props.token
            }),
        };

        try{
            const response = await fetch(APIURL+EndPoints.pie.getAllPies, requestOptions)
            const data = await response.json();

            console.log(data);
            setPies(data);
            }catch(err){
                console.error(err)
            }
        }
    return ( 
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name of Pie</th>
                        <th>Base of Pie</th>
                        <th>Crust</th>
                        <th>Time to Bake</th>
                        <th>Servings</th>
                        <th>Rating</th>
                    </tr>
                </thead>
                <tbody>
                    {pies.map(pie => (
                    <PieRow pie={pie}/>

                    ))}
                </tbody>
            </table>
        </div>
     );
}
 
export default PieTable;