import React from "react";
import './App.css'

const Choice=(props)=>{
    if(props.job===0){
        return(
            <tr>
                <td>
                    <table className="ex">
                        <tr> <td> Schlumberger </td> </tr>
                        <tr><td><span className="company"></span></td></tr>
                        <tr> <td>TNG-Group</td></tr>
                    </table>
                </td>
                <td>
                    <table className="ex">
                        <tr><td>Okhotsk Sea Shelf</td></tr>
                        <tr><td><span></span></td></tr>
                        <tr><td>Caspian Sea</td></tr>
                        <tr><td><span></span></td></tr>
                        <tr><td>Irkutsk Region</td></tr>
                    </table>
                </td>
                <td>Mudlogging Technician</td>
                <td className='desc'>
                Operate the computerized mud-logging system to timely detect formation fluid kicks and/or mud losses 
                during borehole drilling and pipe trips. Collect and describe drill cuttings. Maintain gas analyzer, 
                sensors, probes. Rig up and rig down the mud-logging system during relocation
                </td>
            </tr>
        )
    }
    if(props.job===-1){
        return(
            <tr>
                <td>
                    Radial Drilling Services
                </td>
                <td>
                    <table className="ex">
                        <tr><td>Orenburg Region</td></tr> <tr><td>Perm Region</td></tr>
                    </table>
                </td>
                <td>Coil-tubing Unit Operator</td>
                <td className="desc">
                    Operate a truck-based coil-tubing unit to make 100-meter-long channels in depleted reservoirs 
                    to increase their recovery rate. Such channels were made by a water jet injected through coli-tubing
                    and a hose under a high pressure build up by high-performance pumps
                </td>
            </tr>
        )
    }
    if(props.job===-2){
        return(
            <tr>
            <td>
                Tatoilgas
            </td>
            <td>
                Tatartstan Republic
            </td>
            <td>Oil Production Operator</td>
            <td className="desc">
            Daily check group metering stations, pumping units and pipelines, take instrumentation readings. 
            Weekly sample well-bore fluids. Timely replace worn glands and drive belts of pumping units
            </td>
        </tr>
        )
    }
}

export default Choice