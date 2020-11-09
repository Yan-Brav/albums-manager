import React from 'react';

function UserItem({item}) {
    return (
        <div>
            {`${item.name} ${item.phone}`}
        </div>

    );
}

export default UserItem;
