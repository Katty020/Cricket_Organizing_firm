import React from "react";
import "./Collection.css";

export default function Collection() {
  const collections = [
    {
      name: "#Kanpur Kings",
      username: "@By Rohan",
      profileImg: require("../images/04.jpg"),
      image1: require("../images/04.jpg"),
      image2: require("../images/08.jpg"),
      image3: require("../images/18.jpg"),
    },
    {
      name: "#Goa Giants",
      username: "@By Henry",
      profileImg: require("../images/19.jpg"),
      image1: require("../images/03.jpg"),
      image2: require("../images/01.jpg"),
      image3: require("../images/19.jpg"),
    },
    {
      name: "#Ludiyana Legends",
      username: "@By Manpreet",
      profileImg: require("../images/05.jpg"),
      image1: require("../images/05.jpg"),
      image2: require("../images/11.jpg"),
      image3: require("../images/09.jpg"),
    },
    {
      name: "#Chennai Super Lions",
      username: "@By Mahendra",
      profileImg: require("../images/03.jpg"),
      image1: require("../images/13.jpg"),
      image2: require("../images/12.jpg"),
      image3: require("../images/15.jpg"),
    },
    {
      name: "#Gujrat Jordaar",
      username: "@By Jethalal",
      profileImg: require("../images/01.jpg"),
      image1: require("../images/16.jpg"),
      image2: require("../images/17.jpg"),
      image3: require("../images/14.jpg"),
    },
    {
      name: "#Bengal Riders",
      username: "@By Tantrik",
      profileImg: require("../images/10.jpg"),
      image1: require("../images/10.jpg"),
      image2: require("../images/02.jpg"),
      image3: require("../images/06.jpg"),
    }
  ];

  return (
    <section className="collection">
      <div className="container-fluid">
        <div className="row">
          <h1>
            Popular <br></br>
            <span>Registered Teams</span>
          </h1>
        </div>
        <div className="row">
          {collections.map((collection, index) => (
            <div className="col-md-4" key={index}>
              <div className="collection-card">
                <div className="collection-card-header">
                  <img src={collection.profileImg} alt="Profile" />
                  <div className="collection-card-header-info">
                    <h3>{collection.name}</h3>
                    <p>{collection.username}</p>
                  </div>
                </div>
                <div className="collection-card-images">
                  <div className="collection-card-left-image">
                   <img src={collection.image1} alt="Image1" />
                  </div>
                  <div className="collection-card-right-images">
                    <img src={collection.image2} alt="Image2" />
                    <img src={collection.image3} alt="Image3" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
