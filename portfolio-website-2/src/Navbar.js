import { useState } from 'react';
//Could use link instead of anchor tags?

const Navbar=()=>{
   
    let [bgColour, setbgColour]=useState(['#fff', '#fff', '#fff', '#fff', '#fff', '#fff']);
    let styles=[]
    bgColour.forEach(item =>{
        styles.push({
            background: item
        })
    })
    
    function updateArray(colour, index){
        
        let copy=[...bgColour];
        copy[index]=colour;
        setbgColour(copy)
       
    }

    return (
        <div className="nav-super">
            <nav>
                <ul>
                    
                    <a href="/" style={styles[0]} onMouseEnter={()=>updateArray('whitesmoke', 0)} onMouseLeave={()=>updateArray('#fff', 0)} className="rainbow">
                        <li>
                            Home
                        </li>
                    </a>
                    <a href="/about" className="rainbow" style={styles[1]} onMouseEnter={()=>updateArray('gainsboro', 1)} onMouseLeave={()=>updateArray('#fff', 1)}>
                        <li>
                            About
                        </li>
                    </a>
                    <a href="/experience" className="rainbow" style={styles[2]} onMouseEnter={()=>updateArray('#c8c8c8', 2)} onMouseLeave={()=>updateArray('#fff', 2)}>
                        <li>
                            Experience
                        </li>
                    </a>
                    <a href="/projects" className="rainbow" style={styles[3]} onMouseEnter={()=>updateArray('#b0b0b0', 3)} onMouseLeave={()=>updateArray('#fff', 3)}>
                        <li>
                            Projects
                        </li>
                    </a>
                    <a href="/workshops" className="rainbow" style={styles[4]} onMouseEnter={()=>updateArray('#989898', 4)} onMouseLeave={()=>updateArray('#fff', 4)}>
                        <li>
                            Workshops
                        </li>
                    </a>
                   
                    
                </ul>
           
            </nav>
        </div>
    )
}

export default Navbar;