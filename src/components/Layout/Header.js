import React from "react";
const Header = props => {
  return (
    <header className="header-desktop">
      <div className="section__content section__content--p30">
        <div className="container-fluid">
          <div className="header-wrap">
            <form className="form-header" action="" method="POST" />
            <div className="header-button">
              <div className="noti-wrap">
                <div className="noti__item js-item-menu">
                  <i className="fos message-icon" />
                  <span className="quantity">1</span>
                  <span className="noti-msg">Messages</span>
                  <div className="email-dropdown js-dropdown">
                    <div className="email__title">
                      <p>You have 3 New Emails</p>
                    </div>
                    <div className="email__item">
                      <div className="image img-cir img-40">
                        <img src={require("../../images/logo.png")} alt="#" />
                      </div>
                      <div className="content">
                        <p>Meeting about new dashboard...</p>
                        <span>John, 3 min ago</span>
                      </div>
                    </div>
                    <div className="email__item">
                      <div className="image img-cir img-40">
                        <img src="images/avatar-01.jpg" alt="#" />
                      </div>
                      <div className="content">
                        <p>Meeting about new dashboard...</p>
                        <span>Nick, Yesterday</span>
                      </div>
                    </div>
                    <div className="email__item">
                      <div className="image img-cir img-40">
                        <img src="images/avatar-01.jpg" alt="#" />
                      </div>
                      <div className="content">
                        <p>Meeting about new dashboard...</p>
                        <span>Sara, April 12,,2018</span>
                      </div>
                    </div>
                    <div className="email__footer">
                      <a href="#">See all emails</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="account-wrap">
                <div className="account-item clearfix js-item-menu">
                  <i className="profile-image-status bg-lite-green" />
                  <div className="image">
                    <img
                      src={require("../../images/avatar-01.jpg")}
                      alt="Terry Crowley"
                    />
                  </div>
                  <div className="content">
                    <a className="js-acc-btn" href="#">
                      Terry Crowley
                      <span>Administrator</span>
                    </a>
                  </div>
                  <div className="account-dropdown js-dropdown">
                    <div className="account-dropdown__item">
                      <span className="set-status">Set Status</span>
                    </div>
                    <div className="account-dropdown__body">
                      <div className="account-dropdown__item">
                        <a href="#">
                          <i className="fa fa-circle txt-lite-green" />
                          Available
                        </a>
                      </div>
                      <div className="account-dropdown__item">
                        <a href="#">
                          <i className="fa fa-circle txt-pink" />
                          Busy
                        </a>
                      </div>
                      <div className="account-dropdown__item">
                        <a href="#">
                          <i className="fa fa-circle txt-red" />
                          Do Not Disturb
                        </a>
                      </div>
                      <div className="account-dropdown__item">
                        <a href="#">
                          <i className="fa fa-circle txt-yellow" />
                          Away
                        </a>
                      </div>
                      <div className="account-dropdown__item">
                        <a href="#">
                          <i className="fa fa-circle txt-grey" />
                          Invisible
                        </a>
                      </div>
                    </div>
                    <div className="account-dropdown__footer">
                      <a href="user-profile.html">
                        <i className="zmdi zmdi-account" />
                        User Profile
                      </a>
                    </div>
                    <div className="account-dropdown__footer">
                      <a href="#">
                        <i className="zmdi zmdi-power" />
                        Logout
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
