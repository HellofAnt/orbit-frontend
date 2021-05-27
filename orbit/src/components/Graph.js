import React from "react";

const Graph = (props) => {
    const { bgcolor, completed, category } = props;

    const bar = {
        //width: '100%',
        height: 30,
        backgroundColor: '#E0E0DE',
        margin: 10,
    }

    const filler = {
        width: `${completed}%`,
        height: '100%',
        backgroundColor: bgcolor,
        //transition: 'width 1s ease-in-out',
        //textAlign: 'right',
    }

    const label = {
        padding: 5,
        fontWeight: 'bold',
    }

    return (
        <div style={bar}>
            <div style={filler}>
                <div style={label}>
                    <span>{`${category}`}</span>
                    <span>{`${completed}%`}</span>
                </div>
            </div>
        </div>
    )
}

export default Graph;