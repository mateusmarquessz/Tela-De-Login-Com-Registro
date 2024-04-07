import React from 'react';
import { FaUser, FaLock, FaEnvelope, FaUserAlt } from 'react-icons/fa';
import "./componets/Global.css";

const Register = ({ toggleRegisterForm }) => {
    return (
        <div className="register">
            <form className="register-form">
                <div className="textbox-group">
                    <div className="textbox">
                        <input type="email" placeholder="Nome" />
                        <span className="material-symbols-outlined">
                            <FaUser />
                        </span>
                    </div>
                    <div className="textbox">
                        <input type="email" placeholder="Sobrenome" />
                        <span className="material-symbols-outlined">
                        </span>
                    </div>
                </div>
                <div className="textbox">
                    <input type="email" placeholder="Email" />
                    <span className="material-symbols-outlined">
                        <FaEnvelope />
                    </span>
                </div>
                <div className="textbox">
                    <input type="date" placeholder="Data de Nascimento" />
                </div>
                <div className="textbox">
                    <input type="password" placeholder="Password" />
                    <span className="material-symbols-outlined">
                        <FaLock />
                    </span>
                </div>
                <button type="submit">REGISTER</button>
                <a href="#" onClick={toggleRegisterForm}>Back to Login</a>
            </form>
        </div>
    );
}

export default Register;
