import { React, PureComponent } from "react";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';



export default class  FinPerformanceGraph extends PureComponent {
    render() {
        return (
            <ResponsiveContainer width="300px" height="100px">
                <BarChart width={150} height={40} data={this.props.data}>
                    <XAxis type="category" dataKey="name"/>
                    <Bar dataKey="amt" fill="#9f551d"/>
                </BarChart>
            </ResponsiveContainer>
        )
    }
}

