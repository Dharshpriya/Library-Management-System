import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";
import { Link, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const About = () => {
  const navigate = useNavigate()
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
        <button type='button' className='flex flex-c back-btn' onClick={() => navigate("/home")}>
          <FaArrowLeft size={22} />
          <span className='fs-18 fw-6'>Go Back</span>
        </button> <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About BookHub</h2>
            <p className='fs-17'>A library management system web application is a digital platform that streamlines library operations, automates tasks, and provides convenient access to resources for both librarians and users. It simplifies tasks like cataloging, circulation, and inventory management while offering online catalogs, book requests, renewals, and personalized recommendations. It ensures data security, facilitates remote access to digital resources, and enhances the overall efficiency and user experience of library services.</p>
            <p className='fs-17'>Outline the key features and functionalities of your online library management system. Include details such as catalog management, user registration, search capabilities, borrowing and returning books, online reservations, and notifications.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
