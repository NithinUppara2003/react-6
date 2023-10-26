import './Content.css'
import Pic from './ResumePic.jpg'
function Home(){
    return(
        <div>
            <div className='intro'>
                <img src={Pic} alt='pictur'></img>
                <div className="container-fluid text-center" id="name"> Uppara Nithin </div>
                <div className="container-fluid text-end" id='profession'>Bacherlor of Technology in Computer Science and Engineering</div>
            </div>
            <div>
                <div className='dummy'></div>
                <div className='text-start' id='aboutme'>About Me:</div>
                <div className='text-start' id='aboutmecontent'>Greetings! I'm Uppara Nithin, a dedicated B.Tech student majoring in Computer Science. I have a relentless passion for all things tech and a burning desire to make a meaningful impact in the world of computing.
                As a computer science student, I've had the opportunity to gain expertise in various aspects of the field.  My academic journey has equipped me with a strong foundation in problem-solving, programming languages, and data structures.
                <br /><br />I am self-motivated, responsible, hard-working person. I am able to work well both in a team as well as on my initiative. I am flexible with timekeeping skills, energetic, and eager to learn new skills.
                Currently, I am looking for my first working experience with the Software Companies and implement my knowledge to innovate new things and to learn how the things work.
                </div>
            </div>
        </div>
    )
}
export default Home;
