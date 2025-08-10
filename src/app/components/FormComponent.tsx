import React from 'react';

const FormComponent = () => {
    return (
        <div>
            <form action="/cars">
                <input type="text" name='brand' placeholder={'brand'}/>
                <input type="text" name='year' placeholder={'year'}/>
                <input type="text" name='price' placeholder={'price'}/>
                <button>Send</button>
            </form>
        </div>
    );
};

export default FormComponent;