import React, { Component } from 'react';

class ShowAll extends Component{
	
	constructor(props){
		super(props);
		this.state = {questions: [], short: true};
	}
	
	componentDidMount(){
		let that = this;
		console.log("Show All 'did mount'");
		fetch('/allQs').then(response => response.json())
			.then(function(data){
				that.setState({questions: data.questions});
			});
	}
	
	render(){
        let qs = this.state.questions;
        let qParas;
        
        if(this.state.short){
        qParas= qs.map(function(mcq,i){
            return <p key= {i}>{mcq.question}</p>;
        });
            
        }
        else {
            qParas = qs.map(function(mcq, i){
                let choices = mcq.choices;
                let choicePs = choices.map(function(c,i){
                    return <p key= {i}>{i}. {c} </p>
                });
            
            return <div>
                <p key = {i}>{mcq.question} </p>;
                {choicePs}
                </div>;
        }
        )};
        
    return <div>
		<h2>All Questions</h2>
		<p>Short or long list of Qs. </p>
        {qParas}
	</div>
	}

}

export {ShowAll}