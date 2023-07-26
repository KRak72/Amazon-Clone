import React,{useEffect} from 'react'
import './Home.css'
import Product from './Product'
import { Divider, List, ListItemText } from "@mui/material";

// https://images-eu.ssl-images-amazon.com/images/G/31/img17/Home/AmazonTV/Ravina/Push/3000x1200_Yeh-Meri-Family-S2_V11._CB588519479_.jpg
// https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg
function Home() {

    return (
    
        <div className='home'>
            <div className="home__container">
                <img
                    className='home__image'
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/PD23/ACQ/hero/v2/PC_Hero_3000x1200_2X_EN._CB600991698_.jpg" alt="" />
                <div className="home__row">
                    {/* Product */}
                    {/* Product */}

                    < Product 
                        id="1"
                        title="The psychology of Money"
                        price={299}
                        image="https://m.media-amazon.com/images/I/71g2ednj0JL._AC_UY327_FMwebp_QL65_.jpg"
                        rating={5}
                    />

                    < Product 
                        id="2"
                        title="The Power of your Subconscious Mind"
                        price={149}
                        image="https://m.media-amazon.com/images/I/81gTwYAhU7L._AC_UY327_FMwebp_QL65_.jpg"
                        rating={4}
                    />
                    < Product 
                        id="3"
                        title="Tresseme"
                        price={599}
                        image="https://rukminim2.flixcart.com/image/280/280/xif0q/shampoo/v/b/p/-original-imagkycyfh3nmkgk.jpeg?q=70"
                        rating={4}
                    />
                    < Product 
                        id="4"
                        title="Real Fruit Juice - Pomegranate"
                        price={149}
                        image="https://rukminim2.flixcart.com/image/280/280/l111lzk0/drinks-juice/6/9/e/-original-imagczhevkjgggwf.jpeg?q=70"
                        rating={4}
                    />
                    < Product 
                        id="5"
                        title="Maggi"
                        price={103}
                        image="https://rukminim2.flixcart.com/image/280/280/xif0q/noodle/f/j/j/-original-imagk9tshsfuhtgk.jpeg?q=70"
                        rating={4}
                    />


                </div>

                <div className="home__row">
                    {/* Product */}
                    {/* Product */}
                    {/* Product */}
                    < Product 
                        id="6"
                        title="Rich Dad Poor Dad"
                        price={298}
                        image="https://m.media-amazon.com/images/I/81BE7eeKzAL._AC_UY327_FMwebp_QL65_.jpg"
                        rating={4}
                    />

                    < Product 
                        id="7"
                        title="Memory:How to Develop,Train, And Use It"
                        price={109}
                        image="https://m.media-amazon.com/images/I/71Kb2dJCxWL._AC_UY327_FMwebp_QL65_.jpg"
                        rating={3}
                    />

                    < Product 
                        id="8"
                        title="Base Drawer Refrigerator"
                        price={10999}
                        image="https://rukminim2.flixcart.com/image/300/300/xif0q/refrigerator-new/y/2/n/-original-imagqujv2xsqnw9q.jpeg?q=70"
                        rating={5}
                    />
                    < Product 
                        id="9"
                        title="LG Compatible 8-Kg"
                        price={12999}
                        image="https://rukminim2.flixcart.com/image/612/612/ku5ufm80/washing-machine-new/z/o/w/9-56-5-fhv1409zwb-5-0-50-60-45-lg-85-original-imag7cg6cavxmwbh.jpeg?q=70"
                        rating={5}
                    />
                    < Product 
                        id="10"
                        title="LG Full 8Kg"
                        price={11999}
                        image="https://rukminim2.flixcart.com/image/612/612/xif0q/washing-machine-new/y/a/p/-original-imagqh7muda5zrbu.jpeg?q=70"
                        rating={5}
                    />
                </div>

                <div className="home__row">
                    {/* Product */}
                    < Product 
                        id="11"
                        title="Samsung Galaxy F54"
                        price={14999}
                        image="https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/q/t/h/galaxy-f54-5g-sm-e546bzshins-samsung-original-imagq79f82pfyzvh.jpeg?q=70"
                        rating={3}
                    />
                    < Product 
                        id="12"
                        title="One Plus"
                        price={49999}
                        image="https://m.media-amazon.com/images/I/414+xRBltFL._SY300_SX300_.jpg"
                        rating={3}
                    />
                    < Product 
                        id="13"
                        title="Nationalism"
                        price={92}
                        image="https://m.media-amazon.com/images/I/81cd2YOY6iS._AC_UY327_FMwebp_QL65_.jpg"
                        rating={3}
                    />
                    < Product 
                        id="14"
                        title="Beat XP Marv"
                        price={2099}
                        image="https://m.media-amazon.com/images/I/61uHEF2B1FL._SX569_.jpg"
                        rating={3}
                    />
                    < Product 
                        id="15"
                        title="Noise"
                        price={2999}
                        image="https://m.media-amazon.com/images/I/61SSVxTSs3L._SX569_.jpg"
                        rating={3}
                    />
                </div>
            </div>
                <Divider/>
        </div>
    )
}

export default Home