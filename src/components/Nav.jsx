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
                <nav className="navbar navbar-expand-lg navbar-light fixed-top"
            )