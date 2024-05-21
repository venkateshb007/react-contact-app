import React from "react";

class ContactList extends React.Component{

    constructor(props) {
        super(props);

        this.state ={

        }
        
    }

    clickContact = (contact) => {  
        this.props.pushContact(contact)
    }


    render() {
      return (
        <React.Fragment>

            <table className="table table-hover table-primary text-center table-striped">
                <thead className="bg-primary text-white">
                    <tr>
                        <th>ID</th>
                        <th>IMAGE</th>
                        <th>NAME</th>
                        <th>AGE</th>
                        <th>EMAIL</th>
                        <th>LOCATION</th>
                    </tr>
                </thead>
                <tbody>
                {
                    Object.keys(this.props).length !== 0 ? 
                    <React.Fragment>
                        {
                            this.props.contacts.map((contact)=>{
                                return(
                                    <tr onClick={this.clickContact.bind(this,contact)}> 
                                        <td>{contact.id}</td>
                                        <td>
                                            <img src={contact.image} width="50" height="50"/>
                                        </td>
                                        <td>{contact.firstName} {contact.lastName}</td> 
                                        <td>{contact.age}</td>
                                        <td>{contact.email}</td>
                                        <td>{contact.address.city}</td>                                       
                                    </tr>
                                )
                            })
                        }
                    </React.Fragment> : null
                }
                </tbody>
            </table>
        </React.Fragment>
      )
    }
}

export default ContactList;