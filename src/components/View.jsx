import React from 'react'
import Nav from './Nav'

const View = () => {
  return (
    <div>
        <Nav/>
        <div>
        <div className="container">
            <div className="row">
                <div className="col col-12 colsm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3"><table class="table">
  <thead>
    <tr>
      <th scope="col">title</th>
      <th scope="col">author</th>
      <th scope="col">pub year</th>
      <th scope="col">price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">hg</th>
      <td>Mark</td>
      <td>2000</td>
      <td>800</td>
    </tr>
    <tr>
    <th scope="row">hg</th>
      <td>Mark</td>
      <td>2000</td>
      <td>800</td>
    </tr>
    <tr>
    <th scope="row">hg</th>
      <td>Mark</td>
      <td>2000</td>
      <td>800</td>
    </tr>
  </tbody>
</table></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default View