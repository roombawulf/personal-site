function Spacer(){
    return (
        <div className='spacer' style={spacerStyles}>
            <div className='rule' style={ruleStyles}/>
        </div>
    )
    
}
export default Spacer

const spacerStyles = {
    display: 'flex',
    alignItems: 'center',
    height: '5rem'
}
const ruleStyles = {
    width: '90%',
    borderBottom: 'solid black 2px'
}