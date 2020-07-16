import React, {useContext, useEffect} from 'react';
import {GithubContext} from "../../context/github/github-context";
import {Link} from "react-router-dom";
import Repo from "../../components/repo/repo";

const Profile = ({match}) => {
  const {getUser, getRepo, loading, user, repo} = useContext(GithubContext)
  const urlName = match.params.name

  useEffect(() => {
    getUser(urlName)
    getRepo(urlName)
    // eslint-disable-next-line
  }, [])

  if (loading) {
    return <p className="text-center">Loading...</p>
  }

  const {
    name, company, avatar_url,
    location, bio, blog,
    login, html_url, followers,
    following, public_repos, public_gists
  } = user

  return (
    <>
      <Link to="/" className="btn btn-link">Home page</Link>

      <div className="card mb-4">
        <div className="row">
          <div className="col-sm-3 text-center">
            <img
              src={avatar_url}
              alt={name}
              style={{width: '150px'}}
            />
            <h3>{name}</h3>
            {location && <p>Location: {location}</p>}
          </div>
          <div className="col">
            {
              bio && <>
                <h3>BIO:</h3>
                <p>{bio}</p>
              </>
            }
            <a
              href={html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-dark"
            >Open profile</a>
            <ul>
              {login && <li>
                <strong>Username: </strong> {login}
              </li>}

              {company && <li>
                <strong>Company: </strong> {company}
              </li>}

              {blog && <li>
                <strong>Website: </strong> {blog}
              </li>}
            </ul>

            <div className="badge badge-primary">Followers: {followers}</div>
            <div className="badge badge-success">Following: {following}</div>
            <div className="badge badge-info">Repositories: {public_repos}</div>
            <div className="badge badge-dark">Gists: {public_gists}</div>
          </div>
        </div>
      </div>
      <Repo repo={repo} />
    </>
  );
};

export default Profile;
