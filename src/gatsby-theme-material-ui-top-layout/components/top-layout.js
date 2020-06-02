import React from "react";
import ThemeTopLayout from "gatsby-theme-material-ui-top-layout/src/components/top-layout";

//Helmet import
import { Helmet } from 'react-helmet';


//Component imports
import Header from '../../components/header';
import Footer from '../../components/footer';



export default function TopLayout(props) {
    console.log(props);
    return (
        <ThemeTopLayout theme={props.theme}>
            <Helmet>
                <title>Mattu Hotel</title>
            </Helmet>

            <Header />
            {props.children}
            <Footer />
        </ThemeTopLayout>
    );
}