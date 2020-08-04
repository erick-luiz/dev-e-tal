import React from 'react'

function Field({label, value, onChange}) {

    return <div className="col-md-2 col-sm-12">
        
            {label}
            <input type="number" min={0} max={5} step={1} onChange={onChange} value={value}/>

    </div>
}

export default Field