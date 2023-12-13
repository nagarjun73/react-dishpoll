const dishesReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_DISH": {
      return { ...state, dishesList: action.payload }
    }

    case "UPDATE_ALL_VOTES": {
      //check if user votes available in all votes
      const findUserVote = state.allVotes.find((ele) => ele.userId == action.payload.userId)
      if (findUserVote) {
        return {
          ...state, allVotes: [...state.allVotes.map((ele) => {
            if (ele.userId == action.payload.userId) {
              return action.payload
            } else {
              return ele
            }
          })]
        }
      } else {
        return { ...state, allVotes: [...state.allVotes, action.payload] }
      }
    }

    case "GET_ALLVOTES": {
      return { ...state, allVotes: action.payload }
    }

    default: {
      return { ...state }
    }
  }
}

module.exports = dishesReducer