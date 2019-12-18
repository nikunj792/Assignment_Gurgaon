import React from 'react';
import Table from '../atoms/Table/table';

const CreditCardUsers = React.memo(props=> {
  return (
    <div className="user-container">
      <div className="user-heading">Existing Cards</div>
    <Table content={props.content} />
    </div>
  )
});


export default CreditCardUsers;