import { Link } from "react-router-dom"

function WeekList (props) {

  const renderWeeks = () => {
    if (!props.weeks) {
      return 'Hello there is nothing'  // change to null when done testing
    }
    
    return props.weeks.map((week, index) => {
      return (
        <ul key={index}>
          <li><Link to={`week/${week.week_number}/`}>WEEK { week.week_number }</Link></li>
        </ul>
      )
    })
  }

  // console.log("Weeks in WeekList:", props.weeks);  // delete when done testing

  return (
    <div>
      <h3>Pick the Week</h3>
    <ul>{ renderWeeks() }</ul>
    </div>
  )
}

export default WeekList