import Footer from "@/components/Footer";
import MenuBar from "@/components/MenuBar";

export default function Portfolio() {
    return (
  <div>
<MenuBar/>  {/*section 1*/}
  <div>
  </div>
  <div className="section1-box">
    <h1 className="section1-name kanit-semibold">กราบสวัสดีครับ </h1>
    <p className="section1-meta-data kanit-light"> <br />
      <br /></p>
    <img className="section1-profile-picture" src="https://scontent.fbkk5-1.fna.fbcdn.net/v/t39.30808-6/494713141_2160736304376870_5458765206159209151_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeH3qMP_nRs-NVZoLwV8ScNNBlpTpd1oM5gGWlOl3WgzmIM6-1YlxX685pTSK6GCFHyPTPYE3CYQKjyVf9XbjDMU&_nc_ohc=NfZiY_ZcaPIQ7kNvwG5dbsT&_nc_oc=AdmYl1aQ_9vFydbMIW4SCyyo7JG4FGeBeEiu4e29DUVdykGYcbUloksE5rJidJcPeyj3MB33YXQij679nvueYtwe&_nc_zt=23&_nc_ht=scontent.fbkk5-1.fna&_nc_gid=C8oUPSyNChpInsLuR4aw-Q&oh=00_AfHCnxD6vQbrxrgCIEtOUCXAKDisPYxBlG4Fj15Qri2KeA&oe=681D5F03" alt="My picture" />
    <p className="section1-description kanit500light">.
      <br /></p>
  </div>
  <div className="section2-box">
    <a className="section2-contact-link kanit-semibold" href="https://www.tiktok.com/@flim.style0?_t=ZS-8w4t7YIajQ8&_r=1">tiktok</a>
    <br />
  </div>
  <div className="section3-box">
  </div>
  <Footer/>
</div>

    )
}