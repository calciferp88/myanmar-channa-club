import React from 'react'

function Logo(props: any) {

    const { renderDefault, title } = props;

    return (
        <div className='flex items-center space-x-2'>
            <img 
                className='rounded-full object-cover'
                width={50}
                height={50}
                src="https://i.pinimg.com/originals/75/2a/ea/752aeab6cfe371724a0726b59f66ff2e.jpg"
                alt="logo"
            />
            { renderDefault && <>{renderDefault(props)}</>}
        </div>
    )
}

export default Logo