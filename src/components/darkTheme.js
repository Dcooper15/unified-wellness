import React from 'react';
import { green } from '@material-ui/core/colors/green';
import { createMuiTheme } from '@material-ui/core/styles';



const darkTheme = createMuiTheme({
    palette: {
        primary: green,
        secondary: green
    }
})

export default darkTheme;