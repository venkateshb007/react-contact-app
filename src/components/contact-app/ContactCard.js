import React from "react";

class ContactCard extends React.Component{

    constructor(props) {

        super(props);

        this.state ={

        }
        
    }

    render() {
      return (
        <React.Fragment>
            
                    {
                        //check for empty object 
                        this.props.selectedContact ?
                        <React.Fragment>
                            <div className="card">
                                <div className="card-header bg-primary">
                                    <div className="p-4">

                                    </div>
                                </div>
                                <div className="card-body text-center ">
                                    <img src={this.props.selectedContact.image} className="img-fluid img-thumbnail rounded-circle w-50 contact-img " />

                                <ul className="list-group text-left">
                                    <li className="list-group-item list-group-item-primary">
                                        NAME : {this.props.selectedContact.firstName} {this.props.selectedContact.lastName}
                                    </li>
                                    <li className="list-group-item list-group-item-primary">
                                        AGE : {this.props.selectedContact.age}
                                    </li>
                                    <li className="list-group-item list-group-item-primary">
                                        EMAIL : {
                                            this.props.selectedContact.email
                                        }
                                    </li>
                                    <li className="list-group-item list-group-item-primary">
                                        ADDRESS : {
                                            this.props.selectedContact.address.city
                                        }
                                    </li>
                                </ul>
                                </div>
                            </div>
                        </React.Fragment>  : null
                    }
        </React.Fragment>
      )
    }
}

export default ContactCard