import React, { useState, useRef, useEffect } from 'react';
import { FaUser, FaLock, FaEnvelope, FaUserAlt } from 'react-icons/fa';
import "./componets/Global.css";
import { toast } from 'react-toastify';
import axios from 'axios';


const Register = ({ getUsers, onEdit, setOnEdit, toggleRegisterForm }) => {
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



    const ref = useRef();

    useEffect(() => {
      if (onEdit) {
        const user = ref.current;
  
        user.nome.value = onEdit.nome;
        user.email.value = onEdit.email;
        user.fone.value = onEdit.fone;
        user.data_nascimento.value = onEdit.data_nascimento;
      }
    }, [onEdit]);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      const user = ref.current;
  
      if (
        !user.nome.value ||
        !user.email.value ||
        !user.fone.value ||
        !user.data_nascimento.value
      ) {
        return toast.warn("Preencha todos os campos!");
      }
  
      if (onEdit) {
        await axios
          .put("http://localhost:8800/" + onEdit.id, {
            nome: user.nome.value,
            email: user.email.value,
            fone: user.fone.value,
            data_nascimento: user.data_nascimento.value,
          })
          .then(({ data }) => toast.success(data))
          .catch(({ data }) => toast.error(data));
      } else {
        await axios
          .post("http://localhost:8800", {
            nome: user.nome.value,
            email: user.email.value,
            fone: user.fone.value,
            data_nascimento: user.data_nascimento.value,
          })
          .then(({ data }) => toast.success(data))
          .catch(({ data }) => toast.error(data));
      }
  
      user.nome.value = "";
      user.email.value = "";
      user.fone.value = "";
      user.data_nascimento.value = "";
  
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
                <a href="#" onClick={toggleRegisterForm}>Back to Login</a>
            </form>
        </div>
    );
}

export default Register;
