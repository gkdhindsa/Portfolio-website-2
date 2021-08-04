import {Link} from 'react-router-dom'

const Navbar=()=>{
    return (
        <div class="nav-super">
            <nav>
                <ul>
                    
                    <a href="/about" class="rainbow">
                        <li>
                            Home
                        </li>
                    </a>
                    <a href="/experience" class="rainbow">
                        <li>
                            Experience
                        </li>
                    </a>
                    <a href="/projects" class="rainbow">
                        <li>
                            Projects
                        </li>
                    </a>
                    <a href="/workshops" class="rainbow">
                        <li>
                            Workshops
                        </li>
                    </a>
                    <a href="/achievements" class="rainbow">
                        <li>
                            Achievements
                        </li>
                    </a>
                    
                </ul>
           
            </nav>
        </div>
    )
}

export default Navbar;