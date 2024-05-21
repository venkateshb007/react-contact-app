import React from "react";

const ContactCard = ({ selectedContact }) => {
  return (
    <React.Fragment>
      {selectedContact ? (
        <div className="card">
          <div className="card-header bg-primary">
            <div className="p-4"></div>
          </div>
          <div className="card-body text-center">
            <img
              src={selectedContact.image}
              className="img-fluid img-thumbnail rounded-circle w-50 contact-img"
              alt="profile"
            />
            <ul className="list-group text-left">
              <li className="list-group-item list-group-item-primary">
                NAME : {selectedContact.firstName} {selectedContact.lastName}
              </li>
              <li className="list-group-item list-group-item-primary">
                AGE : {selectedContact.age}
              </li>
              <li className="list-group-item list-group-item-primary">
                EMAIL : {selectedContact.email}
              </li>
              <li className="list-group-item list-group-item-primary">
                ADDRESS : {selectedContact.address.city}
              </li>
            </ul>
          </div>
        </div>
      ) : null}
    </React.Fragment>
  );
};

export default ContactCard;
