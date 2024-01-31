import React from 'react';

const CarWashTable = () => {
  const carWashData = [
    { type: 'Basic', compact: 3, sedan: 4, suv: 5 },
    { type: 'Premium', compact: 6, sedan: 7, suv: 8 },
    { type: 'Ultimate', compact: 9, sedan: 10, suv: 11 },
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
