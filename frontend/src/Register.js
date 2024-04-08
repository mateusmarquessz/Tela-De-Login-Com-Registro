import React, { useState, useRef, useEffect } from 'react';
import { FaUser, FaLock, FaEnvelope, FaUserAlt } from 'react-icons/fa';
import "./componets/Global.css";
import { toast } from 'react-toastify';
import axios from 'axios';


const Register = ({ getUsers, onEdit, setOnEdit, toggleRegisterForm }) => {
    const ref = useRef();

    useEffect(() => {
      if (onEdit) {
        const user = ref.current;
  
        user.Nome.value = onEdit.Nome;
        user.Sobrenome.value = onEdit.Sobrenome;
        user.Email.value = onEdit.Email;
        user.DataNascimento.value = onEdit.DataNascimento;
      }
    }, [onEdit]);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      const user = ref.current;
  
      if (
        !user.Nome.value ||
        !user.Sobrenome.value ||
        !user.Email.value ||
        !user.DataNascimento.value
      ) {
        return toast.warn("Preencha todos os campos!");
      }
  
      if (onEdit) {
        await axios
          .put("http://localhost:8800/" + onEdit.id, {
            Nome: user.Nome.value,
            Sobrenome: user.Sobrenome.value,
            Email: user.Email.value,
            DataNascimento: user.DataNascimento.value,
          })
          .then(({ data }) => toast.success(data))
          .catch(({ data }) => toast.error(data));
      } else {
        await axios
          .post("http://localhost:8800", {
            Nome: user.Nome.value,
            Sobrenome: user.Sobrenome.value,
            Email: user.Email.value,
            DataNascimento: user.DataNascimento.value,
          })
          .then(({ data }) => toast.success(data))
          .catch(({ data }) => toast.error(data));
      }
  
      user.Nome.value = "";
      user.Sobrenome.value = "";
      user.Email.value = "";
      user.DataNascimento.value = "";
  
      setOnEdit(null);
      getUsers();
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
                <a href="" onClick={toggleRegisterForm}>Back to Login</a>
            </form>
        </div>
    );
}

export default Register;
