import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import { useSelector } from 'react-redux'

const SearchBox = ({ history }) => {
    const [keyword, setKeyword] = useState('')

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    const submitHandler = (e) => {
        e.preventDefault()
        if (keyword.trim()) {
            history.push(`/search/${keyword}`)
        } else {
            history.push('/')
        }
    }

    return (
        <Form className='search-box' onSubmit={submitHandler} inline>
            <Form.Control
                type='text'
                name='q'
                onChange={(e) => setKeyword(e.target.value)}
                placeholder={'Hi, ' + userInfo.name.split(' ')[0] + '! What can we help you find today?'}
                className='mr-sm-2'
            ></Form.Control>
        </Form>
    )
}

export default SearchBox