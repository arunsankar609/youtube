import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toggleMenu } from "../store/NavSlice";
import { useSelector } from "react-redux";
import { YOUTUBE_SEARCH_KEY } from "./constants/Constants";
import { getSearch } from "../store/SearchSlice";
import Select from "react-select";
import { getVideoId } from "../store/VideoSlice";
const Header = () => {
  const dispatch = useDispatch();
  const searchCache = useSelector((store) => store.search);

  const [videoSearch, setVideoSearch] = useState("");
  const [videoList, setVideoList] = useState([]);
  const [selectVideo, setSelectVideo] = useState("");
  const [showSugg, setShowSugg] = useState(true);
  useEffect(() => {
    const cleartimer = setTimeout(() => {
      if (searchCache[videoSearch]) {
        setVideoList(searchCache[videoSearch]);
      } else {
        searchYoutubeData();
      }
    }, 200);
    return () => {
      clearTimeout(cleartimer);
    };
  }, [videoSearch]);

  const searchYoutubeData = async () => {
    const data = await fetch(YOUTUBE_SEARCH_KEY + videoSearch);
    const json = await data.json();
    setVideoList(json);
    console.log("json", json);

    dispatch(
      getSearch({
        [videoSearch]: json,
      })
    );
  };

  return (
    <div className="grid grid-flow-col p-2 m-2 max-h-16 justify-between shadow-lg ">
      <div className="flex col-span-1">
        <div>
          <img
            onClick={() => dispatch(toggleMenu())}
            alt="Hamburger_menu"
            src="https://static.vecteezy.com/system/resources/thumbnails/002/292/406/small/hamburger-menu-line-icon-free-vector.jpg"
            className="h-12"
          />
        </div>
        <Link to="/">
          <div className="px-3">
            <img
              alt="youtube"
              className="h-12 "
              src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png"
            />
          </div>
        </Link>
      </div>
      <div className="mt-3 flex ">
        <div>
          
          <input
            className=" h-8 border border-gray-300 w-96 rounded-l-full"
            value={videoSearch}
            onChange={(e) => setVideoSearch(e.target.value)}
            onFocus={() => setShowSugg(true)}
            onBlur={() => setShowSugg(false)}
          />
          {/* {showSugg && (
            <div>
              {videoList[1]?.length > 1 ? (
                <div className="bg-white h-auto relative rounded-xl p-2 m-2">
                  <ul>
                    {videoList[1]?.map((list,index) => (
                      <div className=" m-1"   onClick={(e) => setVideoSearch(list)}>
                        <li
                       // value={list}
                         
                          key={index}
                        >
                          {list}
                        </li>
                       
                      </div>
                    ))}
                  </ul>
                </div>
              ) : (
                ""
              )}
            </div>
          )} */}
        </div>

        <div className="">
          <img
            alt="search"
            className=" h-8 w--8 border  border-gray-300 rounded-r-full"
            src="https://www.shutterstock.com/image-vector/gray-magnifying-glass-icon-isolated-260nw-1571188570.jpg"
            onClick={()=>dispatch(getVideoId(videoSearch))}
          />
        </div>
      </div>
      <div className="grid col-span-1">
        <img
          className="h-10 mt-2"
          alt="user-icon"
          src="https://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png"
         
        />
      </div>
    </div>
  );
};

export default Header;
