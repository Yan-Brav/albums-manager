import React, {useState} from 'react';
import {connect} from "react-redux";
import {createUser, inputChangeUser,/* saveUser,*/ updateUser} from "../../store/actions/users";
import {useParams} from 'react-router-dom'
import './css/UsersForm.css'



function UsersForm({list, inputChangeUser, createUser,
                       updateUser}) {


    const {id} = useParams();
    // console.log(parseInt(id) > 1);
    const initialUser = (parseInt(id) > 0) ? list.find((item) => parseInt(item.id) === parseInt(id)) : getEmptyUser();
    const [selectedUser, setSelectedUser] = useState( initialUser);

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

    function onInputChange(e) {
        inputChangeUser(setSelectedUser({...selectedUser, [e.target.name]: e.target.value}));
    }

    function onFormSubmit(e) {
        e.preventDefault();
        if(!selectedUser.id) {
            createUser(selectedUser)
        }else {
            updateUser(selectedUser)
        }
        // saveUser(selectedUser);
    }

    return (
        <form className='users-form'
                onSubmit={onFormSubmit}>
            <div>
                <input type='text'
                        name='name'
                        value={selectedUser.name}
                        placeholder='Enter name'
                        onChange={onInputChange}/>
            </div>
            <div>
                <input type='text'
                       name='username'
                       value={selectedUser.username}
                       placeholder='Enter username'
                       onChange={onInputChange}/>
            </div>
            <div>
                <input type='text'
                       name='email'
                       value={selectedUser.email}
                       placeholder='Enter email'
                       onChange={onInputChange}/>
            </div>
            {/*<div>
                <input type='text'
                       name='address'
                       value={`${selectedUser.address.city} ${selectedUser.address.street} ${selectedUser.address.suite}`}
                       placeholder='Enter address'
                       onChange={onInputChange}/>
            </div>*/}
            <div>
                <input type='text'
                       name='phone'
                       value={selectedUser.phone}
                       placeholder='Enter phone'
                       onChange={onInputChange}/>
            </div>
            <div>
                <input type='text'
                       name='website'
                       value={selectedUser.website}
                       placeholder='Enter website'
                       onChange={onInputChange}/>
            </div>
            {/*<div>
                <input type='text'
                       name='company'
                       value={selectedUser.company.name}
                       placeholder='Enter company'
                       onChange={onInputChange}/>
            </div>*/}
            <div>
                <button type='submit' className='save-btn'>Save</button>
                <button type='button' className='cancel-btn'>Cancel</button>
            </div>
        </form>
    );
}

const mapStateToProps = ({users: {list}}) => ({list}) ;


const mapDispatchToProps = {
    inputChangeUser,
    createUser,
    updateUser
    // saveUser
};


export default connect(mapStateToProps, mapDispatchToProps)(UsersForm);
