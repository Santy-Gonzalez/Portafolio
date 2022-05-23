import React from 'react'
import "./education.css"

const Education = () => {

  return <table className="table">
      <thead>
          <tr>
              <th>Grado</th>
              <th>Rama</th>
              <th>Instituto</th>
              <th>Año</th>
          </tr>
      </thead>

      <tbody>
            <tr>
                <td>Ing</td>
                <td>Ingenieria en Sistemas</td>
                <td>Universidad Tecnologica Nacional</td>
                <td>2022 - Presente</td>
            </tr>
            <tr>
                <td>TERT</td>
                <td>ForntEnd Developer React</td>
                <td>Coder-House</td>
                <td>2021 - 2022</td>
            </tr>
            <tr>
                <td>Técn</td>
                <td>Tecnico en Electronica</td>
                <td>E.E.S.T. N°9 </td>
                <td>2014 - 2021</td>
            </tr>

            
      </tbody>
  </table>
}

export default Education
