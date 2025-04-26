export const Button = ({text, click}:{text:string, click:()=>void}) => {
    return(
        <div className="ui__button"
            onClick={click}
        >
            {text}
        </div>
    )
}