import React, {useState} from "react";
import './SearchPage.css';
import data from "./TemplateData.json";
import Footer from "./Footer";
import Navbar from "./Navbar";


function SearchPage() {
    const [searchTerm, setSearchTerm] = useState("");
    return (
      <>
      <Navbar />
      
        <div className="searchContainer">
          <div className="searchInput_Container">
            <input id="searchInput" type="text" placeholder="Search by name or location..." onChange={(event) => {
              setSearchTerm(event.target.value);
            }} />
            <a href="/shop">
            <button className="forth-button">Search By Products</button>
            </a>
          </div>
          <div className="search_Container">
            {
              data
                .filter((val) => {
                  if(searchTerm == ""){
                    return val;
                  }else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
                    return val;
                  }else if(val.location.toLowerCase().includes(searchTerm.toLowerCase())){
                    return val;
                  }
                })

                .map((val) => {
                  return(
                    <div className="template" id="template" key={val.id}>
                        {/* <img src={val.image} alt="" />  */}
                        <h3>{val.title}</h3>

                        {/* <ul className="location" >
                        <li>{val.industry}</li>
                        </ul> */}
                        <div id="template" >
                      <h3>{val.location}</h3>
                        </div>
                        <div id="template" >
                          <h3>{val.revenue} - 2022 Revenue</h3>
                        </div>
                        <a href="{val.link}">
                          <h4>{val.link} </h4>
                        </a>
                        
                    </div>
           

                  )
                })
            }
          </div>
          <Footer/>
        </div>
      </>
    )
  }


export default SearchPage;