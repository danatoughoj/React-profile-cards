import React from "react";
import "./card.css";
import Users from "./Users"


class Profiles extends React.Component{
    render(){
        return(
            <div>
                <Cards users={Users} />
            </div>
        )
    }
}

class Card extends React.Component{
    render(){
        return(
            <div className="card">
                <div className="card_header">
                    <i className="fas fa-pen"></i>
                </div>
                    <div className="user_picture">
                        <img src={this.props.user.picture} alt="user picture"></img> 
                    </div>
                    <div className="card_body">
                        <div><h3>{this.props.user.name}</h3></div>
                        <div className="location">{this.props.user.location}</div>
                        <div className="major">{this.props.user.major}</div>
                        <div className="description">{this.props.user.description}</div>
                        <div className="social_media_links">
                            <a href={this.props.user.github_link}><i className="fab fa-github"></i></a>
                            <a href={this.props.user.linkedin_link}><i className="fab fa-linkedin"></i></a>
                            <a href={this.props.user.facebook_link}><i className="fab fa-facebook"></i></a>
                        </div>
                    </div>
            </div>
        )
    }
}

class Cards extends React.Component{
    render(){
        return(
            <div className="container">
                {this.props.users.map((user) => <Card key={user.id} user={user}/>) }
            </div>
        )
    }
}

export default Profiles;