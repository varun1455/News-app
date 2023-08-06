import React, { useEffect, useState } from "react";
import { GetNews } from "../Service/GetNews";
import moment from "moment/moment";

function NewsData() {
  const [newsdata, setNewsdata] = useState([]);
  const [selectOption, setSelectOption] = useState("");

  const getAllNews = async () => {
    let data = await GetNews(selectOption);
    setNewsdata(data.data.articles);
  };

  const selectCategory = (event) => {
    setSelectOption(event.target.value);
  };

  useEffect(() => {
    // GetNews()
    getAllNews();
  }, [selectOption]);
  // console.log(data?.data?.articles);

  return (
    <div className="heading">
      <p className="head1">News-App</p>

      <div className="select">
        <label for="news" className="select-box">
          Choose a category:
        </label>

        <select className="options"
          name="news"
          id="news"
          onChange={selectCategory}
          value={selectOption}
        >
          <option value="General">General</option>
          <option value="Health">Health</option>
          <option value="Business">Business</option>
          <option value="sports">Sports</option>
        </select>
      </div>

      <div className="main-grid">
        {newsdata?.map((news) => {
          return (
            <div className="child-grid">
              <img
                className="news-image"
                src={news?.urlToImage ? news?.urlToImage : "download.png"} alt="download.png"
              />

              <p className="news-title">{news?.title}</p>
              <p className="news-content">{news?.content}</p>

              <div className="space-between">
                <p className="news-author">
                  Author: {news?.author ? news?.author : "Author undefined"}
                </p>
                <p className="news-date">
                  Date: {moment(news?.publishedAt).format("LL")}
                </p>
              </div>

              <a href={news?.url} className="link" target="_blank">
                Read More...
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default NewsData;
