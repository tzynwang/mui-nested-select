import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          '&.NESTED_SELECT': {
            minWidth: '300px',
            height: '300px',
            overflowY: 'hidden',
            borderRadius: '0px',
            backgroundColor: '#aaa'
          },
          '&.__LIST_PAPER__': {
            flex: '1 1 50%',
            boxShadow: 'unset',
            borderRadius: '0px'
          },
          '&.__LEFT__': {
            maxHeight: '300px',
            overflowY: 'auto'
          }
        }
      }
    },
    MuiList: {
      styleOverrides: {
        root: {
          '&.NESTED_LIST': {
            display: 'flex',
            paddingTop: '0px',
            paddingBottom: '0px'
          }
        }
      }
    }
  }
})

export default theme
