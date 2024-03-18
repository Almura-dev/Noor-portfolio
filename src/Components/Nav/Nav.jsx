import React from "react";
import "./nav.css";
// import { AiOutlineHome } from "react-icons/ai";
import { FaStarAndCrescent } from "react-icons/fa";
// import { BiBook } from "react-icons/bi";
// import { BiMessageSquareDetail } from "react-icons/bi";
// import { RiServiceLine } from "react-icons/ri";
// import { useState } from "react";
import { FaInfo } from "react-icons/fa6";
import { IoMdDownload } from "react-icons/io";
import { IoShareSocial } from "react-icons/io5";
export const Nav = (props) => {
  return (
    <nav> 
      <a
         href="#"
         className={props.activeNav === "#" ? "active" : ""}
         onClick={() => {
           props.setActiveNav("#");
         }}
      >
        <img className="NavImage"
                src="https://i.ibb.co/mvby6Zd/20220911-124245.png"
                alt=""
              />
      </a>
      {/* <a
        href="#"
        className={props.activeNav === "#" ? "active" : ""}
        onClick={() => {
          props.setActiveNav("#");
        }}
      >
        <AiOutlineHome />
      </a> */}
      <a
        href="#Futures"
        className={props.activeNav === "#Futures" ? "active" : ""}
        onClick={() => {
          props.setActiveNav("#Futures");
        }}
      >
        <FaStarAndCrescent />
      </a>
      <a
        href="#DN"
        className={props.activeNav === "#DN" ? "active" : ""}
        onClick={() => {
          props.setActiveNav("#DN");
        }}
      >
        <IoMdDownload/>
      </a>
      <a
        href="#Socials"
        className={props.activeNav === "#Socials" ? "active" : ""}
        onClick={() => {
          props.setActiveNav("#Socials");
        }}
      >
        <IoShareSocial />
      </a>
      <a
        href="#About"
        className={props.activeNav === "#About" ? "active" : ""}
        onClick={() => {
          props.setActiveNav("#About");
        }}
      >
      <FaInfo />
      </a>
    </nav>
  );
};
