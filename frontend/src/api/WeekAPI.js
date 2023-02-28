const BASE_URL = "http://127.0.0.1:8000/workouts/"  // ??????????


const tryCatchFetch = async (url, init = null) => {

  try {
    const response = await fetch(url, init)
    if (response.ok) {
      return await response.json()
    }
    else {
      throw new Error(`Bad response: ${response.status} ${response.statusText}`)
    }
  }
  catch (e) {
    console.error(e)
    return null
  }
}

const fetchWeeks = async () => {
  const url = BASE_URL
  // console.log("Fetching weeks from API..."); // Delete this line when done testing
  return await tryCatchFetch(url);
  // console.log("Response from API:", response); // Delete this line when done testing
}

// const fetchWeekByNumber = async (week_number) => {
//   const url = BASE_URL + `${week_number}`
//   return await tryCatchFetch(url)
// }

const exportItems = {
  fetchWeeks,
  // fetchWeekByNumber,
}

export default exportItems