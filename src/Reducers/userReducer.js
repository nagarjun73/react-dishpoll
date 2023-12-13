//reducer fuction
const userReducer = (state, action) => {
  switch (action.type) {
    case "LOG_IN": {
      return { ...state, loggedInUser: action.payload }
    }

    case "GET_MY_VOTES": {
      return { ...state, myVotes: action.payload }
    }

    case "UPDATE_VOTE": {
      const findIfRankFilled = state.myVotes.find((ele) => ele.rank === action.payload.rank)

      if (findIfRankFilled) {
        return {
          ...state, myVotes: [...state.myVotes.map((ele) => {
            if (ele.rank === action.payload.rank) {
              return action.payload
            } else {
              return ele
            }
          })]
        }
      } else {
        return { ...state, myVotes: [...state.myVotes, action.payload] }
      }
    }

    default: {
      return { ...state }
    }
  }
}

export default userReducer