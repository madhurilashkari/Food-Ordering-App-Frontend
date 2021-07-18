import React, { Component } from "react"
import ReactDOM from 'react-dom';
import "./Home.css";
import Header from "../../common/header/Header";



const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper
    },

    gridListRestaurants: {
        flexWrap: 'nowrap',
        transform: 'translateZ(0)',
        width: '100%'
    }
});

//method updates the no columns according to the window size
noOfColumns = () => {

    if (window.innerWidth >= 320 && window.innerWidth <= 640) {
        this.setState({
            cards: 1,
        });
        return;
    }

    if (window.innerWidth >= 641 && window.innerWidth <= 1007) {
        this.setState({
            cards: 2,
        });
        return;
    }

    if (window.innerWidth >= 1008) {
        this.setState({
            cards: 4,
        });
        return;
    }

}

getRestaurants = () => {
    let that = this;
    let restaurantsData = null;
    let xhrRestaurants = new XMLHttpRequest();
    xhrRestaurants.onload = this.setState({ loading: true })
    xhrRestaurants.addEventListener('readystatechange', function () {
        if (this.readyState === 4) {
            that.setState({
                restaurants: JSON.parse(this.responseText).restaurants,
                loading: false
            });
        }
    })
    let url = this.props.baseUrl + 'restaurant';
    xhrRestaurants.open("GET", url);
    xhrRestaurants.send(restaurantsData);
}

componentWillMount() {
    let restaurantsData = null;
    let xhr = new XMLHttpRequest();
    let that = this;
    xhr.addEventListener('readystatechange', function () {
      if (this.readyState === 4) {
        
        that.setState({
          restaurants:JSON.parse(this.responseText).restaurants
        });
        
      }
    });
    let url = this.props.baseUrl + 'restaurant';
    xhr.open("GET", url);
    xhr.send(restaurantsData)
  }

  searchHandler = (event) => {
    let that = this;
    let filteredRestaurants = null;
    let xhrFilteredRestaurants = new XMLHttpRequest();
    xhrFilteredRestaurants.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            if (!JSON.parse(this.responseText).restaurants) {
                that.setState({
                    restaurants: null
                });
            } else {
                that.setState({
                    restaurants: JSON.parse(this.responseText).restaurants
                });
            }
        }
    });
    if (!event.target.value === '') {
       
        let url = this.props.baseUrl + 'restaurant/name/' + event.target.value;
        xhrFilteredRestaurants.open("GET", url);
        xhrFilteredRestaurants.send(filteredRestaurants);
    }
}


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            restaurants: [],
            cards: null,
            loading: false
        }

    }
    render() {
        return (
            <div>
                <Header showSearchBox={true} searchHandler={this.searchHandler} baseUrl={this.props.baseUrl} />

                {this.state.restaurants.length === 0 && this.state.loading === false ?
                    <Typography variant="h6">No restaurant with the given name.</Typography> :

                    <div className={classes.gridContainer}>
                        <GridList cellHeight={'auto'} cols={this.state.cards} className={classes.gridList}>
                            {this.state.restaurants.map((item, index) => (
                                <GridListTile key={item.id} style={gridListTileStyle}>
                                    <RestaurantCard detail={item} />
                                </GridListTile>
                            ))}
                        </GridList>
                    </div>
                }
            </div>
        )
    }


}
export default Home;