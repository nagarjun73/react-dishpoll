import axios from "axios"

const getInitialData = (userDispatch, disheDispatch) => {
  const userPresent = localStorage.getItem('loggedUser')
  if (userPresent) {
    const currentUser = JSON.parse(localStorage.getItem('loggedUser'))
    userDispatch({ type: "LOG_IN", payload: currentUser })

    const allVotes = localStorage.getItem('allVotes')
    if (allVotes) {
      const votes = JSON.parse(localStorage.getItem('allVotes'))
      disheDispatch({ type: "GET_ALLVOTES", payload: votes });

      const userVotes = votes.find((ele) => ele.userId === currentUser.id)
      console.log(userVotes);
      if (userVotes) {
        userDispatch({ type: "GET_MY_VOTES", payload: userVotes.votes })
      }
    }
  }

  ((async () => {
    const dishes = await axios.get('https://raw.githubusercontent.com/syook/react-dishpoll/main/db.json')
    disheDispatch({ type: "UPDATE_DISH", payload: dishes.data });
  })())
}

export default getInitialData