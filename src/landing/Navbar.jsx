import { React } from 'react';
import "./Navbar.css"
import {Link} from "react-router-dom"

function Navbar() {
    return (

        <nav class="navbar navbar-expand-lg bg-body-tertiary border-bottom " style={{ backgroundColor: "#fff", height:"75px" }}>
            <div class="container p-2 ">
                <Link class="navbar-brand" to="/">
                    <img src="/media/logo.svg" alt="logo" style={{ width: "24%" }} />
                </Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">

                    <form class="d-flex align-item-center mb-4" role="search">
                        <ul class="navbar-nav me-4 mb-2 mb-lg-0 ">
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/signup">Signup</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" to="/about">About</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" to="/Product" aria-disabled="true">Product</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active"  to="/pricing" aria-disabled="true">Pricing</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" to="/support" aria-disabled="true">Support</Link>
                            </li>
                            <li class="nav-item" style={{marginTop:"30px"}}>
                                <i class="nav-link fa-solid fa-bars"></i>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </nav>

    );
}

export default Navbar;