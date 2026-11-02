
import { useState } from "react";

function Signup() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [remember, setRemember] = useState(false);
    const [message, setMessage] = useState("");

    const handleSignup = () => {
        if (!name || !password) {
            setMessage("Please fill in all fields.");
        } else {
            setMessage(`Welcome, ${name}! Signup successful.`);
        }
    };

    return (
        <div className="signup-box">
            <h2>SIGN UP</h2>

            <label>User Name</label>
            <input
                type="text"
                placeholder="Enter username"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <label>Password</label>
            <input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <div className="signup-options">
                <label>
                    <input
                        type="checkbox"
                        checked={remember}
                        onChange={(e) => setRemember(e.target.checked)}
                    />
                    Remember me
                </label>
                <a href="#forgot">Forgot Password?</a>
            </div>

            <button onClick={handleSignup}>Submit</button>

            <p>{message}</p>
        </div>
    );
}

export default Signup;