import Button from '../components/Button'
import { arrowRight } from '../assets/icons'
import { statistics } from '../constants'

const Hero = () => {
    return (
        <div>
            <section id='home'
                className='w-full flex xl:flex-row flex-col justify-center min-h-screen
                gap-10 max-container'>
                <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28'>
                    <p className='text-xl font-montserrat text-coral-red'>Our Summer Collection</p>
                    <h1 className='mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82] font-bold'><span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>The New Arrival</span>
                        <br />
                        <span className='text-coral-red inline-block mt-3 mr-5'>Nike </span>
                        Shoes
                    </h1>
                    <p className='font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:nax-w-sm'>Discover stylish Nike arrivals, quality comfort and innovation for your active life.</p>
                    <Button label="Shop Now"
                        iconURL={arrowRight}
                    />
                    <div className='flex flex-wrap justify-start items-start w-full mt-20 gap-16'>
                        {statistics.map((stat, index) => (
                            <div key={index}>
                                <p className='text-4xl font-palanquin font-bold'>{stat.value}</p>
                                <p className='leading-7 font-montserrat text-slate-gray'>{stat.label}</p>
                            </div>

                        ))}
                    </div>
                </div>


            </section>
        </div>
    )
}

export default Hero
