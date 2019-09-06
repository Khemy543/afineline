import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
    Button,
    Container,
    Divider,
    Grid,
    Header,
    Icon,
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
import Slideview from '../components/carousel' 








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
        {/* <Header
            as='h1'
            
            inverted
            style={{
                fontSize: mobile ? '2em' : '4em',
                fontWeight: 'normal',
                marginBottom: 0,
                marginTop: mobile ? '1em' : '1.5em',
            }}
        />
        agasgsdjag
        <Header/> */}
        <span className="white"  style={{
                fontSize: mobile ? '3.5em' : '5em',
                fontWeight: 'bold',
                marginBottom: 0,
                marginTop: mobile ? '1em' : '1.5em',
            }}>a</span>&nbsp;<span className="red"  style={{
                fontSize: mobile ? '3.5em' : '5em',
                fontWeight: 'bold',
                marginBottom: 0,
                marginTop: mobile ? '1em' : '1.5em',
            }}>fine</span>&nbsp;<span className="white"  style={{
                fontSize: mobile ? '3.5em' : '5em',
                fontWeight: 'bold',
                marginBottom: 0,
                marginTop: mobile ? '1em' : '1.5em',
            }}>line</span>
        <Header
            as='h2'
            content="There’s a line, a fine line, often blurred in our daily interactions with others on campus. Respect boundaries, do not cross that line!"
            inverted
            style={{
                fontSize: mobile ? '1.2em' : '1.7em',
                fontWeight: 'normal',
                marginTop: mobile ? '0.5em' : '1.5em',
            }}
        />
        
        
         {/* <Header
            as='h2'
            content="It’s sexual harassment when you do and it’s inexcusable!"
            inverted
            style={{
                fontSize: mobile ? '1.5em' : '1.7em',
                fontWeight: 'normal',
                marginTop: mobile ? '0.5em' : '1.5em',
            }}
        />  */}
        <span className="white" style={{
                fontSize: mobile ? '1.2em' : '1.5em',
                fontWeight: 'normal',
                marginTop: mobile ? '0.5em' : '1.5em',
            }}>It’s </span>&nbsp;<span className="red" style={{
                fontSize: mobile ? '1.2em' : '1.7em',
                fontWeight: 'normal',
                marginTop: mobile ? '0.5em' : '1.5em',
            }}>sexual harassment </span>&nbsp;<span className="white" style={{
                fontSize: mobile ? '1.2em' : '1.7em',
                fontWeight: 'normal',
                marginTop: mobile ? '0.2em' : '1.5em',
            }}>when you do and it's inexcusable!</span>
            <div>
                <Link to ="/yourstory">
        <Button primary size='huge' style={{
          marginTop:'0.5em'}}>
            Get Started
      <Icon name='right arrow'/>
        </Button>
        </Link>
        </div>
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
                        style={{ minHeight: 500, padding: '1em 0em'  , /* backgroundImage:`url(${require("../images/image.jpg")})` */  }}
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
                                <Menu.Item as='a' active>
                                    <Link to="/">Home</Link>
                </Menu.Item>
                               <Menu.Item as='a'><Link to="/know-more">Know More</Link></Menu.Item>
                                <Menu.Item as='a'><Link to="/sexual-harassment">Sexual Harassment</Link></Menu.Item>
                                <Menu.Item as='a'><Link to="/get-educated">Get Educated</Link></Menu.Item>
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
                    <Menu.Item as='a' active>
                        <Link to="/">Home</Link>
          </Menu.Item>
                    <Menu.Item as='a'><Link to="/know-more">Know More</Link></Menu.Item>
                    <Menu.Item as='a'><Link to="/sexual-harassment">Sexual Harassment</Link></Menu.Item>
                    <Menu.Item as='a'><Link to="/get-educated">Get Educated</Link></Menu.Item>
                    <Menu.Item as='a'><Link to="/signup">Sign Up</Link></Menu.Item>
                </Sidebar>

                <Sidebar.Pusher dimmed={sidebarOpened}>
                    <Segment
                        inverted
                        textAlign='center'
                        style={{ minHeight: 350, padding: '1em 0em' }}
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

const HomepageLayout = () => (
    <ResponsiveContainer>
        <Segment style={{ padding: '2.5em 0em' }} vertical>
            <Grid container stackable verticalAlign='middle'>
                <Grid.Row>
                    <Grid.Column width={8}>
                <span className="black"  style={{
                fontSize:'2.5em',
                fontWeight: 'bold',
                marginBottom: '1em',
                
            }}>About a</span>&nbsp;<span className="red"  style={{
                fontSize:'2.5em',
                fontWeight: 'bold',
                marginBottom: '1em',
               
            }}>fine</span>&nbsp;<span className="black"  style={{
                fontSize:'2.5em',
                fontWeight: 'bold',
                marginBottom: '1em',
                }}>line</span>
                        <p style={{ fontSize: '1.33em' }}>
                            A Fine Line is an anti-sexual harassment that seeks to start an impactful conversation to create awareness about sexual harassment and violence committed by young adults against their peers on campus and to change the outlook of people on such an inexcusable behaviour.
            </p>
                    </Grid.Column>
                    <Grid.Column floated='right' width={7} style={{height:"320px", border:"1px solid rgb(228, 227, 227)"}}>
                        {/* <Image bordered rounded size='large' style={{ height: '350px' }} src={require("../images/img2.jpg")} /> */}
                        
                        <Slideview />

                      
                    </Grid.Column>
                     
                </Grid.Row>
            </Grid>
        </Segment>

        <Segment style={{ padding: '1em 0em' }} vertical>
            <Container text>
               
                <span className="black"  style={{
                fontSize:'2.5em',
                fontWeight: 'bold',
                marginBottom: '1em',
                
            }}>Join a</span>&nbsp;<span className="red"  style={{
                fontSize:'2.5em',
                fontWeight: 'bold',
                marginBottom: '1em',
               
            }}>fine</span>&nbsp;<span className="black"  style={{
                fontSize:'2.5em',
                fontWeight: 'bold',
                marginBottom: '1em',
                }}>line</span>
        
                <p style={{ fontSize: '1.33em' }}>
                A Fine Line is an anti-sexual harassment that seeks to start an impactful conversation to create awareness about sexual harassment and violence committed by young adults against their peers on campus and to change the outlook of people on such an inexcusable behaviour. We work tirelessly to change campus policies and to ensure every person is free from sexual harassment.
        </p>

                <Divider
                    as='h4'
                    className='header'
                    horizontal
                    style={{ margin: '3em 0em', textTransform: 'uppercase' }}
                >
                    <Link to='#'>Case Studies</Link>
                </Divider>
                <Header as='h3' style={{ fontSize: '2em' }}>
                    Did We Tell You About Our Bananas?
        </Header>
                <p style={{ fontSize: '1.33em' }}>
                    Yes I know you probably disregarded the earlier boasts as non-sequitur filler content, but
                    it's really true. It took years of gene splicing and combinatory DNA research, but our
                    bananas can really dance.
        </p>

            </Container>
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
                            
                            Web designed by WEBBEX group of company<br /><a href="https://www.instagram.com/webbexgh" style={{color:"#fff"}}>instagram</a>
                
            </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        </Segment>
    </ResponsiveContainer>
)
export default HomepageLayout