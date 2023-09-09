import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "../styles/search.css";

function Search() {
  const [meal, setMeal] = useState("");
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`)
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        console.log(meal);
        console.log(items);
      });
  }, [meal]);

  return (
    <div className="search_main">
      <div>
        <input
          type="text"
          onChange={(e) => setMeal(e.target.value)}
          id="value"
          placeholder="Search your favourite food"
        />
        <button>Search</button>
      </div>
      <div id = "display_results">
      {
        items["meals"]?.map((item)=>{
          return (
          
            <div className="search_results" key={items.idMeal}>
              <div>
                  <img src = {item.strMealThumb}/>
                  <p>{JSON.stringify(item.strMeal).split('"')}</p>
                  <div className="link">
                    <a href={(item.strYoutube)} target="_blank" rel="noopener noreferrer">Watch Video</a>
                  </div>
              </div>

            </div>
          
          )
        })
      }

    </div>


    </div>
  );
}

export default Search;
