import React from "react";
import ContactList from "./ContactList";
import ContactCard from "./ContactCard";
import axios from "axios";

class ContactApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: null,
      errorMessage: null,
      selectedContact : null,
    };
  }

  pullContact = (contact) => {
    this.setState({
        selectedContact : contact
    })
  }

  componentDidMount() {
    let dataURL =
      "https://gist.githubusercontent.com/venkateshb007/af832f9f33bd7f87e2ba73f7957b3278/raw/f83226be66c1ebd5a2da1b08eb47b6eb5a2f98d6/contact-21052024.json";

    axios
      .get(dataURL)
      .then((response) => {
        this.setState({
          contacts: response.data,
        });
      })
      .catch((err) => {
        this.setState({
          errorMessage: err,
        });
      });
  }

  render() {
    return (
      <React.Fragment>
        {/* <pre>{JSON.stringify(this.state.contacts)}</pre> */}
        {/* <pre>{JSON.stringify(this.state.selectedContact)}</pre> */}
        <div className="container mt-5">
          <div className="row">
            <div className="col">
              <p className="h3 text-primary">Contact App</p>
              <p className="lead">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aliquid, labore ea voluptate dicta, iusto explicabo omnis ipsam
                qui, deleniti dolorum ab placeat aut iste similique consectetur
                modi facere dolores? Officia?
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-9">
              {this.state.contacts ? (
                <React.Fragment>
                  <ContactList contacts={this.state.contacts} pushContact={this.pullContact}/>
                </React.Fragment>
              ) : null}
            </div>
            <div className="col-md-">
              <ContactCard selectedContact = {this.state.selectedContact}/>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ContactApp;
