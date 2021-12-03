import './Details.css';

import React,{useState} from 'react';
function Details()
{
    const [luck,setlucky]=useState("Pl Enter Details");
    var arr=[0,1,2,3,4,5,6,7,8,9];
    var date,no;
    function dateHandler(event)
    {
        date=event.target.value;
        
    }
    function noHandler(event)
    {
        no=event.target.value;
        
    }
    function clickHandler()
    {
        //var d=date.getFullYear().toLocaleString();
        console.log(typeof date);
        date=date.replaceAll("-","");
        console.log(date);
        var sum=0;
        for(var i=0;i<date.length;i++)
        {
            sum+=arr[date[i]];
        }
        console.log(sum);
        var div=sum%no;
        if(div===0)
        {
            console.log('lucky')
             setlucky('Lucky');
        }
        else
        {
            console.log("not lucky")
            setlucky('Not Lucky');   
        }
    }
    return(
        <div className="container">
            <label htmlFor="">Date Of Birth:</label>
            <input type="Date" className="input" onChange={dateHandler} />

            <label htmlFor="">Enter Your Lucky No: </label>
            <input type="text" className="input" onChange={noHandler}/>

            <button  onClick={clickHandler} style={{
                fontSize:"2rem",
                borderRadius:"1rem",
                margin:"auto",
                marginBottom:"1rem",
                padding:"1rem",
                display:"block"
                
            }}>
               Check Number
            </button>

            <div className='txt'>{luck}
           </div>
            
        
        </div>
    );

}
export default Details;