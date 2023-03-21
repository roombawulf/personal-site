import { motion } from "framer-motion"

function Spacer(){

    const rule = {
        offscreen: { width: '0%' },
        onscreen: { 
            width: '90%',
            transition: {
                ease: "easeInOut",
                duration: 1.2
            }
        }
    }

    return (
        <div className='spacer' style={spacerStyles}>
            <motion.div className='rule' style={ruleStyles} variants={rule} initial="offscreen" whileInView="onscreen" viewport={{ once: true }}/>
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