import React from 'react';
import {connect} from 'react-redux';
import {useHistory, withRouter} from 'react-router-dom'
import {Formik, Form, Field} from "formik";
import {saveUser} from '../../store/actions/users';
import './css/UsersForm.css'

function getEmptyUser() {

    return {
        name: '',
        username: '',
        email: '',
        address: {
            street: '',
            suite: '',
            city: '',
            zipcode: '',
            geo: {
                lat: '',
                lng: ''
            }
        },
        phone: '',
        website: '',
        company: {
            name: '',
            catchPhrase: '',
            bs: ''
        }
    }
}

function UsersForm({currentUser, saveUser}) {

    let history = useHistory();

    function goHome() {
        history.push('/users');
    }

    function onFormSubmit() {
        saveUser(currentUser);
        history.push('/users')
    }

    const renderForm = (props) => {
        return (
            <Form id='users-form'
                  className='users-form'>
                <div className='grid-2-items-form'>
                    <label htmlFor='name'>Name:</label>
                    <Field name='name'/>
                </div>
                {props.errors.name
                ? <div className='error'>{props.errors.name}</div>
                : null}
                <div className='grid-2-items-form'>
                    <label htmlFor='username'>Username:</label>
                    <Field name='username'/>
                </div>
                <div className='grid-2-items-form'>
                    <label htmlFor='email'>Email:</label>
                    <Field name='email'/>
                </div>
                <fieldset id='address' form='users-form'>
                    <legend>Address</legend>
                    <div className='grid-2-items-form'>
                        <label htmlFor='address.city'>City:</label>
                        <Field name='address.city'/>
                    </div>
                    <div className='grid-2-items-form'>
                        <label htmlFor='address.street'>Street:</label>
                        <Field name='address.street'/>
                    </div>
                    <div className='grid-2-items-form'>
                        <label htmlFor='address.suite'>Suite:</label>
                        <Field name='address.suite'/>
                    </div>
                    <div className='grid-2-items-form'>
                        <label htmlFor='address.zipcode'>Zipcode:</label>
                        <Field name='address.zipcode'/>
                    </div>
                </fieldset>
                <div className='grid-2-items-form'>
                    <label htmlFor='phone'>Phone:</label>
                    <Field name='phone'/>
                </div>
                <div className='grid-2-items-form'>
                    <label htmlFor='website'>Website:</label>
                    <Field name='website'/>
                </div>
                <div className='grid-2-items-form'>
                    <label htmlFor='company.name'>Company:</label>
                    <Field name='company.name'/>
                </div>
                <div className='btn-group'>
                    <button type='submit' className='save-btn'>Save</button>
                    <button type='button'
                            className='cancel-btn'
                            onClick={goHome}>Return</button>
                </div>
            </Form>
        )
    };

    const validateForm = (values) => {
        const errors = {};
        if (!values.name)  {
            errors.name = 'Title is required';
        }
        return errors;
    };

    return (
        <Formik
            initialValues={currentUser}
            onSubmit={onFormSubmit}
            validate={validateForm}>
            {renderForm}
        </Formik>
    );
}

const mapStateToProps = ({users: {list}}, {match: {params: {id}}}) => {
    const currentUser = list.find(user => parseInt(user.id) === parseInt(id));
    return {
        currentUser: currentUser ? currentUser : getEmptyUser()
    }
} ;

const mapDispatchToProps = {
    saveUser
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UsersForm));
