import React, { useState } from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom'
import { useStateValue } from "./StateProvider";
import { auth } from './firebase'
import { colors } from '@mui/material';
import { productData, responsive } from "./data";

function Header() {
    const [{ basket, user }, dispatch] = useStateValue();
    const [searchText, SetsearchText] = useState("");

    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }

    return (
        <>
            <div className='header'>
                <Link to='/'>
                    <img
                        className='header__logo'
                        src="data:image/png;base64,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" alt=""
                    />
                </Link>

                <div
                    className="header__search">
                    <input
                        className='header_searchInput'
                        type="text" name='search' onChange={(e) => SetsearchText(e.target.value)} />
                    {console.log(searchText)}
                    <SearchIcon
                        className='header__searchIcon' />

                </div>

                <div className="header__nav">
                    <Link to={!user && '/login'}>
                        <div onClick={handleAuthentication} className="header__option">
                            <span className='header__optionLineOne'>Hello {!user ? 'Guest' : user.email}</span>
                            <span className='header__optionLineTwo'>{user ? 'Sign Out' : 'Sign In'}</span>
                        </div>
                    </Link>

                    <div className="header__option">
                        <span className='header__optionLineOne'>Returns</span>
                        <span className='header__optionLineTwo'>Orders</span>
                    </div>

                    <div className="header__option">
                        <span className='header__optionLineOne'>Your</span>
                        <Link to="https://www.primevideo.com/offers/nonprimehomepage/ref=dvm_pds_amz_in_as_s_gm_159_mkw_sRumWk2Nj-dc?gclid=CjwKCAjw2K6lBhBXEiwA5RjtCZqxLOkBpMfshUCDlvC9ZsDjbyNsTvk67ommQ12ntOtx9uxkyutL4RoCEEMQAvD_BwE&mrntrk=pcrid_657901934579_slid__pgrid_84577172328_pgeo_9300770_x__adext__ptid_kwd-303629226711"><span className='header__optionLineTwo' style={{ color: '#FFF' }}>Prime</span></Link>
                    </div>

                    <Link to='/checkout'>
                        <div className="header__optionBasket">
                            <ShoppingBasketIcon />
                            <span className='header__optionLineTwo header__basketCount'>
                                {basket?.length}
                            </span>
                        </div>
                    </Link>
                </div>

            </div>
            <div className="recommBar">

                {
                    productData.filter(product => product.title.toLowerCase().includes(searchText.toLowerCase())).map(product => {
                        if (searchText === "") return null;
                        return (
                            <div className="searchList" style={{ display: "flex", marginLeft: "10%", padding: "2px" }}>
                                <Link style={{ textDecoration: "none", color: "black" }}>{product.title}</Link>
                            </div>

                        )
                    })
                }
            </div>
        </>
    )
}

export default Header