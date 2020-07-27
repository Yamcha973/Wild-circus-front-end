import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import 'react-awesome-slider/dist/styles.css';
import '../Style/Carrousel.css';

function Carrousel() {
    return (
        <div className="container-carrousel">
            <div className="carrousel-sizing">
                <AwesomeSlider animation="cubeAnimation" className="slider-homepage">
                    <div>
                        <img className="photo" src="https://images.ladepeche.fr/api/v1/images/view/5c3667683e45465b091a24a2/large/image.jpg" alt="cirque" />
                    </div>
                    <div>
                        <img className="photo" src="https://static.lexpress.fr/medias_12172/w_1000,h_563,c_fill,g_north/v1573953220/le-cirque-de-paname-le-14-novembre-2019-a-paris_6232230.jpg" alt="roue" />
                    </div>
                    <div>
                        <img className="photo" src="https://www.leparisien.fr/resizer/oIQcRNqvr4rj2h2cvO2up0fnvBw=/932x582/arc-anglerfish-eu-central-1-prod-leparisien.s3.amazonaws.com/public/VM7WZQ4LQZQ2THYMMSGP2KJEIM.jpg" alt="roue" />
                    </div>
                    <div>
                        <img className="photo" src="https://img.aws.la-croix.com/2019/01/21/1300996918/Ceremonie-ouverture-43e-festival-international-cirque-Monte-Carlo-17-janvier-2019-Monaco_0_729_486.jpg" alt="roue" />
                    </div>
                    <div>
                        <img className="photo" src="https://images.lpcdn.ca/924x615/201701/15/1332135-mai-2016-cirque-ringling-bros.jpg" alt="roue" />
                    </div>
                    <div>
                        <img className="photo" src="https://journalmetro.com/wp-content/uploads/2016/11/ovo-cirque-du-soleil09-e1594914839581.jpg?w=860" alt="roue" />
                    </div>
                </AwesomeSlider>
            </div>
        </div>
    );
}
export default Carrousel;