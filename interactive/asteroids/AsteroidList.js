import React from 'react';

const AsteriodList = ({asteroids}) => (
  <table>
    <tbody>
      <tr>
        <th>Name</th>
        <th>Date</th>
        <th>Diameter (m)</th>
        <th>Approach (km)</th>
      </tr>
      {
        asteroids.map((a) => (
          <tr key={a.name}>
            <td>{a.name}</td>
            <td>{a.date}</td>
            <td>{a.diameter}</td>
            <td>{a.distance}</td>
          </tr>
        ))
      }
    </tbody>
  </table>
);

export default AsteriodList;