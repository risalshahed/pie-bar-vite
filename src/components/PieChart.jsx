import { useContext } from "react";
import { DataContext } from "../App";
import './Home.css';

import { ArcElement, Chart, Legend, Tooltip } from "chart.js";

// this import should be AFTER the import of 'chart.js'
import { Pie } from "react-chartjs-2";

Chart.register (
    ArcElement,
    Tooltip,
    Legend
)

const PieChart = () => {
    const products = useContext(DataContext);
    const totalProduct = products.length;
    // console.log(totalProduct);
    
    const daraz = products.filter(product => product.seller_name === 'Daraz');
    // console.log('Daraz', daraz.length);
    const soldByDaraz = daraz.length;
    const darazPercentage = Math.round( ( soldByDaraz / totalProduct ) * 100 );
    
    const bikroy = products.filter(product => product.ad_category === 'Bikroy.com');
    // console.log('Bikroy', bikroy.length);
    const soldByBikroy = bikroy.length;
    const bikroyPercentage = Math.round( ( soldByBikroy / totalProduct ) * 100 );
    
    const pickaboo = products.filter(product => product.seller_name === 'Pickaboo');
    // console.log('Pickaboo', pickaboo.length);
    const soldByPickaboo = pickaboo.length;
    const pickabooPercentage = Math.round( ( soldByPickaboo / totalProduct ) * 100 );
    
    // data for pie chart
    const data = {
        labels: ['Daraz', 'Bikroy', 'Pickaboo'],
        datasets: [
            {
                data: [darazPercentage, bikroyPercentage, pickabooPercentage],
                backgroundColor: ['#84AF27', '#0095A0', '#FFC239']
            }
        ]
    }

    const options = {
        plugins: {
            legend: {
                display: true,
                position: 'right',                
            }
        }
    }
    
    return (
        <div id="pie">
            <Pie
                data={data}
                options={options}
            />




            {
                // products.filter(product => product.seller_name === 'Pickaboo' && console.log(product.seller_name.length))
                // products.map(product => console.log(product))
            }
            {/* <Chart
                chartType="PieChart"
                data={products.map(product => product.seller_name)}
                options={options}
                width={"100%"}
                height={"400px"}
            /> */}
        </div>
    );
};

export default PieChart;