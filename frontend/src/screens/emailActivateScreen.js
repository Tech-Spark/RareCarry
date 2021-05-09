import React,{useEffect} from 'react';
import Axios from '../../node_modules/axios/index';

export default function EmailActivateScreen(props) {
    const {token} = props.match.params;

    const sendToken = async () => {
        if(token !== 'undefined'){
            try{
                const response = await Axios.put(`/api/users/auth/activate/${token}`);
                const {data} = response;
                localStorage.setItem('verifySuccess', JSON.stringify(data));
            }catch(error){
               let erroResponse = error.response.data.message;
                return erroResponse;
            }
        }
    }
    sendToken();
     const msg = localStorage.getItem('verifySuccess');
     const Res = JSON.parse(msg);

    useEffect(() => {
       setTimeout(()=>{
            props.history.push('/signin');
       }, 3000);
    }, [props.history]);

    return (
        <div className='notify-msg'>
            <h2>Welcome to RareCarry</h2>
                   {msg && <p className='res-msg'>{Res.message}</p>}
        </div>
    )
}
