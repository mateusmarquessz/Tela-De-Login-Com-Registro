import React, { useState } from 'react';
import { FaUser, FaLock, FaEnvelope, FaUserAlt } from 'react-icons/fa';
import "./componets/Global.css";

const Register = ({ toggleRegisterForm }) => {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        birthDate: '',
        password: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
    };  



    return (
        <div className="register">
            <form className="register-form" onSubmit={handleSubmit}>
                <div className="textbox-group">
                    <div className="textbox">
                        <input type="name" name="firstName"  placeholder="Nome" value={formData.firstName} onChange={handleInputChange} />
                        <span className="material-symbols-outlined">
                            <FaUser />
                        </span>
                    </div>
                    <div className="textbox">
                        <input type="name" name="lastName" placeholder="Sobrenome" value={formData.lastName} onChange={handleInputChange} />
                        <span className="material-symbols-outlined">
                        </span>
                    </div>
                </div>
                <div className="textbox">
                    <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleInputChange} />
                    <span className="material-symbols-outlined">
                        <FaEnvelope />
                    </span>
                </div>
                <div className="textbox">
                    <input type="date" name="birthDate" placeholder="Data de Nascimento" value={formData.birthDate} onChange={handleInputChange} />
                </div>
                <div className="textbox">
                    <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleInputChange} />
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
