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


// help of chat gpt
function calculateAverageByKey(objects, key) {
    // ASSOCIATIVE_ARRAY
    // Extract values of the specific key into a new array
    const values = objects.map(obj => obj[key]);

    // Calculate the sum of all values
    const sum = values.reduce( (previous, current) => previous + current, 0 );

    // Divide the sum by the number of values to get the average
    const average = sum / values.length;

    return average;
}

/* function priceOfEachCategory(category, objects, props, callback) {
    category = objects.filter(object => object[props]);
    let price;
    category && ( price = callback(category, 'phone_price') );
    return price;
} */


// help of chat gpt
function calculatePrice(objects, props) {
    const filteredObjects = objects.filter(object => object[props]);
    let price;
    filteredObjects && (
        price = calculateAverageByKey(filteredObjects, 'phone_price')
    );
    return price;
}

const BarChart = () => {
    const products = useContext(DataContext);

    const officialWarrantyPrice = calculatePrice(products, 'official_warranty');
    console.log('office', officialWarrantyPrice);

    const unofficialWarrantyPrice = calculatePrice(products, 'unofficial_warranty');
    console.log('unoffice', unofficialWarrantyPrice);

    const withoutWarrantyPrice = calculatePrice(products, 'no_warranty');
    console.log('without', withoutWarrantyPrice);

    const usedPhonePrice = calculatePrice(products, 'no_warranty');
    console.log('used', usedPhonePrice);

    /* const official = priceOfEachCategory(official, products, 'official_warranty', calculateAverageByKey);
    const unofficial = priceOfEachCategory(unofficial, products, 'unofficial_warranty', calculateAverageByKey);
    const without = priceOfEachCategory(without, products, 'no_warranty', calculateAverageByKey);
    const used = priceOfEachCategory(used, products, 'used_phone', calculateAverageByKey);

    console.log('official', official);
    console.log('unofficial', unofficial);
    console.log('without', without);
    console.log('used', used); */

    /* const official = products.filter(product => product.official_warranty);
    let officialWarrantyPrice;
    official && ( officialWarrantyPrice = calculateAverageByKey(official, 'phone_price') );
    console.log(officialWarrantyPrice);

    const unofficial = products.filter(product => product.unofficial_warranty);
    let unofficialWarrantyPrice;
    if(unofficial) {
        unofficialWarrantyPrice = calculateAverageByKey(unofficial, 'phone_price');
    }
    console.log(unofficialWarrantyPrice);

    const without = products.filter(product => product.no_warranty);
    let withoutWarrantyPrice;
    if(without) {
        withoutWarrantyPrice = calculateAverageByKey(without, 'phone_price');
    }
    console.log(withoutWarrantyPrice);

    const used = products.filter(product => product.used_phone);
    let usedPhonePrice;
    if(used) {
        usedPhonePrice = calculateAverageByKey(used, 'phone_price');
    }
    console.log(usedPhonePrice); */


    // console.log(used.length);

    const data = {
        labels: ['Official', 'Unofficial', 'Without warranty', 'Used'],
        datasets: [
            {
                label: 'features',
                // data: [officialWarrantyPrice, unofficialWarrantyPrice, withoutWarrantyPrice, usedPhonePrice],
                data: [officialWarrantyPrice, unofficialWarrantyPrice, withoutWarrantyPrice, usedPhonePrice],
                backgroundColor: '#0095A0'
            }
        ]
    }

    const options = {

    }

    return (
        <div id='bar'>
            <h2>Bar</h2>
            <Bar
                data={data}
                options={options}
            />
        </div>
    );
};

export default BarChart;