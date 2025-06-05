'use client'
import React from "react";

import { useDispatch, useSelector } from 'react-redux';

import { setData, setError, setLoading, setSort } from '../redux/dataSlice';
import { useEffect } from "react";

import sortMedals from "@/helpers/sortMedals";

const  TableComponenent = () => {

    //redux
    const dispatch = useDispatch();
    const { data, loading, sort, error } = useSelector((state) => state.data);
    //redux end

    type Country = {
        code: string;
        gold: number;
        silver: number;
        bronze: number;
    }

    useEffect(()=>{
        const callApi = async () => {

            dispatch(setLoading(true));
            try{
                const apiData = await fetch('/api/medals?sort=gold');
                if(apiData.ok){
                    const data  = await apiData.json();
                    dispatch(setData(data));

                    await dispatch(setLoading(false));
                    dispatch(setData(data.data));
                    dispatch(setSort(data.msg));

                }else{
                    await Promise.reject(new Error("err"));
                }
            }catch(e){
                dispatch(setLoading(false));
                dispatch(setError(true));
            }
        }

        callApi();
    },[]);

     useEffect(()=>{
        dispatch(setData(sortMedals(data,sort)));
        
    },[sort]);
    const handleClick = (sort:string) => {
        dispatch(setSort(sort));
    };

    return (
    <>

        <h5>Debugging helper</h5>
        
        loading: {JSON.stringify(loading)} <br /><br />

        error: {JSON.stringify(error)} <br /><br />

        sorted by: {sort} <br /><br />
        data: {JSON.stringify(data)}
        <br />
        
        ------------------------
        
  
       
        <h2 className="medal-count"> Medal Count</h2>
            <table className="table">
                <thead>
                    { !loading && !error &&
                        <tr>
                            <th ></th>
                            <th onClick={() => handleClick("gold")} className={`${sort=="gold" ? 'selected-col' : ''}` }><span className={`medal gold` }></span></th>
                            <th onClick={() => handleClick("silver")} className={`${sort=="silver" ? 'selected-col' : ''}` }><span className={`medal silver`}></span></th>
                            <th onClick={() => handleClick("bronze")} className={`${sort=="bronze" ? 'selected-col' : ''}` }><span className={`medal bronze`}></span></th>
                            <th onClick={() => handleClick("total")} className={`${sort=="total" ? 'selected-col' : ''}` }>total</th>
                        </tr>
                    }
                </thead>
                <tbody>
                    { !loading && Array.isArray(data) && data?.map((item,i) => (
                        <tr key={i} className="countryRow">
                            <td className={item.code}><span className="rank">{i+1}</span><span className={`flag ${item.code}`}></span>{item.code}</td>
                            <td>{item.gold}</td>
                            <td>{item.silver}</td>
                            <td>{item.bronze}</td>
                            <td>{item.gold + item.silver+ item.bronze}</td>
                        </tr>
                    ))}
                
                </tbody>
            </table>

            {error &&
                <div className="error">error loading api</div>
            }
      
    </>
    )
  }
  export default  TableComponenent;
