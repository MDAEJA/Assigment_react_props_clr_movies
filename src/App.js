// import logo from './logo.svg';
import './App.css';
import ColorPicker from './components/ColorPicker';
import MoviesList from './components/MoviesList';
const color_picker_arr = [{
  colorName : 'Pink',
  colorCode : '#FF6663',
},
{
  colorName : 'Gray',
  colorCode : '#333333',
},
{
  colorName : 'Black',
  colorCode : '#000000',
},{
  colorName : 'Green',
  colorCode : '#38BB14',
},{
  colorName : 'Red',
  colorCode : '#C90B0B',
},
{
  colorName : 'Orange',
  colorCode : '#FF8000',
},
{
  colorName : 'Yellow',
  colorCode : '#FFF500',
},
{
  colorName : 'Light Gray',
  colorCode : '#CCCCCC',
},
{
  colorName : 'Purple',
  colorCode : '#7E41A2',
},
{
  colorName : 'Brown',
  colorCode : '#C14911',
}] 

const movies_list =[{
  movie_name : 'Bright',
  movie_img : "https://upload.wikimedia.org/wikipedia/en/a/a7/BrightPoster.jpeg",
  movie_year : '2017',
  movie_director : 'David Ayer',
  movie_min : '117',
  movie_action : "Action",
  movie_crime : 'Crime',
  movie_fantacy : 'Fantacy',
  movie_desc : '"Bright is a 2017 American urban fantasy action film[4][5] directed by David Ayer and written by Max Landis. The film is set in an alternate present in which humans and mythical creatures co-exist."'
},
{
  movie_name : 'Tom Raider',
  movie_img : 'https://upload.wikimedia.org/wikipedia/en/b/bd/Tomb_Raider_%282018_film%29.png',
  movie_year : '2018',
  movie_director : 'Roar Uthaug',
  movie_min : '127',
  movie_action : "Action",
  movie_crime : 'Adventure',
  movie_fantacy : '',
  movie_desc : "Tomb Raider is a 2018 action-adventure film directed by Roar Uthaug, with a screenplay by Geneva Robertson-Dworet and Alastair Siddons, from a story by Evan Daugherty and Robertson-Dworet.."
},
{
  movie_name : 'Aquaman',
  movie_img : 'https://upload.wikimedia.org/wikipedia/en/e/ed/Aquaman_%28film%29_poster.jpg',
  movie_year : '2018',
  movie_director : 'James Wan',
  movie_min : '127',
  movie_action : "Action",
  movie_crime : 'Superhero',
  movie_fantacy : 'Fantacy',
  movie_desc : "Aquaman is a 2018 American superhero film based on the DC character of the same name. Co-produced and distributed by Warner Bros. Pictures, it is the sixth film in the DC Extended Universe (DCEU). "
},
{
  movie_name : 'Tom Raider',
  movie_img : 'https://upload.wikimedia.org/wikipedia/en/b/bd/Tomb_Raider_%282018_film%29.png',
  movie_year : '2018',
  movie_director : 'Roar Uthaug',
  movie_min : '127',
  movie_action : "Action",
  movie_crime : 'Adventure',
  movie_fantacy : '',
  movie_desc : "Tomb Raider is a 2018 action-adventure film directed by Roar Uthaug, with a screenplay by Geneva Robertson-Dworet and Alastair Siddons, from a story by Evan Daugherty and Robertson-Dworet.."
},
{
  movie_name : 'Aquaman',
  movie_img : 'https://upload.wikimedia.org/wikipedia/en/e/ed/Aquaman_%28film%29_poster.jpg',
  movie_year : '2018',
  movie_director : 'James Wan',
  movie_min : '127',
  movie_action : "Action",
  movie_crime : 'Superhero',
  movie_fantacy : 'Fantacy',
  movie_desc : "Aquaman is a 2018 American superhero film based on the DC character of the same name. Co-produced and distributed by Warner Bros. Pictures, it is the sixth film in the DC Extended Universe (DCEU). "
}]




function App() {
  return (
    <>
    <div className='heading-text'><h1>Color Picker</h1></div>
    <div className='main-container'>
      {
        color_picker_arr.map((ele,index)=>{
          return(
            <>
            <ColorPicker divColor={ele.colorCode} clrcode={ele.colorCode} clrname={ele.colorName} fontClr={ele.colorCode}
             key={index}></ColorPicker>
            </>
          );
        })
      }

    </div>
    
    <div><h2 style={{backgroundColor:'black',color:'white',fontStyle:'oblique',textAlign:'center',padding:"10px 10px", textDecoration:'underline'}}>Movies List</h2></div>
     <div className='movie-list-div'>
      {
        movies_list.map((ele,index)=>{
          return(
            <>
            <MoviesList movieName={ele.movie_name} movieYear={ele.movie_year} movieDirector={ele.movie_director}
             movieMin={ele.movie_min} movieAction={ele.movie_action} movieCrime={ele.movie_crime} movieFantacy={ele.movie_fantacy}
             movieDescription={ele.movie_desc} movieposter={ele.movie_img} key={index}></MoviesList>
            </>
          );
        })
      }
     </div>

    </>
    
    
  );
}

export default App;
