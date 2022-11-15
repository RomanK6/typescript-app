import React from 'react';
import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
//COMPONENTS
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Sidebar from './components/Sedebar/Sidebar';
import PostsContainer from './components/Posts/PostsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import PostContainer from './components/Posts/Post/PostContainer';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
      <div className="App">
          <Header />
          <Sidebar />
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='' element={<PostsContainer />} />
            <Route path='/posts' element={<PostsContainer />} />
            <Route path='/users' element={<UsersContainer />} />
            <Route path='/profile/:userId' element={<ProfileContainer />}/>
            <Route path='/post/:id' element={<PostContainer />}/>
          </Routes>
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
