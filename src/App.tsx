import { Suspense } from 'react';

import Header from './components/Header/Header';
import News from './pages/News/News';
import CreateForm from './widgets/CreateForm/CreateForm';

import './style.css';

const App = () => {
  return (
    <div className='app'>
      <Suspense fallback='Loading...'>
        <Header />
        <News />
        <CreateForm />
      </Suspense>
    </div>
  );
};

export default App;
