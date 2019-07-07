import React from 'react';
import './overview.css';
import $ from "jquery";
import profile_pic from './avatar.jpg'

class OverView extends React.Component {
    render() {
        return (
            <div className="container-fluid" id="overviewWrapper">
                <div className="row bg-primary">
                    <div className="col-md-4 col-sm-12 shadow" id="profile_content">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                <p className="card-text">Some quick example text to build on the card title and make up
                                    the bulk of the card's content.</p>
                                <a href="#" className="card-link">Card link</a>
                                <a href="#" className="card-link">Another link</a>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                <p className="card-text">Some quick example text to build on the card title and make up
                                    the bulk of the card's content.</p>
                                <a href="#" className="card-link">Card link</a>
                                <a href="#" className="card-link">Another link</a>
                            </div>
                        </div>
                    </div>
                    <img src={profile_pic} className="col-md-8 col-sm-12 img-fluid shadow " id="profile_pic"/>
                </div>
            </div>
        )
    }
}

export default OverView