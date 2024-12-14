import './Header.css'

function Header()
{
    return(
        <div className='header'>
            <div className='wrap'>
                <div className='logo'>Like blazor MOVIES
                </div>
                <div className='right'>
                    <div className='phone'>+7 890 123 45 67</div>
                    <div className='email'>matvei@masha.ru</div>
                </div>
            </div>
        </div>
    )

}

export default Header;