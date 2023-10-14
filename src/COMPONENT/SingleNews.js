import "./SingleNews.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  WhatsappIcon,
  TwitterIcon,
} from "react-share";
function SingleNews({ prop }) {
  // console.log(prop);
  const dateConverter = (dateStr) => {
    // const dateStr = "2023-07-08";
    const dateObj = new Date(dateStr);

    // Step 2: Format the date object to the desired format
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const formattedDate = dateObj.toLocaleDateString("en-US", options);

    return formattedDate;
  };
  const getCurrentPageURL = window.location.href;
  const { id } = useParams();

  const [breakingNews, setBreakingNews] = useState();
  const fetchBreakingNews = async () => {
    try {
      const response = await axios.get(
        `http://174.138.101.222:8080/${id}/getBreakingNews`
      );
      // console.log(response.data.data, "breaking");
      setBreakingNews(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBreakingNews();
  }, []);

  /////////////////////////// GET TAGS//////////////////////////////////////////////////////////////
  const [tags, setTags] = useState();

  const fetchTags = async () => {
    try {
      const response = await axios.get(
        `http://174.138.101.222:8080/65151c07aa5a85097563ce20/postGetVendor`
      );
      // console.log(response.data.data, "breaking");
      setTags(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTags();
  }, []);

  /////////////////////////// GET TAGS///////////////////////////////////////////

  function formatDate(inputDate) {
    // Step 1: Parse the input string into a JavaScript Date object
    const dateObj = new Date(inputDate);

    // Step 2: Extract day, month, and year from the Date object
    const day = dateObj.getUTCDate();
    const month = dateObj.toLocaleString("default", { month: "long" });
    const year = dateObj.getUTCFullYear();

    // Step 3: Format the values into "day month year" format
    const formattedDate = `${day} ${month} ${year}`;
    return formattedDate;
  }

  const data = [prop.tags];

  function App() {
    const targetId = tags;

    return (
      <div>
        {data.map((item) => (
          <div
            key={item.tags}
            style={{
              backgroundColor: item.id === targetId ? "yellow" : "white",
            }}
          >
            {item.name}
          </div>
        ))}
      </div>
    );
  }



  console.log(prop.tags, "aaaa");
  for (var i = 0; i < prop.tags.length; i++) {
    console.log(prop.tags[i],'bbbb');
    var newarr = prop.tags[i];
    console.log(newarr);
  }





  return (
    <>
      <div className="container-fluid py-3">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="position-relative mb-3">
                <img
                  className="img-fluid w-100"
                  src={`http://174.138.101.222:8080${prop.image}`}
                  style={{ objectFit: "cover", borderRadius: "1rem" }}
                />
                <div
                  style={{
                    position: "relative",
                    // left: "85%",
                    float: "right",
                    marginBottom: "10px",
                  }}
                >
                  <FacebookShareButton
                    url={getCurrentPageURL}
                    quote={prop.title}
                  >
                    <FacebookIcon size={32} round />
                  </FacebookShareButton>
                  <WhatsappShareButton
                    title={prop.title}
                    separator=" "
                    url={getCurrentPageURL}
                  >
                    <WhatsappIcon size={32} round />
                  </WhatsappShareButton>
                  <TwitterShareButton
                    title={prop.title}
                    url={getCurrentPageURL}
                  >
                    <TwitterIcon size={32} round />
                  </TwitterShareButton>
                </div>

                <div className="overlay position-relative bg-light">
                  <div className="mb-3">
                    <a href="">{prop.category}</a>
                    <span className="px-1">/</span>
                    <span>{dateConverter(prop.createdAt)}</span>
                  </div>
                  <div>
                    <h3 className="mb-3">{prop.title}</h3>
                    <p style={{ fontFamily: "bhaskar", fontSize: "1.5rem" }}>
                      {prop.body}
                    </p>
                  </div>
                </div>
              </div>
              {/* Tags Start */}
              <div className="pb-3">
               <div className="bg-light py-2 px-4 mb-3">       {/*////////////////////////////////////*/}
                  <h3 className="m-0">Tags</h3>
                </div>

                <div className="pb-3 d-flex flex-wrap m-n1 ">
                    <div className="d-flex mb-3">
                      <a
                        href=""
                        className="btn btn-sm btn-outline-secondary m-1 "
                      >
                        {newarr}
                      </a>
                    </div>
                  </div>
              </div>
              {/* Tags End */}
            </div>
            <div className="col-lg-4 pt-3 pt-lg-0">
              {/* Social Follow Start */}
              <div className="pb-3">
                <div className="bg-light py-2 px-4 mb-3">
                  <h3 className="m-0">Follow Us</h3>
                </div>
                <div className="d-flex mb-3">
                  <a
                    href=""
                    className="d-block w-50 py-2 px-3 text-white text-decoration-none mr-2"
                    style={{ background: "#39569E" }}
                  >
                    <small className="fab fa-facebook-f mr-2" />
                    <small style={{fontSize:"0.660em"}}>12,345 Fans</small>
                  </a>
                  <a
                    href=""
                    className="d-block w-50 py-2 px-3 text-white text-decoration-none ml-2"
                    style={{ background: "#52AAF4" }}
                  >
                    <small className="fab fa-twitter mr-2" />
                    <small style={{fontSize:"0.660em"}}>12,345 Followers</small>
                  </a>
                </div>
                <div className="d-flex mb-3">
                  <a
                    href=""
                    className="d-block w-50 py-2 px-3 text-white text-decoration-none mr-2"
                    style={{ background: "#0185AE" }}
                  >
                    <small className="fab fa-linkedin-in mr-2" />
                    <small style={{fontSize:"0.660em"}}>12,345 Connects</small>
                  </a>
                  <a
                    href=""
                    className="d-block w-50 py-2 px-3 text-white text-decoration-none ml-2"
                    style={{ background: "#C8359D" }}
                  >
                    <small className="fab fa-instagram mr-2" />
                    <small style={{fontSize:"0.660em"}}>12,345 Followers</small>
                  </a>
                </div>
                <div className="d-flex mb-3">
                  <a
                    href=""
                    className="d-block w-50 py-2 px-3 text-white text-decoration-none mr-2"
                    style={{ background: "#DC472E" }}
                  >
                    <small className="fab fa-youtube mr-2" />
                    <small style={{fontSize:"0.660em"}}>12,345 Subscribers</small>
                  </a>
                  <a
                    href=""
                    className="d-block w-50 py-2 px-3 text-white text-decoration-none ml-2"
                    style={{ background: "#1AB7EA" }}
                  >
                    <small className="fab fa-vimeo-v mr-2" />
                    <small style={{fontSize:"0.660em"}}>12,345 Followers</small>
                  </a>
                </div>
              </div>
              {/* Social Follow End */}
              {/* Newsletter Start */}
              <div className="pb-3">
                <div className="bg-light py-2 px-4 mb-3">
                  <h3 className="m-0">Newsletter</h3>
                </div>
                <div className="bg-light text-center p-4 mb-3">
                  <p>
                    Aliqu justo et labore at eirmod justo sea erat diam dolor
                    diam vero kasd
                  </p>
                  <div className="input-group" style={{ width: "100%" }}>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Your Email"
                    />
                    <div className="input-group-append">
                      <button className="btn btn-primary">Sign Up</button>
                    </div>
                  </div>
                  <small>Sit eirmod nonumy kasd eirmod</small>
                </div>
              </div>
              {/* Newsletter End */}
              {/* Ads Start */}
              {/* <div className="mb-3 pb-3">
                  <a href="">
                    <img
                      className="img-fluid"
                      src="img/news-500x280-4.jpg"
                      alt=""
                    />
                  </a>
                </div> */}
              {/* Ads End */}
              {/* Popular News Start */}
              <div className="pb-3">
                <div className="bg-light py-2 px-4 mb-3">
                  <h3 className="m-0">Trending</h3>
                </div>
                {breakingNews &&
                  breakingNews.map((news, index) => {
                    return (
                      <div key={index} style={{ display: "flex", padding: "0px 10px 20px 10px" }}>
                        <div className="part1">
                          <img
                            style={{ width: "100px", height: "100px" }}
                            src={ 
                              news.image
                                ? `http://174.138.101.222:8080${news.image}`
                                : `https://www.newsclick.in/sites/default/files/2018-09/xfakenews_0.jpg.pagespeed.ic_.232PSP6q2x_0.jpg`
                            } alt="loaded" />
                        </div>
                        <div className="part2" style={{ marginLeft: "10px" }}>
                          <p style={{marginBottom:"1px",fontSize:"13px"}}>{news.category} / {formatDate(news.updatedAt)}</p>
                          <Link to={`/${id}/DetailedNews/${news._id}`} style={{ fontSize: "13px" }} href="/">
                            {news.title.length > 60
                              ? `${news.title.substring(0, 60)}...`
                              : news.title}
                            {/* {news.title} */}
                            </Link>
                        </div>
                      </div>
                    );
                  })}
              </div>
              {/* Popular News End */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleNews;
