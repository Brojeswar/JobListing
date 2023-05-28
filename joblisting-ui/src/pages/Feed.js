import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import Feeditem from "./Feeditem";

const Feed = (props) => {
  const [query, setQuery] = useState("");
  const [jobPosts, setJobPosts] = useState();

  const fetchInitialPosts = async () => {
    const response = await axios.get(`http://localhost:8080/jobposts`);
    setJobPosts(response.data);
  };

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get(
        `http://localhost:8080/jobposts/${query}`
      );
      setJobPosts(response.data);
    };
    if (query.length === 0) fetchInitialPosts();
    if (query.length > 2) fetchPosts();
  }, [query]);

  const deleteItem = (id, e) => {
    e.preventDefault();
    fetch("http://localhost:8080/deletejobpost/" + id, {
      method: "DELETE",
      mode: "cors",
    })
      .then((response) => console.log(response))
      .then(() => {
        fetchInitialPosts();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="feed-div">
      <Navbar user={props.user} page="feed" />
      <div className="feed-container">
        <div className="feed-search-div">
          <input
            className="feed-search"
            type="text"
            placeholder="Search.."
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <div className="feed-item-div">
          {jobPosts &&
            jobPosts.map((jobPost, index) => {
              return (
                <Feeditem
                  key={index}
                  id={jobPost._id}
                  profile={jobPost.profile}
                  desc={jobPost.desc}
                  exp={jobPost.exp}
                  techs={jobPost.techs}
                  user={props.user}
                  func={deleteItem}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Feed;
