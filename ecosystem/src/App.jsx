import { Outlet } from 'react-router-dom'
import Header from './Components/Header/Header';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Footer from './Components/Footer/Footer';

function App() {

  return (
    <>
      <GoogleOAuthProvider clientId="400972888944-petsjadsef54gvmsb7l9q2con4hfi3cm.apps.googleusercontent.com">
        <Header/>
        <Outlet/>
        <Footer/>
      </GoogleOAuthProvider>
    </>
  )
}

export default App