import { useState } from 'react';

const Hello = () => {
    const [value, setValue] = useState('');
    const [isShow, setShow] = useState(false);

    const toggle = () => value === 'hello' && setShow((prev) => !prev);
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value);
    return (
        <div>
            {isShow && <h1 id="hello">Hello</h1>}
            <input type="text" id="search" value={value} onChange={onChange} />
            <button id="btn" onClick={toggle}>
                Click me
            </button>
        </div>
    );
};

export default Hello;