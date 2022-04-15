import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        return (
            <div className="card mb-3">
                { this.props.user ? <h2 className='text-center'>Hello {this.props.user.email}</h2>: null}
                <img src="https://images.unsplash.com/photo-1559150180-a0b6c0a1193d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80" className="card-img-top" alt="Super Bowl" />
                <div className="card-body">
                    <h3 className="card-title text-center">Spring has Sprung Firebase Project</h3>
                    <p className="card-text">Today we will set up Authentication with Google Firebase. You can find the documentation <a href='https://firebase.google.com/docs/auth/web/start?authuser=0' target="_blank" rel="noreferrer">here</a></p>
                </div>
            </div>
        )
    }
}
