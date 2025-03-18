import { LuFileSpreadsheet } from 'react-icons/lu'
import { Button } from './ui/moving-borders'

const About = () => {
    return (
        <Button className='flex-1 text-white border-neutral-200 dark:border-slate-800 w-full'
            containerClassName='w-full my-5'
            duration={Math.floor(Math.random() * 10000) + 10000}
        >
            <div className='p-3 py-6 flex flex-col gap-5 w-full'>
                <h1 className='heading '>About <span className='text-purple'>Me</span></h1>
                <div className='grid md:grid-cols-2 grid-cols-1 px-5'>
                    <div className='flex justify-start'>
                        <img src="/dev.png" alt="" className='rounded-3xl md:w-[500px] w-[150rem]  h-50 cover' />
                    </div>
                    <div className='flex justify-start mt-5 md:m-0'>
                        <span className='hidden md:block lg:text-xl lg:font-normal font-light text-sm  text-start'>
                            I&apos;m a Frontend Developer with a passion for building scalable, high-performance, and responsive applications. With extensive experience in React, React Native, and Expo, I specialize in creating seamless user experiences across web and mobile platforms.
                            I have a strong understanding of JavaScript, TypeScript, Next.js, Redux, React Query, and Tailwind CSS.
                            <br />
                            My expertise includes:
                            <div>✅ Crafting pixel-perfect, responsive UIs</div>
                            <div>✅ Optimizing app performance for fast and smooth experiences</div>
                            <div>✅ Implementing state management for scalable applications</div>
                            <div>✅ Integrating APIs and ensuring a seamless frontend-backend connection</div>
                            <div>✅ Building and maintaining design systems for consistency and reusability</div>
                            <br />

                            <div className='flex justify-center items-center'>
                                <button className="p-[3px] relative">
                                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                                    <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                                        <a href='https://drive.google.com/file/d/1CocrjeuDwxpBuLKdmATFJBurMU03T2fD/view?usp=sharing' target='_blank' className='flex justify-center items-center gap-2'><LuFileSpreadsheet />Check My Resume</a>
                                    </div>
                                </button>
                            </div>

                        </span>
                        <span className='text-xl md:hidden '>
                            I&apos;m a Frontend Developer passionate about building scalable, high-performance, and responsive applications. With expertise in React, React Native, Next.js, and Expo, I craft seamless user experiences across web and mobile. Skilled in JavaScript, TypeScript, Redux, and Tailwind CSS, I focus on UI optimization, state management, and API integration.
                            <div className='flex justify-center items-center mt-3'>
                                <button className="p-[3px] relative">
                                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                                    <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                                        <a href='https://drive.google.com/file/d/1CocrjeuDwxpBuLKdmATFJBurMU03T2fD/view?usp=sharing' target='_blank' className='flex justify-center items-center gap-2'><LuFileSpreadsheet /> Check My Resume</a>
                                    </div>
                                </button>
                            </div>
                        </span>

                    </div>
                </div>
            </div>

        </Button>
    )
}

export default About