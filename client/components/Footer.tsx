export default function Footer () {
    return(
        <footer className="flex flex-col justify-center py-10 text-center">
            <a className="self-center w-1/4 transition delay-100 hover:scale-110" target={'_blank'} rel={'noreferrer'} href="https://www.facebook.com/TaqueriaMedrano">
                <img className="" width={25} height={25} src="https://img.icons8.com/color/48/null/facebook-new.png" alt="Facebook logo"/>

            </a>
            <div className="font-light text-[8px] py-5">
                <p className=" text-gray-200">
                    Designed by <a className="text-white hover:text-gray-300" href="https://izzydev.com" target={'_blank'} rel={'noreferrer'}>izzydev.com</a>
                </p>
                <p className=" text-gray-300 ">Icons source <a className="text-white hover:text-gray-300" href="https://www.icons8.com" target={'_blank'} rel='noreferrer'>icons8.com</a></p>

            </div>
        </footer>
    )
}