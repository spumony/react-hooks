import React, {useContext} from 'react';
import Search from "../../components/search/search";
import Card from "../../components/card/card";
import {GithubContext} from "../../context/github/github-context";

const Home = () => {

  const {loading, users} = useContext(GithubContext)

  return (
    <>
      <Search />

      <div className="row">

        {loading
          ? <p className="text-center">Loading...</p>
          : users.map(user => (
            <div className="col-sm-4 mb-4" key={user.id}>
              <Card user={user} />
            </div>
          ))
        }
      </div>
    </>
  );
};

export default Home;
