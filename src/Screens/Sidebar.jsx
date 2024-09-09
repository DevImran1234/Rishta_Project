import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Divider, Box, IconButton, useMediaQuery, useTheme } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceLaughWink, faTachographDigital, faUsers, faChartSimple, faPeopleGroup, faTrophy, faGear, faArrowRight, faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Sidebar() {
    const [open, setOpen] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const toggleDrawer = () => {
        setOpen(!open);
    };

    return (
        <>
            {isMobile && (
                <IconButton 
                    edge="start" 
                    color="inherit" 
                    aria-label="menu" 
                    onClick={toggleDrawer}
                    sx={{ position: 'absolute', top: 16, left: 16, color: 'black' }} // Set color to black
                >
                    <FontAwesomeIcon icon={faBars} />
                </IconButton>
            )}
            <Drawer
                variant={isMobile ? "temporary" : "permanent"}
                open={isMobile ? open : true}
                onClose={toggleDrawer}
                sx={{
                    width: 240,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: { width: 240, boxSizing: 'border-box', backgroundColor: 'deeppink', color: '#fff' },
                }}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
            >
                <Box sx={{ overflow: 'auto' }}>
                    {/* Sidebar Brand */}
                    <List>
                        <ListItem>
                            <ListItemIcon>
                                <FontAwesomeIcon icon={faFaceLaughWink} size="2x" style={{ color: '#fff' }} />
                            </ListItemIcon>
                            <ListItemText 
                              primary="Admin" 
                              sx={{ 
                                color: '#fff', 
                                whiteSpace: 'nowrap', // Prevent text from wrapping
                                overflow: 'hidden',   // Hide overflowing text
                                textOverflow: 'ellipsis' // Add ellipsis for overflowing text
                              }} 
                            />
                        </ListItem>
                    </List>
                    <Divider />

                    {/* Sidebar Items */}
                    <List>
                        <ListItem button component={Link} to="/portal/dashboard">
                            <ListItemIcon>
                                <FontAwesomeIcon icon={faTachographDigital} style={{ color: '#fff' }} />
                            </ListItemIcon>
                            <ListItemText 
                              primary="Dashboard" 
                              sx={{ 
                                color: '#fff', 
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis' 
                              }} 
                            />
                        </ListItem>

                        <Divider />

                        <ListItem button component={Link} to="/portal/user-list">
                            <ListItemIcon>
                                <FontAwesomeIcon icon={faUsers} style={{ color: '#fff' }} />
                            </ListItemIcon>
                            <ListItemText 
                              primary="Users" 
                              sx={{ 
                                color: '#fff', 
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis' 
                              }} 
                            />
                        </ListItem>

                        <ListItem button component={Link} to="/portal/stats">
                            <ListItemIcon>
                                <FontAwesomeIcon icon={faChartSimple} style={{ color: '#fff' }} />
                            </ListItemIcon>
                            <ListItemText 
                              primary="Stats" 
                              sx={{ 
                                color: '#fff', 
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis' 
                              }} 
                            />
                        </ListItem>

                        <ListItem button component={Link} to="/portal/team-list">
                            <ListItemIcon>
                                <FontAwesomeIcon icon={faPeopleGroup} style={{ color: '#fff' }} />
                            </ListItemIcon>
                            <ListItemText 
                              primary="Marriage Counsaltant" 
                              sx={{ 
                                color: '#fff',
                                whiteSpace: 'nowrap',
                                textOverflow: 'ellipsis' 
                              }} 
                            />
                        </ListItem>

                        <ListItem button component={Link} to="/portal/matches">
                            <ListItemIcon>
                                <FontAwesomeIcon icon={faTrophy} style={{ color: '#fff' }} />
                            </ListItemIcon>
                            <ListItemText 
                              primary="Other Clients" 
                              sx={{ 
                                color: '#fff',
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis' 
                              }} 
                            />
                        </ListItem>

                        <ListItem button component={Link} to="/portal/settings">
                            <ListItemIcon>
                                <FontAwesomeIcon icon={faGear} style={{ color: '#fff' }} />
                            </ListItemIcon>
                            <ListItemText 
                              primary="Settings" 
                              sx={{ 
                                color: '#fff',
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis' 
                              }} 
                            />
                        </ListItem>

                        <ListItem button component={Link} to="/">
                            <ListItemIcon>
                                <FontAwesomeIcon icon={faArrowRight} style={{ color: '#fff' }} />
                            </ListItemIcon>
                            <ListItemText 
                              primary="Logout" 
                              sx={{ 
                                color: '#fff',
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis' 
                              }} 
                            />
                        </ListItem>
                    </List>
                </Box>
            </Drawer>
        </>
    );
}

export default Sidebar;
