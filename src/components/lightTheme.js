import React from 'react';
import { green } from '@material-ui/core/colors/green';
import { createMuiTheme } from '@material-ui/core/styles';


const lightTheme = createMuiTheme({
    palette: {
        primary: green,
        secondary: green,
        main: green,
    }
});

export default lightTheme;


