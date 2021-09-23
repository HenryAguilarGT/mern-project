import "./settings.css";
import Sidebar from "../../components/sidebar/Sidebar";

export default function Settings() {
    return (
        <div className="settings">
            <div className="settingsWrapper">
               <div className="settingsTitle">
                   <span className="settingsUpdateTitle">Update account</span>
                   <span className="settingsDeleteTitle">Delete account</span>
                </div> 
            
            <form  className="settingsForm">
                <label>Profile picture</label>
                <div className="settingsProfilePic">
                    <img className="settingsImg" src="https://scontent.fgua3-2.fna.fbcdn.net/v/t1.6435-1/p200x200/73215692_2677198088992077_2330737043388235776_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=7206a8&_nc_ohc=XaeN_GncaB4AX_I-Bik&_nc_ht=scontent.fgua3-2.fna&oh=3162132d0f921c0ebf71de175c42bbca&oe=6172C6D5" alt="" />
                    <label htmlFor="fileInput">
                        <i className="settingsPictureProfIcon fas fa-user-edit"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display:"none"}} />
                </div>
                <label>Username</label>
                <input type="text" placeholder="henryenlineagt" />
                <label>Email</label>
                <input type="email" placeholder="henryenlineagt@gmail.com" />
                <label>Password</label>
                <input type="password" />
                <button className="settingsSubmit">Save</button>
            </form>
            </div>
            <Sidebar/>
        </div>
    )
}


