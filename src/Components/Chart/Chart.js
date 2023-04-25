import "./Chart.css"
import ChartBar from "./ChartBar"
const Chart = props =>{

    const dataPointsValue= props.dataPoints.map(dataPoints=> dataPoints.value)
    const totalMax = Math.max(...dataPointsValue)
     
    return(
        <div className="chart">
        {
            props.dataPoints.map( dataPoints => <ChartBar  
            key ={dataPoints.key}
            value ={dataPoints.value}
            maxValue={totalMax}
            label={dataPoints.label}

            />
        )}
        </div>
    )
}

export default Chart