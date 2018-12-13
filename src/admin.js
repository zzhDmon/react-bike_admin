import React,{Component} from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import NavLeft from './components/NavLeft'
import Home from './pages/home'
import { Row,Col } from 'antd';
import './style/common.less'

export default class Admin extends Component{
    render(){
        return(
            <Row className="container">
                <Col span="4" className="nav-left">
                    <NavLeft></NavLeft>
                </Col>
                <Col span="20" className="main">
                    <Header></Header>
                    <Row className="content">
                        {/* <Home></Home> */}
                        {this.props.children}
                    </Row>
                    <Footer></Footer>
                </Col>
            </Row> 
        )
    }
}