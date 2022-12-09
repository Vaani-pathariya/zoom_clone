import React, { Component } from 'react'
import './Body2.css'
import wheel from './pics/comp4.webp'
import img11 from './pics/logo1-1.png'
import img12 from './pics/logo1-2.png'
import img13 from './pics/logo1-3.png'
import img21 from './pics/logo2-1.png'
import img22 from './pics/logo2-2.png'
import img23 from './pics/logo2-3.png'
import img31 from './pics/logo3-1.png'
import img32 from './pics/logo3-2.png'
import img33 from './pics/logo3-3.png'
import img41 from './pics/logo4-1.png'
import img42 from './pics/logo4-2.png'
import img43 from './pics/logo4-3.png'
import imgg from './pics/zoombody2.jpg'
export class Body2 extends Component {
  render() {
    return (
      <>
      <div className='div'>
        <div className="div1">
            <div className="first">
                <img src={imgg} />
            </div>
            <div className="second">
              <br />  Flexible solutions for modern team collaboration <br />
                <button className="but">Zoom One</button><br /><button className="but">Spaces</button> <br /><button className="but">Events</button><br /><button className="but">Contact Center</button><br /><button className="but">Developers</button>
                <br /><br /><br /><br /><br />
            </div> 
        </div>
        <div className="div2">
            {/* side vala content */}
        </div>

        </div>
        
        {/* next component */}
        <div className="cont3">
            <div className="left">
            <div className='line'> Businesses around the globe choose Zoom</div>
            <div className='linkk'><a href="/" >Read their Stories</a></div>
            </div>
            <div className="right">
              <div className="row1">
                <img src={img11}  className="imagee"/>
                <img src={img21}  className="imagee"/>
                <img src={img31}  className="imagee"/>
                <img src={img41} className="imagee"/>
              </div>
      <div className="row2">
        <img src={img12} className="imagee"/>
        <img src={img22} className="imagee"/>
        <img src={img32} className="imagee"/>
        <img src={img42} className="imagee"/>
      </div>

    <div className="row3">
    <img src={img13} className="imagee"/>
    <img src={img23} className="imagee"/>
    <img src={img33} className="imagee"/>
    <img src={img43} className="imagee"/>
    </div>
        </div>
        </div>
      

      {/* next component */}
      <div className="comp4">
        <div className="left1">
          <img  className="wheel"src={wheel} alt="wheel"  />
        </div>
        <div className="right1">
        <div className="divv1">
        Make work less work
        </div>
        <div className="divv2">
        Securely connect and collaborate so you can work better together. Simple to manage and delightful to use, Zoom powers the modern workforce.
        </div>
        <div className="divv3">
          Discover the Possibilities<br /><br />
        </div>
        
        </div>
      </div>

      {/* next component */}
      <div className="comp5">
        <div className="left2">
          <div className="div51">
          Powering organizations across industries and geographies
          </div>
          <div className="div52">
          Zoom helps consolidate communications, connect people, and collaborate better together in the boardroom, classroom, operating room, and everywhere in between.
          </div>
          <div className="div53">
            <button className="butt">Explore Industry Solutions</button>
          </div>
        </div>

        <div className="right2">
          <div className="right2left">
          <button className="btns">Education</button>
          <br /><button className="btns">Government</button><br />
          <button className="btns">Manufacturing</button><br /></div>
          <div className="right2right">
          <button className="btns">Financial Services</button><br />
          <button className="btns">Healthcare</button><br />
          <button className="btns">Retail</button>
          </div><br />
        </div>
      </div>
      </>
    )
  }
}

export default Body2
