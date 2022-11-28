import React from 'react';
import { useNavigate } from 'react-router-dom';
import SVGRightArrow from '../svg/SVGRightArrow';
import Sidebar from '../utils/Sidebar';

export const Cards = ({
    Title,
    Desc,
    href,
}) => {
    const navigate = useNavigate();

    return (
    <div class="w-full h-full">
        <div class="max-w-sm rounded overflow-hidden shadow-lg hover:shadow-xl">
            <div class="px-6 py-4">
            <div class="font-bold text-lime-700 text-xl mb-2">{Title}</div>
            <p class="text-lime-600 text-sm">
                {Desc}
            </p>
            </div>
            <div class="px-6 pt-2 pb-3">
            <button 
            onClick={() => navigate(href)}
            className='text-lime-900 rounded-2xl shadow-md px-3 py-1 bg-lime-200 text-sm hover:shadow-lg flex gap-2 justify-between'>
                Test it out
                <SVGRightArrow />
            </button>
            </div>
        </div>
    </div>
    )
}

const Home = () => {
    return (
        <div className='flex bg-lime-100 w-screen flex-row'>
            <Sidebar />
            <div className='p-5'>
                <h1 className="text-3xl text-lime-600 font-bold">BLAMISHM</h1>
                <div className='p-5 gap-5 grid grid-cols-3'>
                    <Cards 
                        Title='Predict Your Age'
                        Desc='Will predict your age by inserting your name'
                        href='/predict-age'
                    />
                    <Cards 
                        Title='Predict Your Nationality'
                        Desc='Will predict your age by inserting your name'
                        href='/predict-age'
                    />
                    <Cards 
                        Title='Generate Random Task'
                        Desc='Will predict your age by inserting your name'
                        href='/predict-age'
                    />
                    <Cards 
                        Title='University Based on Country'
                        Desc='Will predict your age by inserting your name'
                        href='/predict-age'
                    />
                    <Cards 
                        Title='Get Your IP'
                        Desc='Will predict your age by inserting your name'
                        href='/predict-age'
                    />
                    <Cards 
                        Title='Predict Your Gender'
                        Desc='Will predict your age by inserting your name'
                        href='/predict-age'
                    />
                    <Cards 
                        Title='Get IP Location'
                        Desc='Will predict your age by inserting your name'
                        href='/predict-age'
                    />
                </div>
            </div>
            <div>
                
            </div>
        </div>
    );
};

export default Home;