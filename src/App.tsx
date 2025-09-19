import { useState } from 'react'
import logo from './assets/logo.png'
import NotificationsButton from './resources/component/notification'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container-body">

        <header>
          <img src={logo} alt="" />

          <NotificationsButton />

        </header>

      </div>
    </>
  )
}

export default App
