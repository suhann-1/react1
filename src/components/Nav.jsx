import React from 'react'

const Nav = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-body-warning">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Library app</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">add book</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/search">search book</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/dlt">delete book</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/view">View</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Nav