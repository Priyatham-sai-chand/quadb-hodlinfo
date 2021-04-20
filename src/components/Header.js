import React, { useState,Component } from 'react';
import './styles.css';
import {CircularProgressbar} from 'react-circular-progressbar';

import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
export const Header = (props) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);
    return (
        <div style={{padding: "20px 30px 0px"}}>
            <div class=" align-items-center justify-content-sm-center row">
                <div class="text-center-sm col-12 col-sm-7 col-md-5 col-lg-4">
                    <a href="/">
                        <div class="padding-none text-center-xs col-12 col-sm-12 col-md-11 col-lg-11">
                            <img src="hodlinfo_logo.png" class="fiat-logo" style={{padding: "10px"}} />
                        </div>
                    </a>
                    <p class="col-12 text-center-xs" style={{"font-family": "Oswald, sans-serif", "margin-top": "-18px", opacity: "0.8", "font-size": "18px", color: "gray"}}>
                        Powered By
                                <a class="footer-text-link" rel="nofollow" target="_blank" href="https://www.finstreet.in/" style={{color: "rgb(61, 198, 193)"}}>
                            Finstreet
                                     </a>
                    </p>
                </div>
                <div class="text-center padding-none col-12 col-sm-12 col-md-2 col-lg-4">
                    <div class="btn-group">
 <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret className={"header-button"}>
        INR
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem>INR</DropdownItem>
      </DropdownMenu>
    </ButtonDropdown>
                    </div>
                    &nbsp;
                    &nbsp;
                    <div class="btn-group">

 <ButtonDropdown isOpen={dropdownOpen} toggle={toggle} className={""}>
      <DropdownToggle caret className={"header-button"}>
        ETH
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem>BTC</DropdownItem>
        <DropdownItem>ETH</DropdownItem>
        <DropdownItem>USDT</DropdownItem>
        <DropdownItem>XRP</DropdownItem>
        <DropdownItem>TRX</DropdownItem>
        <DropdownItem>DASH</DropdownItem>
        <DropdownItem>ZEC</DropdownItem>
        <DropdownItem>XEM</DropdownItem>
        <DropdownItem>IOST</DropdownItem>
        <DropdownItem>WIN</DropdownItem>
        <DropdownItem>BTT</DropdownItem>
        <DropdownItem>WRX</DropdownItem>
      </DropdownMenu>
    </ButtonDropdown>
                    </div>
                    <div class="btn-group"><a target="_blank" href="https://wazirx.com/invite/sp7pvbt6?utm_source=finstreet&amp;utm_medium=affiliate&amp;utm_campaign=regnow-btn" type="button" aria-haspopup="true" aria-expanded="false" class="header-button btn btn-secondary">BUY ETH</a>
                    </div>
                </div>
                <div class="right-header col-12 col-sm-12 col-md-5 col-lg-4">
                    <div class="d-inline-flex flex-wrap align-items-center justify-content-center">
                        <a class="color-white" href="/connect/telegram">
                            <div class="header-telegram-button">
                                <div class="d-inline-block">
                                    <img src="telegram.png" class="telegram-logo" /></div>
                                <div class="text-nowrap d-inline-block color-white">Connect Telegram</div>
                            </div>
                        </a>
<div className="d-inline-flex flex-wrap align-items-center justify-content-center">
                                <div className="progress-bar-wrapper">
                                    <CircularProgressbar value={100} text={"4"} />
                                </div>
                            <div className="margin-10 d-inline-block">
                                <label className="switch">
                                    <input type="checkbox" checked={!props.isLightTheme} onChange={props.onThemeButtonClick} />
                                    <span className="slider round"></span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
};