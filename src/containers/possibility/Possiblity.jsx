import React from 'react';
import joseph from '../../assets/stjoseph.jpg';
import './possibility.css';

const Possibility = () => {
  return (
    <div className='gpt3__possibility section__padding'>
      <div className='gpt3__possibility-image'>
        <img src={joseph} alt="joseph" />
      </div>
      <div className='gpt3__possibility-content'>
        <h4>
         Our Patron Saint
        </h4>
        <h1 className='gradient__text'>St Joseph</h1>
        <p>“In Joseph … heads of the household are blessed with the unsurpassed model of fatherly watchfulness and care.”</p>
        <p>Everything we know about the husband of Mary and the foster father of Jesus comes from Scripture 
and that has seemed too little for those who made up legends about him.
We know he was a carpenter, a working man, for the skeptical Nazarenes ask about Jesus, "Is this 
not the carpenter's son?" (Matthew 13:55). He wasn't rich for when he took Jesus to the Temple to be 
circumcised and Mary to be purified he offered the sacrifice of two turtledoves or a pair of pigeons, 
allowed only for those who could not afford a lamb (Luke 2:24).
Despite his humble work and means, Joseph came from a royal lineage. Luke and Matthew disagree 
some about the details of Joseph's genealogy but they both mark his descent from David, the 
greatest king of Israel (Matthew 1:1-16 and Luke 3:23-38). Indeed the angel who first tells Joseph 
about Jesus greets him as "son of David," a royal title used also for Jesus</p>

      </div>
    </div>
  )
}

export default Possibility