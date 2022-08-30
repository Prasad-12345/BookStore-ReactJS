import React, { useState } from 'react'
import './addressDetail.css'
import Button from '@mui/material/Button';
import { addAddress } from '../../services/dataService';

function AddressDetail(props) {
        const[addressObj, setAddressObj] = useState({'address':'', 'landmark':'', 'city':'', 'state':'', 'pincode':'', 'address_type':''})
        const[addressType, setAddressType] = useState('');

        const takeAddress = (event) => {
            setAddressObj((prevState)=>({...prevState, address:event.target.value}))
        }

        const takeCity = (event) => {
            setAddressObj((prevState)=>({...prevState, city:event.target.value}))
        }

        const takeState = (event) => {
            setAddressObj((prevState)=>({...prevState, state:event.target.value}))
        }

        const takePincode = (event) => {
            setAddressObj((prevState)=>({...prevState, pincode:event.target.value}))
        }

        const takeLandmark = (event) => {
            setAddressObj((prevState)=>({...prevState, landmark:event.target.value}))
        }

        // const takeAddressType = (event) => {
        //     setAddressType(event.target.value)
        // }

        const selectAddressType = (value) => {
            // setAddressType(value)
            setAddressObj((prevState)=>({...prevState, address_type: value}))
        }

    const listenToContinue = (obj) => {
        addAddress(obj).then((response)=>{console.log(response); props.listenToOrderSummery()}).catch((error)=>(console.log(error)))
    }
  return (
    <div className='addressDetail-container'>
        <div className="addressDetail-child1">
            <div className="customerDetails">
                Customer Details
            </div>
            <div className="addNewAddress">
                <input type="text" value="add new address" className='addNewAddress-btn' />
            </div>
        </div>
        <div className="addressDetail-child2">
            <div className="addressDetail-fullName">
                <div className="fullName-text">
                    FullName
                </div>
                <input type="text" name="fullName" id="" className='input-fullName'/>
            </div>
            <div className="addressDetail-mobileNumber">
                <div className="fullName-text">
                    MobileNumber
                </div>
                <input type="text" name="fullName" id="" className='input-fullName'/>
            </div>
        </div>
        <div className="addressDetail-child3">
            <div className="addressDetail-address">
                <div className="address-text">
                    Address
                </div>
                <input onChange={takeAddress} type="text" className='inputAddress' />
            </div>
        </div>
        <div className="addressDetail-child4">
            <div className="addressDetail-city">
                <div className="fullName-text">
                    city/town
                </div>
                <input onChange={takeCity} type="text" name="fullName" id="" className='input-city'/>
            </div>
            <div className="addressDetail-state">
                <div className="fullName-text">
                    state
                </div>
                <input onChange={takeState} type="text" name="fullName" id="" className='input-state'/>
            </div>
        </div>
        <div className="addressDetail-child5">
            <div className="addressDetail-pincode">
                <div className="fullName-text">
                    pincode
                </div>
                <input onChange={takePincode} type="text" name="fullName" id="" className='input-pincode'/>
            </div>
            <div className="addressDetail-landmark">
                <div className="fullName-text">
                    landmark
                </div>
                <input onChange={takeLandmark} type="text" name="fullName" id="" className='input-landmark'/>
            </div>
        </div>
        <div className="addressDetail-child6">
            {/* <div className="addressType">

            </div> */}
            <div className="type-text">
                type
            </div>
            <div className="input-radio">
                <div className="radio1">
                    <input type="radio" name="type"  id=""  onChange={()=>selectAddressType('home')}/><span className="addType-text">home</span>
                </div>
                <div className="radio2">
                    <input type="radio" name="type" onChange={()=>selectAddressType('office')} id="" /><span className="addType-text">office</span>
                </div>
                <div className="radio3">
                    <input type="radio" name="type" onChange={()=>selectAddressType('other')} id="" /><span className="addType-text">other</span>
                </div>
            </div>
        </div>
        <div className="addressDetail-child7">
            {!props.orderSummery && <Button variant="contained" className='addressDetail-continue' onClick={()=>{listenToContinue(addressObj)}}>continue</Button>}
        </div>
    </div>
  )
}

export default AddressDetail
