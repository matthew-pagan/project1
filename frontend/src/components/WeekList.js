import { Link } from "react-router-dom"
// import '../App.css';

function WeekList (props) {

  const renderWeeks = () => {
    if (!props.weeks) {
      return 'Hello there is nothing'  // change to null when done testing
    }
    
    return props.weeks.map((week, index) => {
      return (
        <div>
          <div key={index} >
            <p><Link to={`week/${week.week_number}/`}>WEEK { week.week_number }</Link></p>
          </div>
        </div>
      )
    })
  }

  console.log(props.weeks)
  // console.log("Weeks in WeekList:", props.weeks);  // delete when done testing

  return (
    <div>
      <h3>Select the Week</h3>
      <br></br>
      <div className="list-container">
        <p>{ renderWeeks() }</p>
      </div>
      <br></br>
      <br></br>
    </div>
  )
}

export default WeekList