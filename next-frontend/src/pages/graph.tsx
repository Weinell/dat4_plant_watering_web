import { type NextPage } from "next";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis } from 'recharts';
import { useEffect, useState } from "react";


const data = [
    {
        month: 'January',
        beers: 1,
    },
    {
        month: 'February',
        beers: 4,
    },
    {
        month: 'March',
        beers: 5,
    },
    {
        month: 'April',
        beers: 8,
    },
    {
        month: 'May',
        beers: 6,
    },
    {
        month: 'June',
        beers: 6,
    },
    {
        month: 'July',
        beers: 22,
    },
    {
        month: 'August',
        beers: 14,
    },
    {
        month: 'September',
        beers: 6,
    },
    {
        month: 'October',
        beers: 10,
    },
    {
        month: 'November',
        beers: 2,
    },
];



const Graph: NextPage = () => {
    return (
        <div>
            <h1>Graph</h1>

            <ResponsiveContainer width="60%" height="100%">
                <LineChart width={500} height={400} data={data}>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Line type="monotone" dataKey="beers" stroke="#8884d8" />
                </LineChart>
            </ResponsiveContainer>

        </div>
    )
}

export default Graph
