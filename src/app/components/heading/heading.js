

export default function heading(props){
    return(
        <>
            <div className="flex flex-col justify-center items-center max-w-2xl w-full mx-auto md:mb-12 mb-10">
            <h2 className="text-primary-bg md:text-4xl text-2xl text-center font-bold">{props.heading}</h2>
            <p className="text-center text-secondary-text mt-5">{props.subheading}</p>
            </div>
        </>
    )
}