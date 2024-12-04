import './index.css';
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Home=()=>{
  return(
        <div className="card">

            <div className='h'>
           <h1>Welcome to MS Dhoni's Official Page</h1>
           <img src="/assets/ms.jpg" alt="ms-image"/>
           <p>MS Dhoni is one of the greatest cricketers of all time. Known for his calm demeanor
            and remarkable leadership, he has achieved iconic status in the cricketing world.
           </p>
           <p>Mahendra Singh Dhoni is an Indian professional cricketer who plays as a right-handed batter and a wicket-keeper.</p>
        </div>
        <div className='cap'>
        <div>
            <img src="/assets/iconms2.jpg" alt="icon" width={"250px"}/>
        </div>
        <div className='cap1'>
            <h1>MS Dhoni's Fight</h1>
            <p>MS Dhoni, India’s legendary former captain and finisher, 
               was the last recognized batsman at the crease. 
               With India needing 148 more runs from 120 balls, the equation was daunting, 
               but Dhoni, known for his calm and calculated approach under pressure, began to rebuild the innings.</p>
        </div>
        </div>
        <div className='cap'>
            <div>
               <img src="/assets/iconms3.jpg" alt="icon"  width={"300px"} height={"280px"}/>
            </div>
            <div className='cap1'>
                <h1>India's defeat</h1>
                <p>The run out of Dhoni became a symbol of the end of an era for Indian cricket, marking what could be considered his final World Cup appearance. 
                    It was a fittingly dramatic and emotional moment for a player who had been central to India's success in ICC tournaments over the years.</p>
            </div>
        </div>
        <hr/>
        <footer class="footer">
        <p>&copy; 2024 MS Dhnoi. All rights reserved.</p>
        <p>Follow us on:
            <FaFacebook className='i'/>
            <FaInstagram className='i'/>
            <FaTwitter className='i'/>
        </p>
    </footer>
        </div>
    )
}
export default Home;