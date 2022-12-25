import React from 'react'
import { Link } from 'react-router-dom'

const Card = props => {
    return (
        //Link to={`/detail/${props.data.id}`}
        //onClick={() => props.tampil(props.data.id)}
        <Link to={`/detail`} onClick={props.tampil} className='ml-4 w-36 grid content-start gap-3'>
            <img className='w-full rounded-xl' src={`${process.env.REACT_APP_IMG_URL}${props.data.poster_path}`} alt="" />
            <h3 className=''>{props.data.original_title}</h3>
        </Link>
    )
}


export default Card