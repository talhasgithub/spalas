import React from "react";
import { Link } from "react-router-dom";
import PerfectScrollbar from "react-perfect-scrollbar";
const Sidebar = props => {
  return (
    <aside className="menu-sidebar d-none d-lg-block">
      <div className="logo">
        <a href="dashboard.html">
          <img src={require("../../images/logo.png")} alt="Life & Story" />
        </a>
      </div>
      <PerfectScrollbar>
        <div className="menu-sidebar__content js-scrollbar1">
          <nav className="navbar-sidebar">
            <ul className="list-unstyled navbar__list">
              <li className="active has-sub">
                <a className="js-arrow" href="">
                  <i className="fas fa-tachometer-alt" />
                  NAVIGATION
                  <span className="arrow up">
                    <i className="fa fa-angle-down" />
                  </span>
                </a>
                <ul
                  className="list-unstyled navbar__sub-list js-sub-list"
                  style={{ display: "block" }}
                >
                  <li className="active">
                    <Link to={`${props.match.url}/dashboard`}>
                      <i className="fos dashboard-icon" />
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link to={`${props.match.url}/lead`}>
                      <i className="fos leads-icon" />
                      Leads
                    </Link>
                  </li>
                  <li>
                    <Link to={`${props.match.url}/client`}>
                      <i className="fos clients-icon" />
                      Clients
                    </Link>
                  </li>
                  <li>
                    <Link to={`${props.match.url}/project`}>
                      <i className="fos project-icon" />
                      Projects
                    </Link>
                  </li>
                  <li>
                    <a href="partners.html">
                      <i className="fos partners-icon" />
                      Partners
                    </a>
                  </li>
                  <li>
                    <a href="subscriptions.html">
                      <i className="fos subscriptions-icon" />
                      Subscriptions
                    </a>
                  </li>
                  <li>
                    <a href="payments.html">
                      <i className="fos payments-icon" />
                      Payments
                    </a>
                  </li>
                  <li>
                    <a href="users.html">
                      <i className="fos users-icon" />
                      Users
                    </a>
                  </li>

                  <li>
                    <a href="library.html">
                      <i className="fos library-icon" />
                      Library
                    </a>
                  </li>
                  <li>
                    <a href="fileq.html">
                      <i className="fos file-icon" />
                      FileQ
                    </a>
                  </li>
                </ul>
              </li>
              <li className="active has-sub">
                <a className="js-arrow" href="#">
                  <i className="fas fa-tachometer-alt" />
                  MY ROOM
                  <span className="arrow">
                    <i className="fa fa-angle-down" />
                  </span>
                </a>
                <ul
                  className="list-unstyled navbar__sub-list js-sub-list"
                  style={{ display: "block" }}
                >
                  <li>
                    <a className="js-arrow" href="messages.html">
                      <i className="fos message-icon" />
                      Messages
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </PerfectScrollbar>
    </aside>
  );
};
export default Sidebar;
