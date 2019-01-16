import React, { Component } from 'react';
import { IconContext } from 'react-icons'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import './Item.css'

class snapSpot extends Component {

    render() {
        return (
            <div className='page-content'>
                <div className='project-hero'>
                <div className='project-pagination'>
                    <a className='project-arrow prev' href='#'>
                        <IconContext.Provider value={{ size: '2em' }}>
                            <FaArrowLeft />
                        </IconContext.Provider>
                    </a>
                    <a className='project-arrow next' href='#'>
                        <IconContext.Provider value={{ size: '2em' }}>
                            <FaArrowRight />
                        </IconContext.Provider>
                    </a>
                </div>
                    <div className='project-info'>
                        <div className='project-year'>
                            December 2018
                        </div>
                        <h1 className='project-title'>
                            Snap Spot
                        </h1>
                        <p className='project-framework'>iOS</p>
                    </div>
                </div>
                <article className='post wrapper'>
                    <div className='post-content'>
                        <aside className='project-overview'>
                            <div className='project-synopsis' >
                                <strong className='project-overview-label'>Overview</strong>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                            </div>
                        </aside>
                        <h2>About The Project</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non finibus velit. Pellentesque iaculis lorem mi, et pharetra leo semper non. Fusce tincidunt vulputate tellus, quis bibendum justo ultrices eget. Aenean posuere libero sit amet felis semper aliquet. Nam ut tellus nec erat maximus venenatis. Suspendisse et pharetra tortor. Phasellus tincidunt dui quis lacus consequat, vitae mattis turpis lobortis. Curabitur viverra massa lacus, id pellentesque risus laoreet ut. Praesent ut ultricies eros, ut porttitor leo. Fusce purus turpis, eleifend sit amet vulputate ut, hendrerit ut metus. Aliquam vel laoreet nunc. Nunc porttitor magna ipsum, at eleifend nisl hendrerit quis.</p>
                        <p>In viverra malesuada arcu in pretium. Vivamus condimentum luctus nulla, eget luctus dui efficitur eget. Morbi urna orci, vulputate sed aliquet accumsan, ultricies pretium orci. Curabitur faucibus tellus ut enim varius, quis lacinia orci porta. Aenean nec porta mauris. Mauris hendrerit orci neque, eu mollis dui pharetra et. Aenean diam magna, bibendum sed ultricies et, feugiat vitae eros.</p>
                        <p>Fusce a purus vulputate, pharetra lacus nec, lobortis enim. Sed pulvinar lacus et cursus imperdiet. Duis in dignissim velit. Etiam ullamcorper ullamcorper diam non tempor. Cras euismod orci ex, a tempor ligula auctor at. Maecenas luctus sit amet nulla in porttitor. Vestibulum cursus dui eget lorem rutrum, quis porta nibh blandit.</p>
                    </div>
                </article>
            </div>
        )
    }
}

export default snapSpot