var Navbar = createReactClass({
    render() {
        return (
            <nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
                {/* <a class="navbar-brand" href="#">Almost Sasuke</a> */}
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <div class="navbar-nav mr-auto">
                        <a class="nav-item active nav-link" href="#home">Home <span class="sr-only">(current)</span></a>
                        <a class="nav-item nav-link" href="#carouselsection">Carousel</a>
                        <a class="nav-item nav-link" href="#link">Link</a>
                        <a class="nav-item dropdown nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Dropdown
                        </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="#">Action</a>
                                <a class="dropdown-item" href="#">Another action</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#">Something else here</a>
                            </div>
                        <a class="nav-item nav-link disabled" href="#">Disabled</a>
                    </div>
                    
                    <form class="form-inline my-2 my-lg-0">
                        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        )
    }
});