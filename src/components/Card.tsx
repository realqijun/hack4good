import React from 'react';

function Card() {
    return (
        <div className="card">
            <img src="../images/windows.jpeg" className="card-img-top" alt="image"/>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of
                    the card's content.</p>
            </div>
            <div className="card-body">
                <a href="#" className="card-link">Card link</a>
                <a href="#" className="card-link">Another link</a>
            </div>
        </div>
    );
}
// id, title, body, overview, image, manpower, location(link to google maps), time start/end
export default Card;