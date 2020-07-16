import React, {useReducer} from "react";
import axios from "axios";
import {GithubContext} from "./github-context";
import {githubReducer} from "./github-reducer";
import {CLEAR_USERS, GET_REPO, GET_USER, SEARCH_USERS, SET_LOADING} from "../types";

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET

const withCreds = url => {
  return `${url}client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
}

export const GithubState = ({children}) => {
  const initialState = {
    user: {},
    users: [],
    loading: false,
    repo: []
  }
  const [state, dispatch] = useReducer(githubReducer, initialState)

  const search = async value => {
    setLoading()

    const response = await axios.get(
      withCreds(`https://api.github.com/search/users?q=${value}&`)
    )

    dispatch({
      type: SEARCH_USERS,
      payload: response.data.items
    })
  }

  const getUser = async name => {
    setLoading()

    const response = await axios.get(
      withCreds(`https://api.github.com/search/users/${name}?`)
    )

    dispatch({
      type: GET_USER,
      payload: response.data
    })
  }

  const getRepo = async  name => {
    setLoading()

    const response = await axios.get(
      withCreds(`https://api.github.com/users/${name}/repo?per_page=5&`)
    )

    dispatch({
      type: GET_REPO,
      payload: response.data
    })
  }

  const clearUsers = () => dispatch({type: CLEAR_USERS})

  const setLoading = () => dispatch({type: SET_LOADING})

  const {user, users, repo, loading} = state

  return (
    <GithubContext.Provider value={{
      search, getUser, getRepo, clearUsers, setLoading,
      user, users, repo, loading
    }}>
      {children}
    </GithubContext.Provider>
  )
}