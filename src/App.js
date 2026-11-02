import Signup from "./components/Signup";
import Contacts from "./components/Contacts";
import Counter from "./components/Counter";
import "./App.css";

function App() {
    return (
        <div className="container">
            <Contacts />
            <Signup />
            <Counter />
        </div>
    );
}

export default App;