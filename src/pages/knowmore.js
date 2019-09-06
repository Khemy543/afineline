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
                                <Menu.Item as='a' active><Link to="know-more">Know More</Link></Menu.Item>
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
                    <Menu.Item as='a'>
                       <Link to="/">Home</Link>
          </Menu.Item>
                    <Menu.Item as='a' active><Link to="know-more">Know More</Link></Menu.Item>
                    <Menu.Item as='a'><Link to="/sexual-harassment">Sexual Harassment</Link></Menu.Item>
                    <Menu.Item as='a'><Link to="/get-educated">Get Educated</Link></Menu.Item>
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

const Knowmorepage = () => (
    <ResponsiveContainer>
        <Segment style={{ padding: '1em 0em' }} vertical>
            <Grid container stackable verticalAlign='middle'>
                <Grid.Row>
                <Grid.Column floated='left' width={4}>
                        <Image style={{width:'300px' }} src={require("../images/img3.jpg")} />
                    </Grid.Column>
                   {/*  <Grid.Column width={8}>
                <span className="black"  style={{
                fontSize:'2.5em',
                fontWeight: 'bold',
                marginBottom: '1em',
                
            }}>a</span>&nbsp;<span className="red"  style={{
                fontSize:'2.5em',
                fontWeight: 'bold',
                marginBottom: '1em',
               
            }}>fine</span>&nbsp;<span className="black"  style={{
                fontSize:'2.5em',
                fontWeight: 'bold',
                marginBottom: '1em',
                }}>line</span>
                        
                    </Grid.Column> */}
                    
                </Grid.Row>
            </Grid>
        </Segment>
        <Segment style={{ padding: '1em 0em' }} vertical>
            <Container text>
               
                <span className="black"  style={{
                fontSize:'2.5em',
                fontWeight: 'bold',
                marginBottom: '1em',
                
            }}>History of a</span>&nbsp;<span className="red"  style={{
                fontSize:'2.5em',
                fontWeight: 'bold',
                marginBottom: '1em',
               
            }}>fine</span>&nbsp;<span className="black"  style={{
                fontSize:'2.5em',
                fontWeight: 'bold',
                marginBottom: '1em',
                }}>line</span>
        
                <p style={{ fontSize: '1.33em' }}>
                A fine line was launched in 2019 by a small group of people. This campaign is the brainchild of Theophilus. It has its roots from the experiences he has been faced with and his regrettable uneducated youthful decisions on campus. Theophilus, who had faced some forms of sexual harassment and had at some points in his stay on campus exhibited unwelcome sexual behaviour recognized his victimization and his wrongs, a need for self-education and that a change in the outlook of sexual harassment on campus was necessary. It was a process, a process of education, recognizing the blurred, fine line and a process of exploring what could be done immediately. The outcome of this process was to start a conversation, an impactful conversation to increase the awareness of sexual harassment and violence committed by young adults against their peers on campus, to change the outlook of people on sexual harassment of campus and to influence policies on sexual harassment on various campuses. We set out to create a nationwide campaign against sexual harassment on the various campuses in the country through all available platforms.
        </p>

        <span className="black"  style={{
                fontSize:'2.5em',
                fontWeight: 'bold',
                marginBottom: '1em',
                paddingTop:'3em'
                }}>Our Mission</span>

<p style={{ fontSize: '1.33em' }}>
A Fine Line is an anti-sexual harassment that seeks to start an impactful conversation to create awareness about sexual harassment and violence committed by young adults against their peers on campus and to change the outlook of people on such an inexcusable behaviour.
               </p>

               <span className="black"  style={{
                fontSize:'2.5em',
                fontWeight: 'bold',
                marginBottom: '2em',
                paddingTop:'5em',
                paddingBottom:'5em'
                }}>The Work We Do</span>


<Container style={{paddingTop:'20px', paddingBottom:'20px'}}>
<Grid divided inverted stackable>
<Grid.Row>
<Grid.Column width={5}>
                
                    <div className="info-icon">
                        <div className="icon">
                            <i className="fa fa-android"></i>
                        </div>
                        <h3>Media Campaigns</h3>
                        <p className="description">We make our design perfect for you. Our adjustment turn our clothes into your clothes.</p>
                    </div>
               </Grid.Column>
               <Grid.Column width={5}>
                    <div className="info-icon">
                        <div className="icon">
                            <i className="fa fa-angellist"></i>
                        </div>
                        <h3>Campus Activism</h3>
                        <p className="description">We create a persona regarding the multiple wardrobe accessories that we provide..</p>
                    </div>
                </Grid.Column>
                <Grid.Column width={5}>
                    <div className="info-icon">
                        <div className="icon">
                            <i className="fa fa-book"></i>
                        </div>
                        <h3>Education and Engagement</h3>
                        <p className="description">We like to present the world with our work, so we make sur.</p>
                        </div>
                        </Grid.Column>
                
               
            </Grid.Row>
            </Grid>
      </Container>


<span className="black"  style={{
                fontSize:'1.33em',
                
            }}>a</span>&nbsp;<span className="red"  style={{
                fontSize:'1.33em',
               
               
            }}>fine</span>&nbsp;<span className="black"  style={{
                fontSize:'1.33em',
               
                }}>line </span>&nbsp;<span style={{
                    fontSize:'1.33em',
                    
                }}>is overseen by a small committed group of people.</span>
    
            </Container>
        </Segment>
        <Segment inverted vertical style={{ padding: '5em 0em' }}>
            <Container>
                <Grid divided inverted stackable>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <Header inverted as='h4' content='Contact Us' />
                            <List link inverted>
                            <List.Item as='a'><Link to="https://www.facebook.com/A-Fine-Line-106239990738971">facebook</Link></List.Item>
                                <List.Item as='a'><Link to="https://twitter.com/a-fi_neli_ne">twitter</Link></List.Item>
                                <List.Item as='a'><Link to="https://instagram.com/a.fi.neli.ne?igshid=5Ich6p6y0wd4">instagram</Link></List.Item>
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
export default Knowmorepage