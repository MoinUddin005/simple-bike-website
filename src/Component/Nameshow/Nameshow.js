import React from 'react';

const Nameshow = (props) => {
    const {alldata} = props;
    return (
        <div>
            <div class="card mb-3">
                    <div className="row g-0">
                        <div className="col-md-4">
                        <img src={alldata.img} class="img-fluid rounded-start" alt="..."/>
                        </div>
                        <div className="col-md-8">
                        
                        <p className="card-text"><b>{alldata.name}</b></p>
                        </div>
                    </div>
</div>
        </div>
    );
};

export default Nameshow;