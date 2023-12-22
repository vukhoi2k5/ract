import React from 'react'
import './Student.css'
import StudentList from './List'
export default function Student() {
  return (
    <div className='cardStudent'>
        <div className='container'>
            <div className='row'>
              <div className="col-3">
                <img src='https://fpt.vn/storage/upload/images/site/fpt.png' style={{height:'100px',width:'100px'}} />
                </div>
              <div className="col-9 ">
                <h4 className='title-name'>FPT APTECH HA NOI</h4>
              </div>
            </div>
        </div>
        <div className='main-content'>
                {StudentList.map((item, index) => (
                <div className="main" >
                    <div key={index.id} className='avt'>
                        <img src={item.avt} style={{width:'200px',height:'270px'}}/>
                    </div>
                    <div className="produce">
                      <h3 className='title-topic'>Student Card</h3>
                      <div className='title-pro'>
                        <div className="title">
                        <h5 ><b>Name:</b>{item.name}</h5>
                        </div>
                        <div className="title">
                          <h5 ><b>Student ID:</b> {item.id}</h5>
                        </div>
                        <div className="title">
                          <h5 ><b>Email:</b> {item.email}</h5>
                        </div>
                      </div>
                        
                    </div>
                </div>
              ))}
        </div>
    </div>
  )
}