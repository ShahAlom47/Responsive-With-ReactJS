
import { LineChart, Line, CartesianGrid, YAxis, XAxis, Tooltip, BarChart, Bar, Pie, PieChart, AreaChart, Area } from 'recharts';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Audio } from 'react-loader-spinner';


const LineCharts = () => {
    const [datas, setDatas] = useState([]);

    useEffect(() => {

        axios.get('pricingData.json')
            .then(data => setDatas(data.data.pricingOptions))
    }, [])



    return (
        <div>
            <div className='bg-gray-200 p-5 rounded-lg flex justify-between'>
                <LineChart width={500} height={400} data={datas} className='p-4  bg-white rounded-xl'>
                    <Line type="monotone" dataKey="price" stroke="#ff00b7" />
                    <CartesianGrid stroke="#ccc" />
                    <YAxis></YAxis>
                    <XAxis dataKey="id"></XAxis>
                    <Tooltip></Tooltip>
                </LineChart>

                <BarChart width={500} height={400} data={datas} className='p-4  bg-white rounded-xl'>
                    <YAxis></YAxis>
                    <XAxis dataKey="id"></XAxis>
                    <Tooltip></Tooltip>
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <Bar dataKey="price" fill="#8884d8" barSize={50} />
                </BarChart>
            </div>
            <div className='bg-gray-200 p-5 rounded-lg flex justify-between'>
                <PieChart width={500} height={500} className='p-4  bg-white rounded-xl'>
                    <Pie data={datas} dataKey="price" nameKey="name" cx="50%" cy="50%" outerRadius={150} fill="#8884d8" />
                    <Pie data={datas} dataKey="price" nameKey="name" cx="50%" cy="50%" innerRadius={180} outerRadius={200} fill="#82ca9d" label />
                </PieChart>
                <AreaChart width={500} height={500} data={datas}
                    className='p-4  bg-white rounded-xl'
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="8 3" />
                    <Tooltip />
                    <Area type="monotone" dataKey="price" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                    <Area type="monotone" dataKey='price' stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                </AreaChart>
            </div>

            <Audio
                height="80"
                width="80"
                radius="9"
                color="green"
                ariaLabel="three-dots-loading"
                wrapperStyle
                wrapperClass
            />
            

        </div>
    );
};

export default LineCharts;