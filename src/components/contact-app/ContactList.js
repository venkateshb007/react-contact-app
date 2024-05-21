import React from "react";

const ContactList = ({ contacts, pushContact }) => {
  const clickContact = (contact) => {
    pushContact(contact);
  };

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
          {contacts.map((contact) => (
            <tr key={contact.id} onClick={() => clickContact(contact)}>
              <td>{contact.id}</td>
              <td>
                <img src={contact.image} width="50" height="50" alt="profile" />
              </td>
              <td>
                {contact.firstName} {contact.lastName}
              </td>
              <td>{contact.age}</td>
              <td>{contact.email}</td>
              <td>{contact.address.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default ContactList;
