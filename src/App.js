import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Packages from './components/Packages/Packages';
import OrderReview from './components/OrderReview/OrderReview';
import ContactUs from './components/ContactUs/ContactUs';
import Blog from './components/Blog/Blog';
import LoginRegistration from './components/User/LoginRegistration';
import AuthProvider from './Contexts/AuthProvider';
import PrivateRoute from './components/User/PrivateRoute';
import AddPackage from './components/AddPackage/AddPackage';
import ManageAllOrder from './components/ManageAllOrder/ManageAllOrder';
import MyOrders from './components/MyOrders/MyOrders';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/banner'>
              <Banner></Banner>
            </Route>
            <Route path='/loginregistration'>
              <LoginRegistration></LoginRegistration>
            </Route>
            <Route path='/packages'>
              <Packages></Packages>
            </Route>
            <PrivateRoute path="/OrderReview/:packageId">
              <OrderReview></OrderReview>
            </PrivateRoute>
            <PrivateRoute path="/AddPackage">
              <AddPackage></AddPackage>
            </PrivateRoute>
            <PrivateRoute path="/manageAllOrder">
              <ManageAllOrder></ManageAllOrder>
            </PrivateRoute>
            <PrivateRoute path="/myOrders">
              <MyOrders></MyOrders>
            </PrivateRoute>
            <Route path="/blog">
              <Blog></Blog>
            </Route>
            <Route path="/contactUs">
              <ContactUs></ContactUs>
            </Route>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
