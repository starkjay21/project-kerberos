import { Route, Routes } from 'react-router-dom';
import { Wrapper } from './styles';
import { Home, Playground } from '../pages';
import StyleThemeProvider from '../theme';

const App = () => {
  return (
    <StyleThemeProvider>
      <Wrapper>
        {/* Navbar */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/play' element={<Playground />} />
        </Routes>
        {/* Footer */}
      </Wrapper>
    </StyleThemeProvider>
  );
};

export default App;
