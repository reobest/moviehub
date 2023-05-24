import React from 'react'
import './styles/pricing.css'
import pricingList from './components/pricinglist'
import { useGlobalContext } from './components/cContext'
const Pricing = () => {
    const context = useGlobalContext()
    const {Price1,setPrice1,Price2,setPrice2,Price3,setPrice3,mode} = context
    const NewPricingList = pricingList.map((table,index) => {
        const {id,name,list,Button,price1,price2} = table
        return <div className={mode ? 'pricing-wrapper flex b-r' : 'pricing-wrapper flex b-r themewhite green'} key={id}>
        <h1>{name}</h1>
        <div className='price'>
            <span id={index}>{ Price1 && id === 1 ? price1 : 
                              !Price1 && id === 1 ? price2 :
                               Price2 && id === 2 ? price1 :
                              !Price2 && id === 2 ? price2 :
                               Price3 && id === 3 ? price1 :
                              !Price3 && id === 3 ? price2 : ''
            
            
            }</span><span>{ Price1 && id === 1 ? 'Monthly' : 
                !Price1 && id === 1 ? 'Yearly' :
                 Price2 && id === 2 ? 'Monthly' :
                !Price2 && id === 2 ? 'Yearly' :
                 Price3 && id === 3 ? 'Monthly' :
                !Price3 && id === 3 ? 'Yearly' : ''


}</span>
        </div>
        <ul>
            <li>{list.numone}</li>
            <li>{list.numtwo}</li>
            <li>{list.numthree}</li>
            <li>{list.numfour}</li>
            <li>{list.numfive}</li>
            <li>{list.numsix}</li>
        </ul>
        <button>{Button}</button>
        <div className='choose-price flex'>
            <div className='price-toogle' onClick={() => id ===1 ? setPrice1(!Price1) : id === 2 ? setPrice2(!Price2) : setPrice3(!Price3)} id={index}>
                <div className={ Price1 && id === 1 ? 'toggle' : 
                                !Price1 && id === 1 ? 'toggle moveleft' :
                                 Price2 && id === 2 ? 'toggle' :
                                !Price2 && id === 2 ? 'toggle moveleft' :
                                 Price3 && id === 3 ? 'toggle' :
                                !Price3 && id === 3 ? 'toggle moveleft' : ''
            
            
            }></div>
            </div>
        </div>
      </div>
    })
  return (
    <div className={ mode ? 'pricing flex' : 'themewhite flex pricing'}>
      {NewPricingList}
    </div>
  )
}

export default Pricing