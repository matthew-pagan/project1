import { Link } from "react-router-dom"
import '../App.css';

function WeekList (props) {

  const renderWeeks = () => {
    if (!props.weeks) {
      return 'Hello there is nothing'  // change to null when done testing
    }
    
    return props.weeks.map((week, index) => {
      return (
        <div className="list-container">
          <ul class="no-bullet" key={index} >
            <li><Link to={`week/${week.week_number}/`}>WEEK { week.week_number }</Link></li>
          </ul>
        </div>
      )
    })
  }

  console.log(props.weeks)
  // console.log("Weeks in WeekList:", props.weeks);  // delete when done testing

  return (
    <div>
      <h3>Pick the Week</h3>
      <div className="list-container">
        <ul>{ renderWeeks() }</ul>
      </div>
    </div>
  )
}

export default WeekList