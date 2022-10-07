import {NavLink} from "react-router-dom";

function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to={"/"}>React-Project</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to={"/"}>여행&상품 HOME</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to={"/board/list"}>자유게시판</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to={"/news/find"}>뉴스</NavLink>
                        </li>

                        <li className="nav-item dropDown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
                               data-bs-toggle="dropdown" aria-expanded="false">
                                스토어
                            </a>
                            {/*<ul className="dropDownMenu" aria-labelledby="navbarDropdownMenuLink">*/}
                                <li className="nav-item dropDown"><NavLink className="dropdown-item" to={"/goods/all"}>전체목록</NavLink></li>
                                <li className="nav-item dropDown"><NavLink className="dropdown-item" to={"/goods/best"}>베스트 상품</NavLink></li>
                                <li className="nav-item dropDown"><NavLink className="dropdown-item" to={"/goods/new"}>신상품</NavLink></li>
                                <li className="nav-item dropDown"><NavLink className="dropdown-item" to={"/goods/special"}>특가상품</NavLink></li>
                            {/*</ul>*/}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Header;