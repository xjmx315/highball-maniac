// Login.js
import {useState} from 'react';
import { NavLink } from 'react-router-dom';
import './Login.css';
import { createPopup } from '../components/Popup';

const Login = () => {
    const [idInput, setIdInput] = useState('');
    const [pwInput, setPWInput] = useState('');

    const variablClass = `input-box-title ${idInput && pwInput ? 'clickable' : '' }`;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!(idInput && pwInput)){
            createPopup('아이디&비밀번호를 입력해 주세요. ')
            return;
        }
        // TODO: 로그인 API 호출 또는 처리 로직 추가
        console.log('ID:', idInput, 'Password:', pwInput);
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