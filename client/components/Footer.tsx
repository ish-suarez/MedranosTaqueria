export default function Footer () {
    return(
        <footer className="flex flex-col justify-center py-10 text-center">
            <a className="self-center w-1/5 transition delay-100 hover:scale-110" target={'_blank'} rel={'noreferrer'} href="https://www.facebook.com/TaqueriaMedrano">
                <img className="" src="https://img.icons8.com/color/48/null/facebook-new.png" alt="Facebook logo"/>

            </a>
            <div>
                <p className="text-sm text-gray-200">
                    Designed by <a className="text-white hover:text-gray-300" href="https://izzydev.com" target={'_blank'} rel={'noreferrer'}>izzydev.com</a>
                </p>
                <p className="text-xs text-gray-300 ">Icons source <a className="text-white hover:text-gray-300" href="https://www.icons8.com" target={'_blank'} rel='noreferrer'>icons8.com</a></p>

            </div>
        </footer>
    )
}