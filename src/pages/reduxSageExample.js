import React from 'react'
import { apiCallFalilure, apiCallRequest, apiCallSuccess } from '../store/action/dogActions';
import { connect } from 'react-redux';

function ReduxSageExample({ fetching, dog, error, apiCallFalilure, apiCallSuccess, apiCallRequest}) {

  return (
    <div className='App'>
       <h1>Welcome to the dog Saga</h1>
       {dog ? (
           <>
            <p className="App-intro">Keep clicking for new dogs</p>
                <img src={dog} alt="Imag of the dog fetch" height={'200px'} width={'200px'}/>
            </>
        ): (
            <p className="App-intro">Replace the React icon with a dog!</p>
        )
       }
       
        <div style={{display: 'flex', justifyContent: 'center'}}>
            {fetching ? (
                <button disabled>Fetching...</button>
            ) : (
                <button onClick={apiCallRequest}>Request a Dog</button>
            )}
        </div>
       
    </div>
  )
}

const mapStateToProps = (state) => ({
    fetching: state.fetching,
    dog: state.dog.dog,
    error: state.error,
});

const mapDispatchToProps = {
    apiCallRequest,
    apiCallSuccess,
    apiCallFalilure
}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxSageExample);