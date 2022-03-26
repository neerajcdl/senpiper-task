import React from "react";
import './Form.css'

function Form(props) {

    return (

        <form onSubmit={props.submit}>
            <div className="container form-containers">
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Text Field</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Hello" name="textarea" value={props.textarea} onChange={props.handleChange}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Phone Field</label>
                            <input type="phone" className="form-control" id="exampleInputphone" placeholder="+91 9999 999 999" name="phone"value={props.phone} onChange={props.handleChange} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Name</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" name="name" value={props.name} onChange={props.handleChange} />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" name="email" value={props.email} onChange={props.handleChange}/>
                        </div>

                        <label htmlFor="exampleInputEmail1">Radio button</label>
                        <div className="radiobtnclass" >
                            <div className="custom-control custom-radio exgofaba-part">
                                <input type="radio" id="customRadio1" name="customRadio" className="custom-control-input" value="excellent" onChange={props.handleRadioChange} />
                                <label className="custom-control-label" htmlFor="customRadio1">Excellent</label>
                            </div>
                            <div className="custom-control custom-radio exgofaba-part" >
                                <input type="radio" id="customRadio2" name="customRadio" className="custom-control-input" value="Good" onChange={props.handleRadioChange} />
                                <label className="custom-control-label" htmlFor="customRadio2">Good</label>
                            </div>
                            <div className="custom-control custom-radio exgofaba-part">
                                <input type="radio" id="customRadio3" name="customRadio" className="custom-control-input" value="fair" onChange={props.handleRadioChange} />
                                <label className="custom-control-label" htmlFor="customRadio3">Fair</label>
                            </div>
                            <div className="custom-control custom-radio exgofaba-part">
                                <input type="radio" id="customRadio4" name="customRadio" className="custom-control-input" value="bad" onChange={props.handleRadioChange} />
                                <label className="custom-control-label" htmlFor="customRadio4">Bad</label>
                            </div>
                        </div>
                    </div>
                </div>
                <button type="submit" className="btn btn-success sytle-btn-css">Submit</button>
            </div>

        </form>
    )
}

export default Form;