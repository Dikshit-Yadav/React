import './App.css'

function App() {

  return (
    <>
      <nav>
        <div className="navbar">
          <div className="left">
            <p>Logo</p>
          </div>
          <div className="right">
            <ul>
              <i>Home</i>
              <i>About</i>
              <i>Help</i>
              <i>Logout</i>
            </ul>
          </div>
        </div>
      </nav>
      <main>
        <div className="hero">
          <h1>Welcome to My Static Website</h1>
          <span>This is a simple React-powered site built with Vite.</span>
        </div>

        <div className="cartSection">
          <div className="cart">carts</div>
          <div className="cart">carts</div>
          <div className="cart">carts</div>
          <div className="cart">carts</div>
          <div className="cart">carts</div>
          <div className="cart">carts</div>
          <div className="cart">carts</div>
          <div className="cart">carts</div>
          <div className="cart">carts</div>
          <div className="cart">carts</div>
        </div>
      </main>
    </>
  )
}

export default App
