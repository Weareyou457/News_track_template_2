import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";


function Header() {

  const agencyDetails = useSelector((state) => {
    return state.User;
  });

  return (
    <div className="header">
      <div className="One-Contain">
        <ul className="pages">
          <li className="header-li"><Link className="header-a" to={`/${agencyDetails._id}`}>Home</Link></li>
          <li className="header-li"><a className="header-a" href="#">About us</a></li>
          <li className="header-li"><a className="header-a" href="#">Demo Page</a></li>
          <li className="header-li"><a className="header-a" href="#">Contact Page</a></li>
        </ul>
      </div>
      <div className="One-Contain">
        <form className="header-form" action="#">
          <p className="header-form-p">Search: </p>
          <input className="header-input" type="text" name="s" id="s" value="Search" />
        </form>
      </div>

    </div>
  );

};

export default Header;     