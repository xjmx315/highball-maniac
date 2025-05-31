// Login.js
import {useState} from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Login.css';
import { createPopup } from '../components/Popup';
import apiClient from '../common/apiClient';

const Login = () => {
    const [idInput, setIdInput] = useState('');
    const [pwInput, setPWInput] = useState('');
    const navigate = useNavigate();
    const variablClass = `input-box-title ${idInput && pwInput ? 'clickable' : '' }`;

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!(idInput && pwInput)){
            createPopup('아이디&비밀번호를 입력해 주세요. ')
            return;
        }
        console.log('ID:', idInput, 'Password:', pwInput);

        try {
            const myId = idInput;
            const response = await apiClient.post('/user/login', JSON.stringify({name: myId, password: pwInput}));
            if (response) {
                createPopup(`안녕하세요 ${myId}님!`);
                localStorage.setItem('token', response.token);
                localStorage.setItem('userName', myId);
                navigate('/user_info');
            }
        }
        catch (e) {
            console.log("로그인 실패: ", e);
            createPopup("로그인 실패: 서버가 응답하지 않습니다. ")
        }
    };

    return (
    <div className="login-container">
        <div className='input-box' id='login-box'>
            <h1 onClick={handleSubmit} className={variablClass}>Login</h1>
            <div className='input-group'>
                <input
                    value={ idInput }
                    onChange={ (e) => setIdInput(e.target.value) }
                    placeholder="ID(닉네임)"
                    type='text'
                    className='input'
                />
                <input
                    value={ pwInput }
                    onChange={ (e) => setPWInput(e.target.value) }
                    placeholder="PASSWORD"
                    type='password'
                    className='input'
                />
            </div>
        </div>

        <div id='place-holder'/>

        <div className='input-box' id='login-box'>
            <NavLink to='/join'><h1 className='clickable input-box-title'>Join</h1></NavLink>
        </div>
    </div>
    );
}

export default Login;

/*
const response = await fetch('http://localhost:3001/api/profile', {
  method: 'GET',
  headers: {
    'Authorization': `Bearer ${localStorage.getItem('token')}`
  }
});
*/