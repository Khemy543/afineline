import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const SignForm = () => (
  <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' textAlign='center'>
        <Image src={require("../images/img2.jpg")} style={{
            width:'400px', height:'200px', 
        }}/>  <span className="black"  style={{
                fontSize:'1em',
               
                
            }}>Join a</span>&nbsp;<span className="red"  style={{
                fontSize:'1em',
                
               
            }}>fine</span>&nbsp;<span className="black"  style={{
                fontSize:'1em',
                
                }}>line. We campaign every day to root out sexual harassment from campus.</span>
      </Header>
      <Form size='large'>
        <Segment stacked>
        <Form.Input fluid icon='user' iconPosition='left' placeholder='First Name' />
          <Form.Input fluid icon='user' iconPosition='left' placeholder='Last Name' />
          <Form.Input fluid icon='mail' iconPosition='left' placeholder='E-mail address' />
          
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
          />

          <Button color="primary" fluid size='large'>
            Sign Up
          </Button>
        </Segment>
      </Form>
      <Message>
        Already have an account? <Link to='#'>Login</Link>
      </Message>
    </Grid.Column>
  </Grid>
)

export default SignForm