import { type NextPage } from "next";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { useEffect, useState } from "react";


const data = [
    {
        month: 'January',
        beers: 1,
        wines: 0,
    },
    {
        month: 'February',
        beers: 4,
        wines: 0,
    },
    {
        month: 'March',
        beers: 5,
        wines: 0,
    },
    {
        month: 'April',
        beers: 8,
        wines: 0,
    },
    {
        month: 'May',
        beers: 6,
        wines: 2,
    },
    {
        month: 'June',
        beers: 6,
        wines: 0,
    },
    {
        month: 'July',
        beers: 22,
        wines: 4,
    },
    {
        month: 'August',
        beers: 14,
        wines: 0,
    },
    {
        month: 'September',
        beers: 6,
        wines: 4,
    },
    {
        month: 'October',
        beers: 10,
        wines: 1,
    },
    {
        month: 'November',
        beers: 2,
        wines: 3,
    },
];



const Graph: NextPage = () => {
    return (
        <div>
            <h1>Graph</h1>


            <ResponsiveContainer width={1300} height={500}>
                <LineChart width={500} height={400} data={data}>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="beers" stroke="#8884d8" />
                    <Line type="monotone" dataKey="wines" stroke="#FF0000" />
                </LineChart>
            </ResponsiveContainer>
            </div>


    )
}

export default Graph
