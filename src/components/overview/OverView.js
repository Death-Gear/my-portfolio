import $ from "jquery";
import "textillate";
import React from 'react';
import './overview.css';
import profile_pic from './avatar.jpg'

class OverView extends React.Component {

    componentDidMount() {
        $('#hello').textillate({
            loop: true,
            in: {
                effect: 'fadeInLeft',
                sync: 'true'
            },

            out: {
                effect: 'fadeOutRight',
                sync: 'true',
            }
        });

        $('#intro').textillate({
            loop: true,
            in: {
                effect: 'fadeInLeft',
                sync: 'true'
            },

            out: {
                effect: 'fadeOutRight',
                sync: 'true'
            }
        });

        $('#designation').textillate({
            loop: true,
            in: {
                effect: 'fadeInLeft',
                sync: 'true'
            },

            out: {
                effect: 'fadeOutRight',
                sync: 'true'
            }
        });
    }

    render() {
        return (
            <div className="container-fluid" id="overviewWrapper">
                <div className="row bg-primary">
                    <div className="col-md-4 col-sm-12 shadow" id="profile_content">

                        <h2 className="text-white" id="hello">Hello</h2>
                        <h2 className="text-white" id="intro">I am Yeasir Afsar</h2>
                        <h2 className="text-white" id="designation">Software Engineer</h2>

                    </div>
                    <img src={profile_pic} className="col-md-8 col-sm-12 img-fluid shadow " id="profile_pic"/>
                </div>
            </div>
        )
    }
}

export default OverView