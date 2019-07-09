import "textillate";
import React from 'react';
import './overview.css';

class OverView extends React.Component {

    componentDidMount() {

    }

    render() {
        return (
            <div className="container-fluid p-0" id="overviewWrapper">
                <header className="masthead">
                    <div className="container h-100">
                        <div className="row h-100 align-items-center">
                            <div className="col-12 text-center">
                                <h1 className="font-weight-light text-heathered-gray">Get Amazing Things Done !!!</h1>
                                <p className="lead text-white">Hi, I am Yeasir Afsar. I am a Software Engineer from Dhaka, Bangladesh. I love Web and Game Development</p>
                                <button type="button" className="btn btn-success btn-lg px-5 mx-2">Hire Me !!!</button>
                                <button type="button" className="btn btn-indigo btn-lg px-5 mx-2">Get My CV</button>
                            </div>
                        </div>
                    </div>
                </header>

                <section className="py-5">
                    <div className="container">
                        <h2 className="font-weight-light">Page Content</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus ab nulla dolorum autem
                            nisi officiis blanditiis voluptatem hic, assumenda aspernatur facere ipsam nemo ratione
                            cumque magnam enim fugiat reprehenderit expedita.</p>
                    </div>
                </section>
            </div>
        )
    }
}

export default OverView