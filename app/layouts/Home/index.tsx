import Header from '../../components/Header'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

function index({children}:{children: React.ReactNode}) {
    return(
        <>
            <div className='absolute w-[100%]'>
            <Navbar />
            <Header />
            </div>
            {children}
            <Footer />
        </>
    )
}


export default index