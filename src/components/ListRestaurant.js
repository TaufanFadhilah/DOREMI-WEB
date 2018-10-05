import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
class ListRestaurant extends Component {

    getRestaurangList(){
        if (this.props.restaurants) {
            console.log(this.props.restaurants);
            return this.props.restaurants.map(restaurant => (
                <div className="col-md-4" key={restaurant.restaurant.id}>
                    <Card style={{
                        marginTop: 5,
                        marginBottom: 5
                    }}>
                        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                        <CardBody>
                            <CardTitle>{restaurant.restaurant.name}</CardTitle>
                            <CardSubtitle>{restaurant.restaurant.location.locality_verbose}</CardSubtitle>
                            <CardText>Harga rata-rata : Rp. {restaurant.restaurant.average_cost_for_two.toLocaleString()}</CardText>
                            <a href={restaurant.restaurant.url} target="_blank">
                                <Button color="primary">More</Button>
                            </a>
                        </CardBody>
                    </Card>
                </div>
            ))
        }else{
            return (
                <div className="col-md-4">
                    <Card style={{
                        marginTop: 5,
                        marginBottom: 5
                    }}>
                        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Restaurant</CardTitle>
                            <CardSubtitle>Address</CardSubtitle>
                            <CardText>Harga rata-rata</CardText>
                            <Button color="primary">More</Button>
                        </CardBody>
                    </Card>
                </div>
            )
        }
        
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <center><h1>List Restaurant</h1></center>
                    </div>
                </div>
                <div className="row">
                    {this.getRestaurangList()}
                </div>
            </div>
        );
    }
}

export default ListRestaurant;
