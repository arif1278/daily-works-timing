import logo from './../../media/logo.png';
import React from 'react';
import Activities from '../Activities/Activities';
import Questions from '../Questions/Questions';


const Main = ({ addToList }) => {
    return (
        <main className="col-sm-12 col-md-6 col-lg-9 bg-light">
            <div className="container w-80">
                <div className="logo mt-5 w-50">
                    <a href="/"><img src={logo} alt="" /></a>
                </div>
                <h2 className='h4 my-4'>Select Today's Excercise</h2>
                <Activities addToList={addToList}></Activities>

                <h1 className='h4 my-5'>Questions and Answers</h1>
                <Questions></Questions>
            </div>
        </main>
    );
};

export default Main;