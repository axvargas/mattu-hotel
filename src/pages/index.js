import React from "react";
// material ui imports
import { Container } from "@material-ui/core";

// component imports
import ImageHotel from '../components/imageHotel';
import HomeContent from '../components/homeContent';
import Rooms from '../components/rooms';


export default function App() {

	return (
		<>
			<ImageHotel />
			<Container >
				<HomeContent />
				<Rooms />

			</Container>
		</>
	);
}
