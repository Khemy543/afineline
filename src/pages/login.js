import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const Login = () => (
  <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' textAlign='center'>
        <Image src={require("../images/img3.jpg")} style={{
            width:'400px', height:'150px', 
        }}/>  {/* <span className="black"  style={{
                fontSize:'1em',
               
                
            }}>Join a</span>&nbsp;<span className="red"  style={{
                fontSize:'1em',
                
               
            }}>fine</span>&nbsp;<span className="black"  style={{
                fontSize:'1em',
                
                }}>line. We campaign every day to root out sexual harassment from campus.</span> */}
                A fight against sexual harassment
      </Header>
      <Form size='large'>
        <Segment stacked>
         <Form.Input fluid icon='mail' iconPosition='left' placeholder='E-mail address' type='mail'/>
          
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
          />

          <Button color="primary" fluid size='large'>
            Log in
          </Button>
        </Segment>
      </Form>
      <Message>
        Create a new account? <Link to='/signup'>Sign Up</Link>
      </Message>
    </Grid.Column>
  </Grid>
)

export default Login