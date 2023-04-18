import React from "react";

const ProgressBar = (props) => {
    const { bgcolor, completed } = props;

    const containerStyles = {
        height: 35,
        width: 'auto',
        backgroundColor: "#294162",
        borderRadius: 100,
        margin: 10
    }

    const fillerStyles = {
        height: '100%',
        width: `${completed}%`,
        backgroundColor: bgcolor,
        borderRadius: 'inherit',
        textAlign: 'right'
    }

    const labelStyles = {
        color: 'white',
        fontWeight: 'bold'
    }

    return (
        <div style={containerStyles} className="col-span-7">
            <div style={fillerStyles}>
                <span style={labelStyles} className="pt-3 m-4 relative top-1">{`${completed}%`}</span>
            </div>
        </div>
    );
};

export default ProgressBar;