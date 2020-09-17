import React, {Fragment, useContext} from "react";
import Search from "../components/Search";
import Card from "../components/Card";
import {GithubContext} from "../context/github/githubContext";

const Home = (props) => {
  const {loading, users} = useContext(GithubContext)

  return (
    <Fragment>
      <Search/>
      <div className="row">
        {loading
          ?<p className="text-center">Загрузка</p>
          :users.map((user)=>{return (
            <div className="col-sm-4 mb-4" key={user.id}>
              <Card user={user}/>
            </div>
          )})
        }
      </div>

    </Fragment>
  );
}

export default Home;