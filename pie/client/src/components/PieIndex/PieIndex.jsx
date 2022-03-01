import { useState } from "react";
import PieCreate from "./PieCreate/PieCreate";
import PieTable from "./PieTable/PieTable";

const PieIndex = (props) => {
    const [refreshPieTable, setRefreshPieTable] = useState(true);
    return ( 
        <div>
            <PieCreate 
            token={props.token}
            refreshPieTable={refreshPieTable}
            setRefreshPieTable={setRefreshPieTable}
            />
            <PieTable token={props.token} refreshPieTable={refreshPieTable}/>
        </div>
     );
}
 
export default PieIndex;