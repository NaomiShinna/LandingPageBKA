import React from 'react';
import {Jumbotron, Container, Row, Col} from 'reactstrap';
import HomeLeftSide from './Home/homeLeftSide';
import HomeRightSide from './Home/homeRightSide';
import backgroundLeftSide from '../Assets/images/BackgroundLeftSide.png';


let styleRight={
		height : '100vh',
		backgroundColor:'#ffffff',
		overflow: 'hidden'
}

let stylesLeft={
		height : '100vh',
		backgroundColor:'#f1f1f1',
		overflow: 'hidden'
}

function BKA_ALUMNI_UNPAR(props){

	let location = props.location.pathname.split("/");
	

	return(
		<Container fluid={true}>
			<Row>
				<img src ="./../Assets/images/BackgroundLeftSide.png"/>
			</Row>
			<Row>
				
				<Col xs = '5' style={stylesLeft} className='p-0'>
					<HomeLeftSide/>
				</Col>
				<Col xs ='7' style={styleRight} className='p-0'>
					<HomeRightSide/>
				</Col>
			</Row>
		</Container>
	);

}

export default BKA_ALUMNI_UNPAR;