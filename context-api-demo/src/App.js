import React from 'react';
import './App.css';
import Header from './components/Header';
import BookGrid from './components/BookGrid'
import BookContext from './context/BookContext'
import { ThemeContext } from './context/ThemeContext';

function App() {

  // const [books, setbooks] = useState(
  //  
  // );

  return (
    <ThemeContext.Consumer>
      { ({ isDark, dark, light }) => {

        const theme = isDark ? dark : light;

        return (
          <div className="app" style={{ background: theme.bg, color: theme.text}}>
            <div className="container">
              <Header />
              <BookContext>
                <BookGrid />
              </BookContext>
            </div>
          </div>
        )


      }}
    </ThemeContext.Consumer>


  );
}

export default App;
