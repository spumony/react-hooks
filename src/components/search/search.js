import React, {useContext, useState} from 'react';
import {AlertContext} from "../../context/alert/alert-context";
import {GithubContext} from "../../context/github/github-context";

const Search = () => {
  const [value, setValue] = useState('')
  const {show} = useContext(AlertContext)
  const github = useContext(GithubContext)

  const onSubmit = event => {
    if (event.key !== 'Enter') {
      return
    }

    if (value.trim()) {
      github.search(value.trim())
    } else {
      show('Enter user data!')
    }
  }

  return (
    <div className="form-group">
      <input
        type="text"
        className="form-control"
        placeholder="Enter user nick..."
        value={value}
        onChange={event => setValue(event.target.value)}
        onKeyPress={onSubmit}
      />
    </div>
  );
};

export default Search;
