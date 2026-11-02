import Signup from "./components/Signup";
import Contacts from "./components/Contacts";
import "./App.css";

function App() {
    return (
        <div className="container">
            <Contacts />
            <Signup />
        </div>
    );
}

export default App;