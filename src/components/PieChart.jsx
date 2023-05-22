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
);

function ourSeller(objects, props, sources, total) {
    total = objects.length;
    const soldBySource = objects.filter(object => object[props] === sources).length;
    const sourcePercentage = Math.round( ( soldBySource / total ) * 100 );
    return sourcePercentage;
}

const PieChart = () => {
    const products = useContext(DataContext);
    const totalProduct = products.length;
    // console.log(totalProduct);
    
    const daraz = ourSeller(products, 'seller_name', 'Daraz', totalProduct);
    const bikroy = ourSeller(products, 'ad_category', 'Bikroy.com', totalProduct);
    const pickaboo = ourSeller(products, 'seller_name', 'Pickaboo', totalProduct);

    /* console.log('daraz', daraz);
    console.log('bikroy', bikroy);
    console.log('pickaboo', pickaboo); */


    /* const daraz = products.filter(product => product.seller_name === 'Daraz');
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

    console.log('daraz', daraz.length);
    console.log('bikroy', bikroy.length);
    console.log('pickaboo', pickaboo.length); */
    
    // data for pie chart
    const data = {
        labels: ['Daraz', 'Bikroy', 'Pickaboo'],
        datasets: [
            {
                // data: [darazPercentage, bikroyPercentage, pickabooPercentage],
                data: [daraz, bikroy, pickaboo],
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