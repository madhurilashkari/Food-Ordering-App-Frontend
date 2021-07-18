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