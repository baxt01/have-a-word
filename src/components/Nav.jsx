import React from "react";
import { ReactDOM } from 'react-dom/client';
import "../styles/nav.css"

function New(props) { 
    const {
            pages = [], 
            setCurrentPage,
            currentPage,
    } = props;
}
        useEffect(() => {
            document.title = capitalizeFirstLetter(currentPage.name);
        }, [currentPage]);

            return (
                <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
                    <div className="container">
                        <a className="navbar-brand js-scroll-trigger">HAVE-A-WORD </a>
                        <button className="navbar-toggle navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-Toggle-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav ml auto">
                                {pages.map((page)) => (
                                    <li 
                                    className={`nav-item nav-link js-scroll-trigger ${
                                        currentPage.name === PageTransitionEvent.name && 'active'
                                    }`}
                                    key={Page.name}
                                    >
                                       <span 
                                       onClick={() => setCurrentPage(page)}
                                       >
                                         {capitalizeFirstLetter(page.name)}
                                       </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </nav>
            )