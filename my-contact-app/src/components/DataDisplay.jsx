import React from 'react';

const DataDisplay = ({ data }) => {
  return (
    <div>
      {data.map((contact) => (
        <div key={contact.id}>
          <p>{contact.name}</p>
          <p>{contact.email}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default DataDisplay;
