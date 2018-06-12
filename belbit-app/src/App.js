import React, { Component } from 'react';
import { Button, Container, Header, Image, List, Icon} from 'semantic-ui-react';
//import logo from './logo.svg';
var logo = 'http://logok.org/wp-content/uploads/2016/10/Bitcoin-Logo-640x480.png'

class App extends Component {
  render() {
    return (
	<Container>
	      <List bulleted horizontal>
	        <List.Item as='a'>Wallet</List.Item>
	        <List.Item as='a'>Moi</List.Item>
	        <List.Item as='a'>La Team</List.Item>
	      </List>
	    <Container textAlign='center'>
          <Header as='h1'>
            <Image src={logo} />
              Belbit
          </Header>
	    </Container>
          <Container> 
	    <div>
	    <Container style={{fontStyle: 'oblique'}}>
	    ‘Quelques potes sont partis au kite. Les dettes du pot commun des pots se reglaient en Bitcoin. Depuis cet investissement paye les bieres! ...’
	    </Container>
	    <Container>
	    Rejoins notre coopperative et achete des bitcoin avec ta banque de Belgique!
	    </Container>
	    </div>
        </Container>
	    <Container textAlign='center' style={{marginTop:'15px'}}>

	    <Button animated>
	          <Button.Content visible>Rejoindre liste d attente</Button.Content>
	          <Button.Content hidden>
	            <Icon name='right arrow' />
	          </Button.Content>
	        </Button>
	    </Container>
	    </Container>
    );
  }
}

export default App;
