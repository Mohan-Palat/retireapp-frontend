import React from 'react';

const Holding = () => {
  return (
    <div>
      <h3>Participant Holdings</h3>
      <table>
        <thead>
          <tr>
            <th>Seq</th>
            <th>Participant</th>
            <th>Fund</th>
            <th>Shares</th>
            <th>Price</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>			
            <td>1</td>
            <td>Bill Doors</td>
            <td>Fidelity Flatfoot Index Fund</td>
            <td>58.1987</td>
            <td>$25.55</td>
            <td>$1486.97</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Kilroy Beepbeep</td>
            <td>Just for Kix Solitary</td>
            <td>3.1000</td>
            <td>$11.00</td>
            <td>$34.10</td>
          </tr>	
          <tr>
            <td>3</td>
            <td>Mandatory Johnson</td>
            <td>Night Moon Porfolio Fund</td>
            <td>52.9800</td>
            <td>$108.25</td>
            <td>$5735.08</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Holding;


