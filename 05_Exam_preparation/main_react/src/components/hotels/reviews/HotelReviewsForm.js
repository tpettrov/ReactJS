/**
 * Created by Toni on 7/15/2017.
 */
import React from 'react'
import Input from '../../../components/common/Input'

const ReviewForm = (props) =>{

return (
    <form>
        <div>{props.error}</div>
        <Input
            name='rating'
            placeholder='Rating from 1 to 5'
            onChange = {props.onChange}
            value = {props.newComment.rating}
        />
        <Input
            name='comment'
            placeholder='Hotel comment'
            onChange = {props.onChange}
            value = {props.newComment.comment}
        />

        <input type="submit" value='Add Comment' onClick={props.onSave}/>

    </form>


)}

export default ReviewForm
