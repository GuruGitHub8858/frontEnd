import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';
const Home = () => {

    const navi = useNavigate();

    function callBack() {
        navi('/content');
    }

    return (
        <div>
            <div>
                <button onClick={callBack}>To Content</button>
                <Button type="primary">Primary Button</Button>
            </div>
        </div>
    );
}

export default Home;
