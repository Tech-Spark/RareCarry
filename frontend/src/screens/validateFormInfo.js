export default function validateFormInfo(values) {
    const letterReg = /^[A-Za-z]+$/;
    const emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const passwordReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,12}$/;
    let errors = {};
    // first name
    if(!values.fname.trim()){
        errors.fname = "First name required";
    }else if (!letterReg.test(values.fname)){
        errors.fname = ' Only letters';
    }else if (values.fname.length < 3 || values.fname.length > 12){
        errors.fname = ' First name must be within 3 to 12 letters';
    }
    // lastname
    if(!values.lname.trim()){
        errors.lname = 'Last name required';
    }else if (!letterReg.test(values.lname)){
        errors.lname = ' Only letters';
    }else if (values.lname.length < 3 || values.lname.length > 12){
        errors.lname = ' Last name must be within 3 to 12 letters';
    }
    // email 
    if(!values.email){
        errors.email = 'Email required';
    }else if (!emailReg.test(values.email)){
        errors.email = 'Invalid email';
    }
    //password
    if(!values.password) {
        errors.password = 'Password is required';
    }else if (!passwordReg.test(values.password)){
        errors.password = 'Minmum 6 characters, at least one: number, upper case & lower case letter';
    }

    if(!values.cPassword){
        errors.cPassword = 'Password is required';
    }else if (values.cPassword !== values.password){
        errors.cPassword = 'Passwords do not match';
    }

    if(!values.datemin){
        errors.datemin = 'Date of birth required'
    }
    
    return errors;
}