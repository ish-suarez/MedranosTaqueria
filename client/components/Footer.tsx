export default function Footer () {
    return(
        <footer className=" flex flex-col justify-center py-10 text-center">
            <p className="text-sm text-gray-200">
                Designed by <a className="text-white hover:text-gray-300" href="https://izzydev.com" target={'_blank'} rel={'noreferrer'}>izzydev.com</a>
            </p>
            <p className="text-xs text-gray-300 ">Icons source <a className="text-white hover:text-gray-300" href="https://www.icons8.com" target={'_blank'} rel='noreferrer'>icons8.com</a></p>
        </footer>
    )
}