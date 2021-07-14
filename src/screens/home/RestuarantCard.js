import React from 'react';
import "./RestaurantCard.css";
import Card from '@material-ui/core/Card';


class Post extends Component {
    constructor() {
        super()
    }

    render() {
        const { classes, restaurant } = this.props;
        return (
            <div>
                <Card
                    style={{
                        width: 400,
                        backgroundColor: "white",
                    }}
                >
                    <CardMedia
                        className={classes.media}
                        image={props.photoUrl}
                        alt={props.restaurantName}
                    />
                    <br />
                    <CardContent>
                        <Typography
                            style={{ fontSize: 14 }}
                            color="textSecondary"
                            gutterBottom
                        >
                            {props.restaurantName}
                        </Typography>
                        <div>
                            <Typography variant="h5" component="h2">
                                {props.restaurantCategories}
                            </Typography>
                        </div>
                    </CardContent>
                    <CardActions>

                    </CardActions>
                    <div className="rating-main-contnr">
                        <div className="rating-bg-color">
                            <span><i className="fa fa-star"></i></span>
                            <span> {props.customerRating} ({props.numberCustomersRated})</span>
                        </div>
                        <div className="avg-price">
                            <span><i className="fa fa-inr"></i><span style={{ fontSize: "100%", fontWeight: "bold" }}>{props.avgPrice} for two </span></span>
                        </div>
                    </div>
                </Card>
            </div>
        )
    }
}

export default Post;