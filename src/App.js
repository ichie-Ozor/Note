import { Route, Routes} from "react-router-dom";
import "./App.css";
import Create from "./pages/Create";
import Notes from "./pages/Notes";
import { ThemeProvider, createTheme } from '@mui/material/styles';


const theme = createTheme({
  palette : {
    primary: {
      main: '#fefefe'
    },
    secondary: {
      main: '#ffc400'
    },
  },
  typography:{
  fontFamily: 'Mukta',
  fontWeightLight: 400,
  fontWeightRegular:500,
  fontWeightMedium: 600,
  fontWeightBold: 700
  }
})
function App() {
  return (
    <ThemeProvider theme={theme}>
    <Routes>
        <Route exact path="/" element={<Notes />} />
        <Route exact path="/create" element={ <Create />} />
    </Routes>
    </ThemeProvider>
  );
}

export default App;
