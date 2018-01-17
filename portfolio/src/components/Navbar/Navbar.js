import React from "react";
import "./Navbar.css";

const Navbar = props => (
  <div>
    <ul id="slide-out" class="side-nav fixed">
    <li><div class="user-view">

      <div class="background">
        <img src="images/office.jpg" />
      </div>

      <a href="#!user"><img class="circle pic" src="https://scontent-lax3-2.xx.fbcdn.net/v/t1.0-9/12074801_10153669331133126_5752414840335259915_n.jpg?oh=f4757c56598635853573ce0a3cba4711&oe=5AE2B5F5" /></a>
      <a href="#!name"><span class="black-text name">Adrian Divecha</span></a>
      <a href="#!email"><span class="black-text email">adrian@identipop.com</span></a>

      <h8>Languages</h8>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>

    </div></li>

    <i class="fa fa-linkedin" aria-hidden="true"></i>
    <i class="fa fa-github" aria-hidden="true"></i>
    <i class="fa fa-stack-overflow" aria-hidden="true"></i>

    </ul>

    <a href="#" data-activates="slide-out" class="button-collapse"><i class="material-icons">menu</i></a>
  </div>
);

export default Navbar;
