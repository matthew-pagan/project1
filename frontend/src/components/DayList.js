import { Link } from "react-router-dom"
import "../App.css"

function DayList (props) {
  
  const renderDays = () => {
    if (!props.days) {
      return 'Hello there is nothing' // change to null when done
    }
    
    // figure out how to list only the days of the specific week page
    return props.days.map((day, index) => {
      return (
        <ul class="no-bullet" key={index}>
          <li><Link to={`day/${day.day_number}/`}>DAY { day.day_number.slice(-1) }</Link></li>
        </ul>
      )
    })
  }
  
  console.log(props.days) 
  // console.log("Days in DayList:", props.days);  // delete when done testing

  return (
    <div>
      <h3>Pick the Day</h3>
    <ul>{ renderDays() }</ul>
    </div>
  )
}

export default DayList