import React from 'react';
import { MDBCol, MDBContainer, MDBRow } from 'mdbreact';
import Profile from '../layout/Profile';
import Experience from '../layout/Experience';
import Education from '../layout/Education';

const Home = () => {
	return (
		<MDBContainer>
			<MDBRow center style={{ height: '100vh' }}>
				<MDBCol middle='true' sm='8' className='text-center'>
					<Profile />
					<Experience />
					<Education />
				</MDBCol>
			</MDBRow>
		</MDBContainer>
	);
};

export default Home;
