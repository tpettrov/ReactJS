/**
 * Created by Toni on 7/5/2017.
 */
import React from 'react'
import {Link} from 'react-router-dom'

const Book = (props) => (
    <li>
        {props.title} - {props.author} -{props.date.toLocaleDateString()} - <Link to={'/books/' + props.id}>Details</Link>
    </li>
)

export default Book
