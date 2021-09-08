import React from "react";
import Header from "../components/header/Header";
import Input from "../components/input/Input";
import Footer from "../components/footer/Footer";
import Display from "../components/display/Display";
const ContainerLayout = () =>{
    return(
        <React.Fragment>
        <Header />
        <Input />
        <Display/>
        <Footer />
        </React.Fragment>
    )
}
export default ContainerLayout