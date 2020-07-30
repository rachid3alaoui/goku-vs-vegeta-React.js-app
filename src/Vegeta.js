import React, { Component } from 'react';
import countHits from './countHits';
import vegeta from './vegeta.png';

class Vegeta extends Component {
  render() {
    const { name, addOneHit, hocState, life } = this.props;
    const lifeValue =
      life > 0 ? (
        <td>{life} % </td>
      ) : (
        <td>
          {' '}
          <span className="badge badge-danger">Mort</span>{' '}
        </td>
      );

    const btnDied =
      life > 0 ? (
        <button className="btn btn-success" onClick={addOneHit}>
          {name} Frappe
        </button>
      ) : (
        <button className="btn btn-danger disabled">Mort</button>
      );
    return (
      <div className="col">
        <img src={vegeta} alt="vegeta" id="vegeta" /> <br />
        {btnDied}
        <table className="table table-striped mt-3">
          <thead>
            <tr>
              <th scope="col"> Coups </th>
              <th scope="col"> Vie </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{hocState.hits}</td>
              {lifeValue}
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default countHits(Vegeta);
