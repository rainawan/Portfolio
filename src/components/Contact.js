import {IoLocationSharp} from 'react-icons/io5';
import {CgPhone} from 'react-icons/cg';
import {MdEmail} from 'react-icons/md';



export const Contact = () => {

    return (
        <section className = "contact" id="contact">
            <h2>Stay In Touch</h2>
            <div class="connect">
                <div class="content">
                    <div class="left-side">
                        <div class="address details">
                            <div className="fas"><IoLocationSharp size={25}/></div>
                            <div class="topic">Location</div>
                            <div class="text-one">Los Angeles, CA</div>
                        </div>
                        <div class="phone details">
                            <div className="fas"><CgPhone size={25}/></div>
                            <div class="topic">Phone</div>
                            <div class="text-one">626 757 3055</div>
                        </div>
                        <div class="email details">
                            <div className="fas"><MdEmail size={25}/></div>
                            <div class="topic">Email</div>
                            <div class="text-one">rainawan02@gmail.com</div>
                        </div>
                    </div>
                    <div class="right-side">
                        <div class="topic-text">Let's Connect!</div>
                        <form action="#">
                        {/* <form onsubmit="sendEmail()"> */}
                            <div class="input-box">
                                <input type="text" placeholder="Enter your name"/>
                            </div>
                            <div class="input-box">
                                <input type="text" placeholder="Enter your email"/>
                            </div>
                            <div class="input-box message-box">
                                <input type="text" placeholder="Enter your message"/>
                            </div>
                            <div class="button">
                                <input type="button" value="Send Now" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            
        </section>
    )
}