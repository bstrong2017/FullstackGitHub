import React from "react";
import Event from './Event'

const Calendar = () => {
    return (
        <div className="Calendar">
            <table>
                <thead>
                    <tr>
                        <th></th> {/* Empty header for the leftmost column */}
                        <th>Sunday</th>
                        <th>Monday</th>
                        <th>Tuesday</th>
                        <th>Wednesday</th>
                        <th>Thursday</th>
                        <th>Friday</th>
                        <th>Saturday</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="time">Insert Time</td>
                        <td>8 am</td>
                        <td>9 am</td>
                        <td>10 am</td>
                        <td>11 am</td>
                        <td>12 pm</td>
                        <td>1 pm</td>
                        <td>2 pm</td>
                    </tr>
                    {/* Repeat the above block for additional rows if needed */}
                </tbody>
            </table>
        </div>
    )
}

export default Calendar;


