import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" active>UserPage</NavigationItem>
        <NavigationItem link="/">About</NavigationItem>
    </ul>
);

export default navigationItems;