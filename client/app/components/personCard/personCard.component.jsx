import React from 'react';
import './personCard.scss';

const PersonCard = ({ customer }) => {

    let name = customer.orgPath + "/" + customer.firstName + " " + customer.lastName;
    let stringReleaseDate = "1/2/3"; // customer.releaseDate
    return <div className="person">
        <div className="name">
            <span>{ name }</span>
        </div>
        <div className="info">
            <span>מ"א: { customer.personalNumber }</span>
            <span>תאריך שחרור: { stringReleaseDate }</span>
        </div>
        <div className="contact-info">
            <div>מייל: { customer.email }</div>
            <div>טלפון במשרד: { customer.voip }</div>
            <div>פלאפון: { customer.phoneNumber }</div>
        </div>
    </div>;
}

export default PersonCard;