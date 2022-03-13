import '../App.css'

const Banner = ({ text, page }) => {
    if (page === 'home') {
        return (
            <div className="banner home">
                <div className='banner-info'>
                    <h1>{text}</h1>
                </div>
            </div>
        )
    } else {
        return (
        <div className="banner">
            <div className='banner-info'>
                <h1>{text}</h1>
            </div>
        </div>
    )
    }

}

export default Banner