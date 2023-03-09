const BASE_URL = "http://127.0.0.1:8000/workouts/"  

const tryCatchFetch = async (url) => {

  const token = localStorage.getItem("token")
  
  const headers = {}
  if (token) {
    headers.Authorization = `Token ${token}`;
    // console.log(headers, "This is our header token data1") // remove when done
  }

  try {
    // console.log(headers, "This is our header token data2") // remove when done
    const response = await fetch(url, {headers})
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

const fetchProfiles = async () => {
  const url = BASE_URL + "profiles/"
  return await tryCatchFetch(url);
}

const fetchProfilesByID = async (userID) => {
  const url = BASE_URL + `profile/${userID}/`  // "profile/`${userID}`"
  return await tryCatchFetch(url);
}


const exportItems = {
  fetchWeeks,
  fetchProfiles,
  fetchProfilesByID
}

export default exportItems