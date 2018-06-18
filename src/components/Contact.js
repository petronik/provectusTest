import React, { Component } from 'react';
import axios from 'axios';

class Contact extends Component {
    constructor() {
        super();
        this.state = {
            fname: '',
            email: '',
            comment: ''
        };
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onSubmit = (e) => {
        e.preventDefault();
        axios({
            method:'post',
            url:'https://formula-test-api.herokuapp.com/contact',
            data: this.state
        });
        this.setState({
            fname: '',
            email: '',
            comment: '',
        });
        alert("Your message sent")
    };

    render() {
        const { fname, email, comment } = this.state;
        return (
            <div className="d-flex flex-column justify-content-center align-items-center form-box">
                <form onSubmit={this.onSubmit} className="w-50">
                    <div className="form-group d-flex flex-column row-10">
                        <input className='my-input' type="text" name="fname"
                               placeholder="Your Name" value={fname} onChange={this.onChange} required />
                        <input className='my-input' type="email" name="email"
                               placeholder="Your E-mail" value={email} onChange={this.onChange} required />
                        <textarea className='my-input' name="comment"
                                  placeholder="Your Message" value={comment} onChange={this.onChange} />
                        <button className='btn btn-primary btn-lg' type="submit">Submit</button>
                    </div>
                </form>
            </div>
        );
    }
}
export default Contact