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
                        <td className="time">8 am</td>
                        <Event event="Fancy Dinner 🎩" color ='green' location='Maple & Ash'/>
                        <td></td>
                        <td><Event event="Salsa Dancing" color ='pink' />
                        </td>
                        <td></td>
                        <td><Event event="Running🏃‍♀️" color ='green' /></td>
                        <td></td>
                        <td><Event event="Workout" color ='yellow' /></td>
                    </tr>
                    <tr>
                        <td className="time">9 am</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td><Event event="Pizza tasting🍕" color ='pink' /></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">10 am</td>
                        <Event event='Math Class' color ='blue' location='Boca'/>
                        <td></td>
                        <td></td>
                        <td><Event event="Science Class" color ='blue' /></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">11 am</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td><Event event="Singing" color ='yellow' /></td>
                    </tr>
                    <tr>
                        <td className="time">12 pm</td>
                        <Event event='Lunch Date' color ='green'/>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">1 pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td><Event event="Wine tasting🍷" color ='green' /></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">2 pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td><Event event="Movies🍿" color ='blue' /></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">3 pm</td>
                        <Event event='Call Mom 📲' color ='pink'/>
                        <td></td>
                        <td></td>
                        <td><Event event="Work💂" color ='green' /></td>
                        <td></td>
                        <td></td>
                        <td><Event event="Coloring🖍️" color ='pink' /></td>
                    </tr>
                    <tr>
                        <td className="time">4 pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">5 pm</td>
                        <Event event='Nap 💤' color ='yellow'/>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Calendar;


