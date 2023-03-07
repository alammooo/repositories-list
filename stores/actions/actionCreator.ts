import axios from "axios"

export function fetchRepository() {
  return async (dispatch: (arg0: { type: string; payload: any }) => void) => {
    try {
      const response = await axios(
        "https://api.github.com/users/sandhikagalih/repos?per_page=6&sort=updated",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      )

      if (response.status === 200) {
        dispatch({
          type: "FETCH_REPOS",
          payload: response.data,
        })
      }
    } catch (error) {
      console.log(error)
    } finally {
    }
  }
}
