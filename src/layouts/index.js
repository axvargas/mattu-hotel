import React from "react";



//Component imports
import Header from '../components/header';
import Footer from '../components/footer';

//theme


export default function TopLayout(props) {

    return (
        <>
            <Header props={props} />
            {props.children}
            <Footer />
        </>
    );
}