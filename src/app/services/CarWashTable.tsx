import React from 'react';

const CarWashTable = () => {
  const carWashData = [
    { type: 'Premium', compact: 12, sedan: 15, suv: 18 },
  ];

  return (
    <table className="car-wash-table">
      <thead>
        <tr>
          <th></th>
          <th>Compact</th>
          <th  style={{ padding: '0 8px' }}>Sedan</th>
          <th>SUV</th>
        </tr>
      </thead>
      <tbody>
        {carWashData.map((wash, index) => (
          <tr key={index}>
            <td>{wash.type}:</td>
            <td style={{ padding: '8px' }}>${wash.compact}</td>
            <td style={{ padding: '8px' }}>${wash.sedan}</td>
            <td style={{ padding: '8px' }}>${wash.suv}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CarWashTable;
