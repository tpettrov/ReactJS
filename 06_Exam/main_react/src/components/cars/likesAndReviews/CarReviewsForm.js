/**
 * Created by Toni on 7/16/2017.
 */
import React from 'react'
import Input from '../../../components/common/Input'

const ReviewForm = (props) =>{

    return (
        <form>
            <div>{props.error}</div>
            <Input
                name='rating'
                type='number'
                placeholder='Rating from 1 to 5'
                onChange = {props.onChange}
                value = {props.newReview.rating}
            />
            <Input
                name='comment'
                placeholder='Car comment'
                onChange = {props.onChange}
                value = {props.newReview.comment}
            />

            <input type="submit" value='Add Comment' onClick={props.onSave}/>

        </form>


    )}

export default ReviewForm