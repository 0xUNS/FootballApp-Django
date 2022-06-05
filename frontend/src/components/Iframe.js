import React from 'react';

const Iframe = ({ source }) => {

    if (!source) {
        return <div>Loading...</div>;
    }

    const src = "https://www.twitter.com/search?q="+source;     
    return (
        <div className="col-md-12">
                <iframe src={src}></iframe>
                <hr></hr>
                {src}
        </div>
    );
};

export default Iframe;