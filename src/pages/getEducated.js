import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
    Button,
    Container,
    Grid,
    Header,
    Icon,
    Image,
    List,
    Menu,
    Responsive,
    Segment,
    Sidebar,
    Visibility,
} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import '../styles/styles.css'
import { Link } from 'react-router-dom'
import 'font-awesome/css/font-awesome.min.css'




// Heads up!
// We using React Static to prerender our docs with server side rendering, this is a quite simple solution.
// For more advanced usage please check Responsive docs under the "Usage" section.
const getWidth = () => {
    const isSSR = typeof window === 'undefined'

    return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}

/* eslint-disable react/no-multi-comp */
/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */
const HomepageHeading = ({ mobile }) => (
    <Container text>
        
    </Container>
)

HomepageHeading.propTypes = {
    mobile: PropTypes.bool,
}

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
class DesktopContainer extends Component {
    state = {}

    hideFixedMenu = () => this.setState({ fixed: false })
    showFixedMenu = () => this.setState({ fixed: true })

    render() {
        const { children } = this.props
        const { fixed } = this.state

        return (
            <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
                <Visibility
                    once={false}
                    onBottomPassed={this.showFixedMenu}
                    onBottomPassedReverse={this.hideFixedMenu}
                >
                    <Segment
                        inverted
                        textAlign='center'
                        style={{ minHeight: 90, padding: '1em 0em'  , /* backgroundImage:`url(${require("../images/image.jpg")})` */  }}
                        vertical

                    >
                        <Menu
                            fixed={fixed ? 'top' : null}
                            inverted={!fixed}
                            pointing={!fixed}
                            secondary={!fixed}
                            size='large'
                        >
                            <Container>
                                <Menu.Item as='a'>
                                   <Link to="/">Home</Link>
                </Menu.Item>
                                <Menu.Item as='a'><Link to="know-more">Know More</Link></Menu.Item>
                                <Menu.Item as='a'><Link to="/sexual-harassment">Sexual Harassment</Link></Menu.Item>
                                <Menu.Item as='a' active><Link to="/get-educated">Get Educated</Link></Menu.Item>
                                <Menu.Item position='right'>
                            <Link to = "/signup">
                                    <Button as='a' inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}>
                                        Sign Up
                  </Button>
                  </Link>
                                </Menu.Item>
                            </Container>
                        </Menu>
                        <HomepageHeading />
                    </Segment>
                </Visibility>

                {children}
            </Responsive>
        )
    }
}

DesktopContainer.propTypes = {
    children: PropTypes.node,
}

class MobileContainer extends Component {
    state = {}

    handleSidebarHide = () => this.setState({ sidebarOpened: false })

    handleToggle = () => this.setState({ sidebarOpened: true })

    render() {
        const { children } = this.props
        const { sidebarOpened } = this.state

        return (
            <Responsive
                as={Sidebar.Pushable}
                getWidth={getWidth}
                maxWidth={Responsive.onlyMobile.maxWidth}
            >
                <Sidebar
                    as={Menu}
                    animation='push'
                    inverted
                    onHide={this.handleSidebarHide}
                    vertical
                    visible={sidebarOpened}
                >
                    <Menu.Item as='a'>
                       <Link to="/">Home</Link>
          </Menu.Item>
                    <Menu.Item as='a'><Link to="know-more">Know More</Link></Menu.Item>
                    <Menu.Item as='a'><Link to="/sexual-harassment">Sexual Harassment</Link></Menu.Item>
                    <Menu.Item as='a'active><Link to="/get-educated">Get Educated</Link></Menu.Item>
                    <Menu.Item as='a'><Link to="/signup">Sign Up</Link></Menu.Item>
                </Sidebar>

                <Sidebar.Pusher dimmed={sidebarOpened}>
                    <Segment
                        inverted
                        textAlign='center'
                        style={{ minHeight: 90, padding: '1em 0em' }}
                        vertical
                    >
                        <Container>
                            <Menu inverted pointing secondary size='large'>
                                <Menu.Item onClick={this.handleToggle}>
                                    <Icon name='sidebar' />
                                </Menu.Item>
                                <Menu.Item position='right'>
                                    <Link to ="/signup">
                                    <Button as='a' inverted style={{ marginLeft: '0.5em' }}>
                                        Sign Up
                  </Button>
                  </Link>
                                </Menu.Item>
                            </Menu>
                        </Container>
                        <HomepageHeading mobile />
                    </Segment>

                    {children}
                </Sidebar.Pusher>
            </Responsive>
        )
    }
}

MobileContainer.propTypes = {
    children: PropTypes.node,
}

const ResponsiveContainer = ({ children }) => (
    <div>
        <DesktopContainer>{children}</DesktopContainer>
        <MobileContainer>{children}</MobileContainer>
    </div>
)

ResponsiveContainer.propTypes = {
    children: PropTypes.node,
}

const GetEducated = () => (
    <ResponsiveContainer>
        <Segment style={{ padding: '1em 0em' }} vertical>
        <Grid container stackable verticalAlign='middle'>
                <Grid.Row>
                <Grid.Column floated='left' width={4}>
                        <Image style={{width:'300px' }} src={require("../images/img3.jpg")} />
                    </Grid.Column>
                  
                    
                </Grid.Row>
            </Grid>
        </Segment>

        <Segment style={{ padding: '1em 0em' }} vertical>
            

            </Segment>

        <Segment inverted vertical style={{ padding: '5em 0em' }}>
            <Container>
                <Grid divided inverted stackable>
                    <Grid.Row>
                        <Grid.Column width={3}>
                        <Header inverted as='h4' content='Contact Us' />
                            <List link inverted>
                                <List.Item as='a'><a href="https://www.facebook.com/A-Fine-Line-106239990738971">facebook</a></List.Item>
                                <List.Item as='a'><a href="https://twitter.com/a_fi_neli_ne">twitter</a></List.Item>
                                <List.Item as='a'><a href="https://instagram.com/a.fi.neli.ne?igshid=5Ich6p6y0wd4">instagram</a></List.Item>
                                <List.Item as='a'>gmail</List.Item>
                            </List>
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <Header inverted as='h4' content='Services' />
                            <List link inverted>
                            <List.Item as='a'>Media Campaign</List.Item>
                                <List.Item as='a'>campus Activism</List.Item>
                                <List.Item as='a'>Education and Engagement</List.Item>
                            </List>
                        </Grid.Column>
                        <Grid.Column width={5}>
                            
                            ©2019 A FINE LINE CAMPAIGN. <br />all rights reserved privacy policy
                
            </Grid.Column>
            <Grid.Column width={5}>
                            
            Web designed by WEBBEX group of company<br /><Link to="https://www.instagram.com/webbexgh" style={{color:"#fff"}}>instagram</Link>
                
            </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        </Segment>
    </ResponsiveContainer>
)
export default GetEducated