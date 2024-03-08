import React from 'react';
import '../components/MoviesListStyle.css';

function MoviesList(props){
    // var props = {movieposter}
    
    return(
    <>
    
    <div style={
                // {backgroundImage:`url(${props.movieposter})`, float:'right',backgroundRepeat:'no-repeat',width:'100%',backgroundColor:'yellow'}
                {width:'80%',backgroundColor:'black', padding:'10px 20px',borderRadius:'20px',height:'10%'}
            }>
                <img src={props.movieposter} alt='movie-poster' style={{float:'right',borderRadius:'20px',border:'2px solid yellow '}}></img>
    <div style={{width:'60%'}}>
        <div className='main-div'>
            <div className='movies-list-img-div' style={
                {backgroundImage:`url(${props.movieposter})`,backgroundRepeat:'no-repeat',backgroundSize:'100% 100%'}
            }>
               {/* <img  src={props.movieposter} alt='movie-poster' style={{width:'6rem',height:'8rem'}}></img> */}
            </div>
            <div style={{
                backgroundColor:'black',
                color:'white',
                fontStyle:'oblique',
                padding:'10px 10px'
            }}>
                <h4>{props.movieName}</h4>
                <p>{props.movieYear}{","}{props.movieDirector}</p>
                <div className='movies_timinig-text'>
                    <p>{props.movieMin}{' '}mins</p>
                    <p>{props.movieAction}</p>
                    <p>{props.movieCrime}</p>
                    <p>{props.movieFantacy}</p>
                </div>
                
            </div>
            {/* <strong>vxgxbxvxfx</strong> */}
        </div>
        <p style={{color:'white',fontStyle:'italic',marginTop:'10px',marginBottom:'20px'}}>{props.movieDescription}</p>
    </div>
       <div style={{padding:'10px 10px'}}>
        <ul style={{display:'flex',gap:'20px',listStyle:'none',cursor:'pointer' }}>
            <li><a href='bvvb' alt='lik'><img src='https://cdn-icons-png.flaticon.com/128/929/929468.png' alt='share-it' width='30px' height='30px'></img></a></li>
            <li><a href='bvvb' alt='lik'><img src='https://cdn-icons-png.flaticon.com/128/214/214688.png' alt='like-it'  width='30px' height='30px'></img></a></li>
            <li><a href='bvvb' alt='lik'><img src='https://cdn-icons-png.flaticon.com/128/14988/14988397.png' alt='commit-it'  width='30px' height='30px'></img></a></li>
        </ul>
       </div>
    </div>
    </>
    );

}

export default MoviesList;