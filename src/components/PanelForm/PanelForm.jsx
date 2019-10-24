import React from "react"
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";

const PanelForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={"input"} name={"rememberMe"} type={"checkbox"}/> remember me
        </div>
        <div>
            <button>Login</button>
        </div>
    </form>
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(PanelForm)

const Login = (props) => {

    const onSubmit = (formData) => {
        props.login(formData.rememberMe)
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps, {login})(Login)
