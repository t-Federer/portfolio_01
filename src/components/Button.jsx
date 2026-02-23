const Button = ({ name, isBeam = false, containerClass }) => {
        return(
                <button className={`btn ${containerClass}`}>
                        {isBeam && (
                                <span className="relative z-10 flex h-3 w-3">
                                        <span className="btn-ping" />
                                        <span className="btn-ping_dot" />
                                </span>
                        )}
                        <span className="relative z-10">{name}</span>
                </button>
        )
}

export default Button
