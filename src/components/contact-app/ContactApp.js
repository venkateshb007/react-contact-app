import React, { useState, useEffect } from "react";
import ContactList from "./ContactList";
import ContactCard from "./ContactCard";
import axios from "axios";

const ContactApp = () => {
  const [contacts, setContacts] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [selectedContact, setSelectedContact] = useState(null);

  const pullContact = (contact) => {
    setSelectedContact(contact);
  };

  useEffect(() => {
    let dataURL =
      "https://gist.githubusercontent.com/venkateshb007/af832f9f33bd7f87e2ba73f7957b3278/raw/f83226be66c1ebd5a2da1b08eb47b6eb5a2f98d6/contact-21052024.json";

    axios
      .get(dataURL)
      .then((response) => {
        setContacts(response.data);
      })
      .catch((err) => {
        setErrorMessage(err);
      });
  }, []);

  return (
    <React.Fragment>
      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <p className="h3 text-primary">Contact App</p>
            <p className="lead">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
              labore ea voluptate dicta, iusto explicabo omnis ipsam qui,
              deleniti dolorum ab placeat aut iste similique consectetur modi
              facere dolores? Officia?
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-9 col-12 mb-3">
            {contacts ? (
              <React.Fragment>
                <ContactList contacts={contacts} pushContact={pullContact} />
              </React.Fragment>
            ) : null}
          </div>
          <div className="col-md-3 col-12">
            <ContactCard selectedContact={selectedContact} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ContactApp;
