import React from 'react';
import About from '../about/about';
import Contact from '../contact/contact';
import Footer from '../footer/footer';
import Header from '../header/header';
import Home from '../home/home';
import Mail from '../Mail/Mail';
import Navbar from '../nav/nav';

const MainHome = () => {
    return (
        <>
            <div className='mt-5 pt-5'>
                <div className="bg-circle1"></div>
                <div className="bg-circle2"></div>
                
                <Header />
                <Navbar />
                <Home />
                <About />
                {/* <Members /> */}
                <Contact />
                <Mail></Mail>
                <Footer />
            </div>
        </>
    );
};

export default MainHome;