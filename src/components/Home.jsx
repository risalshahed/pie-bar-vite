import PieChart from './PieChart';
import BarChart from './BarChart';

const Home = () => {
    return (
        <>
            <div id='titles'>
                <h2 id='src'>Sources</h2>
                <h2 id='cndt'>Conditions</h2>
            </div>
            <div className='home'>
                <PieChart />
                <BarChart />
            </div>
        </>
    );
};

export default Home;