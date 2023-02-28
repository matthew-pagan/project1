const BASE_URL = "http://127.0.0.1:8000/workouts/" // ??????????

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

const fetchDays = async () => {
  const url = BASE_URL //+ `${day_number}` ?????????
  // console.log("Fetching days from API..."); // Delete this when done testing
  return await tryCatchFetch(url);
  // console.log("Response from API:", response); // Delete this when done testing
}

const fetchDayByNumber = async (day_number) => {
  const url = BASE_URL + `${day_number}` // ?????????
  return await tryCatchFetch(url)
}

const exportItems = {
  fetchDays,
  fetchDayByNumber,
}

export default exportItems