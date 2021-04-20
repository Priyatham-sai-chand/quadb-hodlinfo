import React, {Component} from 'react';
import './styles.css'


export class Footer extends  Component {
    constructor(props){
        super(props);
    }

    render() {
        return(
            <div className="d-flex align-items-center text-center">
                <div className="footer-text">Copyright © 2019</div>
                <div className="footer-text">HodlInfo.com</div>
                <div className="footer-text">Developed By <a rel="nofollow" href="https://www.quadbtech.com" target="_blank" style={{color:"#3dc6c1"}}> QuadBTech</a></div>
                <div class="footer-text pointer" style={{ "margin-left": "auto" }}>
                    <a href="mailto:support@hodlinfo.com" class="footer-text-link">Support</a>
                </div>
            </div>
        )
    }
}