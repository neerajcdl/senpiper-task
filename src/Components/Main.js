import React from 'react';
import Form from './Form';
import Table from './Table';
import Header from './Header';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route } from "react-router-dom"


class Main extends React.Component {
    // DATA;
    constructor(props) {
        super(props)
        this.state = {
            textarea: null,
            name: null,
            phone: null,
            email: null,
            customRadio: ""
        };
    }

    registrationHandler = (event) => {
        event.preventDefault()

        const textarea = event.target.textarea.value;
        const phone = event.target.phone.value;
        const name = event.target.name.value;
        const email = event.target.email.value;

        this.setState({
            textarea: textarea,
            phone: phone,
            name: name,
            email: email,
            isRegisterd: true
        })

        if (textarea === "") {
            toast.error("textarea field is required", {
                position: "top-center",
                type: "error"
            })
        } else if (phone === "") {
            toast.error("phone field is required", {
                position: "top-center",
                type: "error"
            })
        } else if (name === "") {
            toast.error("name field is required", {
                position: "top-center",
                type: "error"
            })
        }

        else if (email === "") {
            toast.error("email field is required", {
                position: "top-center",
                type: "error"
            })
        }

        else {
            localStorage.setItem('textarea', textarea)
            localStorage.setItem('name', name)
            localStorage.setItem('phone', phone)
            localStorage.setItem('email', email)
            toast.error("Successful!", {
                position: "top-center",
                type: "success"
            })
        }
    }

    changeHandler = (event) => {
        // alert("hello neeraj")
        //   const name = event.target.name  
        const customRadio = event.target.value;

        this.setState({
            ...customRadio,
            customRadio: [...customRadio]
        })
        // console.log("test",...customRadio);

        if (customRadio === "") {
            toast.error("customRadio field is required", {
                position: "top-center",
                type: "error"
            })
        } else {
            localStorage.setItem('customRadio', customRadio)
        }
    }

    //add data to localStorage 
    componentDidMount() {
       this.DATA = JSON.parse(localStorage.getItem('contact_form',"items"));

       if(localStorage.getItem('contact_form')){
           this.setState({
               textarea:this.DATA.textarea,
               name:this.DATA.name,
               email:this.DATA.email,
               phone: this.DATA.phone,
               customRadio: this.DATA.customRadio
           })
       }else{
           this.setState({
               textarea: '',
               name: '',
               email: '',
               phone: '',
               customRadio: ''
           })
       }
    }

    componentWillUpdate(nextProps, nextStage) {
        localStorage.setItem('contact_form', JSON.stringify(nextStage));
    }



    // on change event handlers
    eventHandleChange(event) {
        event.preventDefault()
        this.setState({ name: event.target.value })
    }

    eventHandleChange(event) {
        event.preventDefault()
        this.setState({ email: event.target.value })
    }

    eventHandleChange(event) {
        event.preventDefault()
        this.setState({ phone: event.target.value })
    }

    eventHandleChange(event) {
        event.preventDefault()
        this.setState({ textarea: event.target.value })
    }


    render() {
        return (
            <div>
              <Header />
               <Routes>
                   <Route path='/table' element={<Table textarea={this.state.textarea} name={this.state.name} phone={this.state.phone} email={this.state.email} customRadio={this.state.customRadio} />} />
                   <Route path='/' element={ <Form submit={this.registrationHandler} handleChange={this.eventHandleChange} handleRadioChange={this.changeHandler} />} />
               </Routes>

               

                {/* {this.state.isRegisterd ? <Table textarea={this.state.textarea} name={this.state.name} phone={this.state.phone} email={this.state.email} customRadio={this.state.customRadio} /> : <Form submit={this.registrationHandler} handleChange={this.eventHandleChange} handleChanges={this.changeHandler} />} */}

                {/* <Routes>
                    <Route path="/" element={<Form />} />
                    <Route path="/table" element={<Table />} />
                </Routes> */}

                
                <ToastContainer />
            </div>

        )
    }
}


export default Main;
