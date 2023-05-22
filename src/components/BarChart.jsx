import { useContext } from 'react';
import { DataContext } from '../App';

import {
    Chart,
    BarElement,
    CategoryScale,  // x-axis
    LinearScale,    // y-axis
    Tooltip,
    Legend
} from "chart.js";

import { Bar } from 'react-chartjs-2';

Chart.register (
    BarElement,
    CategoryScale,  // x-axis
    LinearScale,    // y-axis
    Tooltip,
    Legend
)


const BarChart = () => {
    const products = useContext(DataContext);
    const official = products.filter(product => product.official_warranty).length;
    // console.log(official.length);

    const unofficial = products.filter(product => product.unofficial_warranty).length;
    // console.log(unofficial.length);

    const without = products.filter(product => product.no_warranty).length;
    // console.log(without.length);

    const used = products.filter(product => product.used_phone).length;
    // console.log(used.length);

    const data = {
        labels: ['Official', 'Unofficial', 'Without warranty', 'Used'],
        datasets: [
            {
                label: 'features',
                data: [official, unofficial, without, used],
                backgroundColor: '#0095A0'
            }
        ]
    }

    const options = {
        
    }

    return (
        <div id='bar'>
            <Bar
                data={data}
                options={options}
            />
        </div>
    );
};

export default BarChart;