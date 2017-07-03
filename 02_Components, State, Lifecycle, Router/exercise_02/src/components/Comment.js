/**
 * Created by Toni on 7/3/2017.
 */
import React, {Component} from 'react'


class Comment extends Component {

    render(){

        let comment = this.props.comment

        return (

            <tr>
                <td>{comment.content}</td>
                <td>{comment.author}</td>
            </tr>


        )
    }

}

export default Comment