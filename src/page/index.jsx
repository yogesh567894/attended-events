import React from 'react';
import './index.css';

export default function Main() {
  return (
    <div className='main-container'>
      <div className='flex-row-e'>
        <div className='top' />
        <div className='top-1' />
        <span className='home'>Home</span>
        <span className='home-2'>Home</span>
        <span className='domains'>Domains</span>
        <span className='domains-3'>Domains</span>
        <span className='contact'>Contact</span>
        <span className='contact-4'>Contact</span>
        <span className='about-us'>About Us</span>
        <span className='about-us-5'>About Us</span>
      </div>
      <div className='flex-row'>
        <div className='group' />
        <div className='rectangle'>
          <span className='name-ra-email-address'>
            NAME
            <br />
            <br />
            RA##########
            <br />
            <br />
            Email address
            <br />
            <br />
          </span>
        </div>
      </div>
      <div className='flex-row-be'>
        <div className='rectangle-6'>
          <span className='registered-events'>Registered Events</span>
        </div>
        <span className='events-attended'>Events Attended</span>
        <div className='rectangle-7'>
          <div className='line' />
        </div>
      </div>
      <div className='rectangle-8' />
      <div className='line-9' />
      <div className='line-a' />
    </div>
  );
}
