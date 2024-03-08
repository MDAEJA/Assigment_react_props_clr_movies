import React from "react";
import '../components/ColorPickerStyle.css'


function ColorPicker(props){
    return (
        <>
        <div>
            <div  className="color-picker-div" style={
                {
                    backgroundColor : props.divColor
                }
            }>
            </div>
            <div className="text-div">
            <h3>{props.clrcode}</h3>
            <p style={{
                color:props.fontClr,
                fontStyle :'oblique',
                fontSize :'1.2rem'

            }}>{props.clrname}</p>
            </div>
        </div>
        </>
    );

};

export default ColorPicker;