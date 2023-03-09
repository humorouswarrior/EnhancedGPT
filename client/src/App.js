import './App.css';
import './normal.css';
function App() {
  return (
    <div className="App">
      <aside className = "sidemenu">
          <div className="side-menu-button">
            <span>+</span>
            New Chat
          </div>
      </aside>
      <section className='chatbox'>
        <div className="chat-input-holder">
          <textarea className="chat-input-textarea" placeholder = "type here....."></textarea>
        </div>
      </section>
      
    </div>
  );
}

export default App;
