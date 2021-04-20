import React from 'react';
import './Footer.css'
import logo from '../../images/logo.png'
const Footer = () => {
    return (
        <footer class="footer">
            <div class="l-footer">
                <h1>
                    <img src={logo} alt="" /></h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam atque recusandae in sit sunt molestiae aliquid fugit. Mollitia eaque tempore iure sit nobis? Vitae nemo, optio maiores numquam quis recusandae.</p>
            </div>
            <ul class="r-footer">
                <li>
                    <h2>
                        Social</h2>
                    <ul class="box">
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Twitter</a></li>
                        <li><a href="#">Pinterest</a></li>
                        <li><a href="#">Dribbble</a></li>
                    </ul>
                </li>
                <li class="features">
                    <h2>
                        Information</h2>
                    <ul class="box h-box">
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">Sales</a></li>
                        <li><a href="#">Certifications</a></li>
                        <li><a href="#">Customer Service</a></li>
                    </ul>
                </li>
                <li>
                    <h2>
                        Legal</h2>
                    <ul class="box">
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms of Use</a></li>
                        <li><a href="#">Contract</a></li>
                    </ul>
                </li>
            </ul>
            <div class="b-footer">
                <p>
                    All rights reserved by ©Move-n-Settle {new Date().getFullYear()} 
                </p>
            </div>
        </footer>

    );
};
export default Footer;