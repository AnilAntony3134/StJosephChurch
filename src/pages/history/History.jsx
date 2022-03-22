import React from 'react';
import Article from '../../components/article/Article';
import {Header1} from '../../components';
import { blog01, blog02, blog03, blog04, blog05, blog06} from './import';
import './history.css';

const History = () => {
  return (
    <div>
    <Header1 title="Our Priests  " subtitle="This is the word of jesus and thou you shall heal"/>

    <div className='history-wrap'>

      <h1>"Our Bishops"</h1>
     
      <div className='stjoseph__blog-container_groupB'>
      <Article imgUrl={blog05} text="Rt. Rev Dr. Vincent Dereira" text2="1880-1974"/>
        <Article imgUrl={blog04} text="Rt. Rev Dr. Peter Bernard Pereira" text2="1966-1978"/>
        <Article imgUrl={blog03}  text="Rt. Rev Dr. Jacob Acharuparambil" text2="1978-1990"/>
        <Article imgUrl={blog02} text="Rt. Rev. Dr. Soosai M Pakiam" text2="1990-2022"/>
        <Article imgUrl={blog01} text="Most Rev. Dr. Thomas J Netto " text2="2021-Present"/>
        <Article imgUrl={blog06} text="Most Rev. Dr. Christudas Rajappan " text2="2016-Present"/>
        </div>

         <h1>"Our Priests"</h1> 
         <div>
           <table>
             <tr>
               <th>Name</th>
               <th>Year</th>
             </tr>
            <tr>
              <td>Rev. Fr. Francis Miranda</td>
              <td>1864-1867</td>
            </tr>
            <tr>
              <td>Rev. Fr. Mary Victor OCD</td>
              <td>1867-1873</td>
            </tr>
            <tr>
              <td>Rev. Fr. Emygdius OCD</td>
              <td>1874-1876</td>
            </tr>
            <tr>
              <td>Rev. Fr. Antoninus OCD </td>
              <td>1876-1879</td>
            </tr>
            <tr>
              <td>Rev. Fr. Ferdinand OCD</td>
              <td>1879-1881</td>
            </tr>
            <tr>
              <td>
             Rev. Fr. Gregory OCD </td><td> 1881-1882</td></tr>
             <tr>
               <td>Rev. Fr. Mary Victor OCD </td><td> 1882-1896 </td></tr>
               <tr>
               <td>Rev.Fr. John of the Cross OCD </td><td>1896-1905 </td></tr>
               <tr>
               <td>Rev. Fr. Paschasius Heriz OCD </td><td>1905-1912</td></tr>
               <tr>
               <td>Rev. Fr. John of the Cross OCD </td><td>1912-1913</td></tr>
               
               <tr><td>Rev. Fr. Ubald OCD </td><td>1913-1914</td></tr>
               <tr>
               <td>Rev.Fr.John Gonsalves OCD </td><td>1914-1914</td></tr>
               <tr>
               <td>Rev. Fr. Vincent OCD </td><td>1914-1921</td></tr>
               <tr>
               <td>Rev. Fr. Xavier OCD </td><td>1921-1932</td></tr>
               <tr>
               <td>Rev. Fr. Illdaphonse OCD </td><td>1932-1934</td></tr>
               <tr>
               <td>Rev. Fr. Paul OCD </td><td>1934-1944</td></tr>
               <tr>
               <td>Rev. Fr. Pius OCD </td><td>1944-194</td></tr>
               <tr>
               <td>Very. Rev. Msgr. John N.Fernandez </td><td>1948-1969</td></tr>
               <tr>
               <td>Very. Rev. Fr. Alphonsus .G </td><td>1969-1978</td></tr>
               <tr>
               <td>Very. Rev. Fr. Rockey Fernandez </td><td>1978-1980</td></tr>
               <tr>
               <td>Very. Rev. Msgr. James Amado </td><td>1980-1989</td></tr>
               <tr>
               <td>Very. Rev. Msgr. A.George </td><td>1989-1991</td></tr>
               <tr>
               <td>Very. Rev. Fr. M. Joseph </td><td>1991-1996</td></tr>
               <tr>
               <td>Very. Rev. Fr. Cletus Gomez </td><td>1996-2001</td></tr>
               <tr>
               <td>Very. Rev. Fr. Richard D’Cruz </td><td>2001-2005</td></tr>
               <tr>
               <td>Very. Rev. Dr.C. Joseph </td><td>2005-2011</td></tr>
               <tr>
               <td>Very Rev. Msgr. John D. Bosco </td><td>2011-2015</td></tr>
               <tr>
               <td>Very. Rev. Fr. George Gomez </td><td>2015-2018</td></tr>
               <tr><td>Very Rev. Msgr. Nicholas T </td><td>2018-</td></tr>

  
            
           </table>
         </div>
        </div>

        </div>

         
    
  
  )
}
export default History