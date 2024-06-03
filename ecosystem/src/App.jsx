import { Outlet } from 'react-router-dom'
import Header from './Components/Header/Header';
import { GoogleOAuthProvider } from '@react-oauth/google';

function App() {

  return (
    <>
      <GoogleOAuthProvider clientId="400972888944-petsjadsef54gvmsb7l9q2con4hfi3cm.apps.googleusercontent.com">
        <Header/>
        <Outlet/>
      </GoogleOAuthProvider>
    </>
  )
}

export default App