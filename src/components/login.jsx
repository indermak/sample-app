import React from 'react';
import usersData from '../usersData';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: ''
        }
    }

    onFormSubmit = event => {
        event.preventDefault();
        let redirect = false;
        usersData.forEach(row => {
            if (row.name === this.username.value) {
                if (row.pass === this.password.value) {
                    this.props.router.push('/dashboard');
                    redirect = true;
                }
            }
        })
        let error = '';
        if (!redirect) {
            error = 'Incorrect username or password';
        }
        this.setState({ error });
    }

    render() {
        const { error } = this.state;
        return (
            <div>
                
                <form>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address </label>
                        <input type="email" ref={input => { this.username = input }} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password </label>
                        <input type="password" ref={password => { this.password = password }} className="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={event => this.onFormSubmit(event)}>Submit</button>
                </form>
                {error && <div>{error}</div>}
            </div>
        )
    }
}
