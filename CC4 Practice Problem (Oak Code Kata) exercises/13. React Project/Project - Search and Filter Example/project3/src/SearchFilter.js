import React, { Component } from "react";
import data from "./datas/data.json";

export default class SearchFilter extends Component {
  state = {
    itemsToDisplay: [],
    itemsToUse: [],
    cuisines: []
  };

  filterOnSearch = event => {
    if (
      !event.target.value ||
      event.target.value === " " ||
      event.target.value === ""
    )
      this.setState({ itemsToDisplay: [...this.state.itemsToUse] });
    else {
      let itemsToDisplay = [];
      itemsToDisplay = this.state.itemsToUse.filter(
        item =>
          item["Name"]
            .toLowerCase()
            .includes(event.target.value.toLowerCase()) ||
          item["Cuisine Style"]
            .toLowerCase()
            .includes(event.target.value.toLowerCase()) ||
          item["City"].toLowerCase().includes(event.target.value.toLowerCase())
      );
      this.setState({ itemsToDisplay });
    }
  };

  optionSelected = () => {
    let event = document.getElementById("restfilter");
    let selected = event.options[event.selectedIndex].text;

    if (selected === "Choose Any")
      this.setState({ itemsToDisplay: [...this.state.itemsToUse] });
    else {
      let itemsToDisplay = [];
      itemsToDisplay = this.state.itemsToUse.filter(item =>
        item["Cuisine Style"].toLowerCase().includes(selected.toLowerCase())
      );
      this.setState({ itemsToDisplay });
    }
  };

  sortBy = () => {
    let event = document.getElementById("sortfilter");
    let selected = event.options[event.selectedIndex].value;

    if (selected === "ranking")
      this.setState({ itemsToDisplay: [...this.state.itemsToUse] });
    else if (selected === "asc") {
      let itemsToDisplay = [...this.state.itemsToDisplay];
      itemsToDisplay.sort((a, b) => a["Rating"] - b["Rating"]);
      this.setState({ itemsToDisplay });
    } else {
      let itemsToDisplay = [...this.state.itemsToDisplay];
      itemsToDisplay.sort((a, b) => b["Rating"] - a["Rating"]);
      this.setState({ itemsToDisplay });
    }
  };

  componentDidMount = () => {
    this.reRenderList();
  };

  reRenderList = () => {
    let cuisines = [];
    let itemsToDisplay = [];
    for (let i = 0; i < data.length; i++) {
      itemsToDisplay.push(data[i]);
      data[i]["Cuisine Style"]
        .substring(1, data[i]["Cuisine Style"].length - 2)
        .split(",")
        .forEach(cuisine => {
          let temp = cuisine.substring(1, cuisine.length - 1);
          temp = temp.includes("'") ? temp.substring(1, temp.length) : temp;
          if (cuisines.indexOf(temp) < 0) {
            cuisines.push(temp);
          }
        });
    }

    this.setState({ cuisines });
    this.setState({ itemsToDisplay }, () => {
      this.setState({ itemsToUse: [...this.state.itemsToDisplay] });
    });
  };

  render = () => (
    <section id="search-filter-section">
      <div className="restfilter">
        <div>
          <span>Choose a cuisine :</span>
          <select id="restfilter" onChange={this.optionSelected}>
            <option value="any">Choose Any</option>
            {this.state.cuisines.map(item => (
              <option value={item}>{item}</option>
            ))}
          </select>
        </div>
        <div>
          <span>Sort by :</span>
          <select id="sortfilter" onChange={this.sortBy}>
            <option value="ranking">Ranking</option>
            <option value="asc">Rating: Low to High</option>
            <option value="des">Rating: High to Low</option>
          </select>
        </div>
      </div>
      <div className="restcontainer">
        {this.state.itemsToDisplay.map(rest => {
          let cuisines = rest["Cuisine Style"]
            .substring(1, rest["Cuisine Style"].length - 2)
            .split(",");
          return (
            <div className="rest">
              <div className="restinfo">
                <i
                  className="fas fa-map-marker"
                  style={{ color: "orangered", fontSize: "12px" }}
                ></i>

                <span className="restcity">{rest["City"]}</span>
                <br />
                <span className="restname">{rest["Name"]}</span>
                <div className="restcuisines">
                  {cuisines.map(cuisine => {
                    let cuisineToShow = cuisine.substring(
                      1,
                      cuisine.length - 1
                    );
                    cuisineToShow = cuisineToShow.includes("'")
                      ? cuisineToShow.substring(1, cuisineToShow.length)
                      : cuisineToShow;
                    return (
                      <div pill className="restcuisine" letiant="light">
                        {cuisineToShow}
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="sepline"></div>
              <div className="reststats">
                <div>
                  <i
                    style={{ fontSize: "15px" }}
                    className="far fa-comment-alt"
                  ></i>
                  {rest["Number of Reviews"]}
                </div>
                <div>
                  <i style={{ fontSize: "15px" }} className="far fa-star"></i>
                  {rest["Rating"]}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
