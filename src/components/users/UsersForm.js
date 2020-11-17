import React, {useState} from 'react';
import {connect} from 'react-redux';
import {createUser,
    inputChangeUser,
    updateUser} from '../../store/actions/users';
import {useParams, useHistory} from 'react-router-dom'
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

function UsersForm({list,
                   inputChangeUser,
                   createUser,
                   updateUser
                    }) {

    const {id} = useParams();
    const numberId = parseInt(id);
    const initialUser = (numberId > 0) ? list.find((item) => parseInt(item.id) === numberId) : getEmptyUser();
    const [selectedUser, setSelectedUser] = useState( initialUser);

    let history = useHistory();

    function goHome() {
        history.push('/users');
    }

    function onInputChange(e) {
        inputChangeUser(setSelectedUser({...selectedUser, [e.target.name]: e.target.value}));
    }

    function onFormSubmit(e) {
        e.preventDefault();
        if(!selectedUser.id) {
            createUser(selectedUser);
            setSelectedUser(getEmptyUser());
        }else {
            updateUser(selectedUser)
        }
    }

    return (
        <form id='users-form'
            className='users-form'
                onSubmit={onFormSubmit}>
            <div className='grid-2-items-form'>
                <label htmlFor='name'>Name</label>
                <input type='text'
                       name='name'
                       value={selectedUser.name}
                       placeholder='Enter name'
                       onChange={onInputChange}/>
            </div>
            <div className='grid-2-items-form'>
                <label htmlFor='username'>Username</label>
                <input type='text'
                       name='username'
                       value={selectedUser.username}
                       placeholder='Enter username'
                       onChange={onInputChange}/>
            </div>
            <div className='grid-2-items-form'>
                <label htmlFor='email'>Email</label>
                <input type='text'
                       name='email'
                       value={selectedUser.email}
                       placeholder='Enter email'
                       onChange={onInputChange}/>
            </div>
            <fieldset id='address' form='users-form'>
                <legend>Address</legend>
                <div className='grid-2-items-form'>
                    <label htmlFor='address.city'>City</label>
                    <input type='text'
                           name='address.city'
                           value={`${selectedUser.address.city}`}
                           placeholder='Enter city'
                           onChange={onInputChange}/>
                </div>
                <div className='grid-2-items-form'>
                    <label htmlFor='address.street'>Street</label>
                    <input type='text'
                           name='address.street'
                           value={`${selectedUser.address.street}`}
                           placeholder='Enter street'
                           onChange={onInputChange}/>
                </div>
                <div className='grid-2-items-form'>
                    <label htmlFor='address.suite'>Suite</label>
                    <input type='text'
                           name='address.suite'
                           value={`${selectedUser.address.suite}`}
                           placeholder='Enter suite'
                           onChange={onInputChange}/>
                </div>
                    <div className='grid-2-items-form'>
                    <label htmlFor='address.zipcode'>Zipcode</label>
                    <input type='text'
                           name='address.zipcode'
                           value={`${selectedUser.address.zipcode}`}
                           placeholder='Enter zipcode'
                           onChange={onInputChange}/>
                </div>
            </fieldset>
            <div className='grid-2-items-form'>
                <label htmlFor='phone'>Phone</label>
                <input type='text'
                       name='phone'
                       value={selectedUser.phone}
                       placeholder='Enter phone'
                       onChange={onInputChange}/>
            </div>
            <div className='grid-2-items-form'>
                <label htmlFor='website'>Website</label>
                <input type='text'
                       name='website'
                       value={selectedUser.website}
                       placeholder='Enter website'
                       onChange={onInputChange}/>
            </div>
            <div className='grid-2-items-form'>
                <label htmlFor='company'>Company</label>
                <input type='text'
                       name='company'
                       value={selectedUser.company.name}
                       placeholder='Enter company'
                       onChange={onInputChange}/>
            </div>
            <div className='btn-group'>
                <button type='submit' className='save-btn'>Save</button>
                <button type='button'
                        className='cancel-btn'
                        onClick={goHome}>Return</button>
            </div>
        </form>
    );
}

const mapStateToProps = ({users: {list}}) => ({list}) ;

const mapDispatchToProps = {
    inputChangeUser,
    createUser,
    updateUser
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersForm);
