import React, { Component } from 'react';

class TopicForm extends Component {
    constructor(props) {
        super(props);
        this.state = {value: '', select: 'INVOICE_CREATION'};

        this.handleChange = this.handleChange.bind(this);
        this.handleSelectChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSelectChange(event) {
        this.setState({select: event.target.value});
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log('A name was submitted: ', this.state);

        
    }

    

    render() {
        return (
            <div>
                <h2>Form</h2>
                <form onSubmit={this.handleSubmit}>
                    <select value={this.state.select} onChange={this.handleSelectChange}>
                        <option value="INVOICE_CREATION">Invoice Creation</option>
                        <option value="APPLY_PAYMENT">Apply Payment</option>
                    </select><br/>
                    <input type="text" value={this.state.value} onChange={this.handleChange} /><br/>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default TopicForm;
