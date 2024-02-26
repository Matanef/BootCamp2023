import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

import img1 from './20240125_173229.jpg'
import img2 from './c1cklkyp6ms02tougufx.jpg'
import img3 from './e8fnw35p6zgusq218foj.jpg'
import img4 from './liw377az16sxmp9a6ylg.jpg'

const Carousel1 = ()=>{

    return (
        <>
            <Carousel>
                <div>
                    <img src={img1} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={img2} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={img3} />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src={img4} />
                    <p className="legend">Legend 4</p>
                </div>
            </Carousel>
        </>
    );
}

export default Carousel1;