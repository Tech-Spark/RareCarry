// import {useState, useEffect} from 'react';


// const useLogin = (validate) => {
//     const [ values, setValues] = useState({
//         emial: '',
//         password: ''
//     });

//     const [errors, setErrors] = useState({});
//     // const [isSubmitting, setIsSubmitting] = useState(false);

//     const handleChange = e => {
//         const {name, value} = e.target;
//         setValues({
//             ...values, 
//             [name]: value
//         });
//     };

    // const handleSubmit = e => {
    //     e.preventDefault();
    //     setErrors(validate(values));
    //     // setIsSubmitting(true);
    // }
    // return {handleChange, handleSubmit,values, errors};

// };

// export default useLogin;