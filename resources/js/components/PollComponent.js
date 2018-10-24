import React, {Component} from 'react';
import {Button, Label} from "react-bootstrap";

export default class PollComponent extends Component {

    render() {
        const userHasVoted = this.props.userVotedFor !== -1;
        // TODO change edit and delete to dropdown
        return (
            <div>
                {this.props.creatorIsCurrentUser
                    ? (<div>
                        <Button onClick={this.props.onEdit}>edit</Button>
                        <Button onClick={this.props.onDelete}>delete</Button>
                    </div>)
                    : null
                }
                <h3><Label>{this.props.title}</Label></h3>
                {
                    this.props.options.map((elem, idx) => {
                        let poll = userHasVoted
                            ? (<h4 key={idx}><Label>Label: {elem.text + ' (' + elem.count + ')'} </Label></h4>)
                            : (<h4 key={idx}><Button>Button: {elem.text + ' (' + elem.count + ')'}</Button></h4>);
                        if (userHasVoted && idx === this.props.userVotedFor) {
                            poll = (<div className='votedByUser'>{poll}</div>);
                        }
                        return poll;
                    })
                }
            </div>
        );
    }
}