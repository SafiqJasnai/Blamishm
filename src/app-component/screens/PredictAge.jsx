import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import apiPredictAge from '../api/apiPredictAge';
import SVGLeftArrow from '../svg/SVGLeftArrow';
import Sidebar from '../utils/Sidebar';

const PredictAge = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({});
    const [result, setResult] = useState({});
    const [error, setError] = useState({});

    useEffect(() => {
        console.log(result)
    }, [result])
    
    const handleUserName = (event) => {
        const { name, value } = event.target;
        if (value === '') {
            setUser(prev => {
                const current = {...prev};
                delete current[name];
                return current;
            });
        } else {
            setUser(prev => ({...prev, [name]: value }) );
        }
    }

    const FragmentLoading = () => (
        <div className='justify-center flex mt-5' role="status">
            <svg aria-hidden="true" class="mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-lime-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
            </svg>
            <span class="sr-only">Loading...</span>
        </div>
    );



    const FragmentInput = () => (
        <div className='w-3/5 shadow p-5 rounded-lg justify-center flex'>
            <div className='w-1/2'>
                <label className='justify-center flex text-xl text-lime-900 mb-3'>Insert your name</label>
                <div className='flex justify-between gap-2'>
                    <input 
                        type='text'
                        name='name'
                        value={user.name || ""}
                        onChange={e => handleUserName(e)}
                        className='bg-lime-50 border border-lime-300 text-lime-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-lime-700 dark:border-lime-600 dark:placeholder-lime-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    />
                    <button 
                    
                    onClick={() => {
                        FragmentLoading();
                        apiPredictAge({
                            user: user
                        })
                            .then(response => {
                                setResult(response.data ?? {});
                            })
                            .catch(error => setError(error));
                    }}
                    className={`${user.name ? 'animate-pulse' : ''} text-lime-900 rounded-lg shadow-md px-3 py-1 bg-lime-200 text-sm hover:shadow-lg flex items-center`}>
                        Go!
                    </button>
                </div>
                {/* {error ?? error} */}
                {result.age ? 
                    <div className='justify-center flex mt-5 gap-2'>
                        <label className='text-2xl text-lime-600'>Your Age is</label>
                        <label className='text-2xl text-lime-600 font-bold'>{result.age}</label>
                    </div>
                :
                    <></>
                }
            </div>
        </div>
    );

    return (
        <div className='flex bg-lime-100 w-screen h-screen flex-row'>
            <Sidebar />
            <div className='p-5 w-full'>
                <h1 className="text-3xl text-lime-600 font-bold">
                    <button 
                    className='pr-3'
                    onClick={() => {
                        navigate(-1)
                    }}>
                        <SVGLeftArrow />
                    </button>
                    Predict Your Age
                </h1>
                <div className='mt-10 flex justify-center'>
                    {FragmentInput()}
                </div>
            </div>
        </div>
    );
};

export default PredictAge;