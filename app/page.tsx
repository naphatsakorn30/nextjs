import Footer from "@/components/Footer";
import MenuBar from "@/components/MenuBar";

export default function Portfolio() {
    return (
  <div>
<MenuBar page={"portfolio"}/>  {/*section 1*/}
  <div>
  </div>
  <div className="section1-box">
    <h1 className="section1-name kanit-semibold">กราบสวัสดีครับ ผมชื่อออมสิน </h1>
    <p className="section1-meta-data kanit-light"> <br />
      <br /></p>
    <img className="section1-profile-picture" src="https://scontent.fbkk6-2.fna.fbcdn.net/v/t39.30808-6/491405612_2145974209186413_9087804335260451894_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=lxCOBUhGSr4Q7kNvwH1z-xH&_nc_oc=AdkjPSh67p1rT3-F3Qwl0UcAfLBN9_n6C4bh3ThlIwkHX6vqkfEsIHpXc8jXnzZFDuM&_nc_zt=23&_nc_ht=scontent.fbkk6-2.fna&_nc_gid=RO7V0_764UDIX9gp4vAhYw&oh=00_AfLAyzjIjWW37Yr1l-Zneay0sUXwEzIwlAJdMUxrLWqiiw&oe=682B2C7F" alt="My picture" />
    <p className="section1-description kanit500light">.
      <br /></p>
      <p className="section1-decsciption mitr-regular">
          ชอบฟังเพลง </p>
      </div>
      <div className="section2-box">
        <a
          className="section2-contact mitr-medium"
          href=""
        >
          Facebook
        </a>
        <br />
        <a
          className="section2-contact mitr-medium"
          href="https://www.facebook.com/naphatsakorn.sriwongchai"
        >
          Github
        </a>
      </div>
      <div className="section3-box">
        <div className="section3-box-1">
          <h1 className="section3-box1-title mitr-semibold">การศึกษา</h1>
          <p className="section3-box1-title mitr-semibold">ประถมศึกษา</p>
          <p className="section3-box-1-heading mitr-regular">
            โรงเรียน[วัดบ้านเซิดสำราญ]
          </p>
          <p className="section3-box1-title mitr-semibold">มัธยมศึกษา</p>
          <p className="section3-box-1-heading mitr-regular">
            โรงเรียนพานทองสภาชนูปถัมภ์
          </p>
          <p className="section3-box1-title mitr-semibold">
            การศึกษาระดับประกาศนียบัตรวิชาชีพและขั้นสูง
          </p>
          <p className="section3-box-1-heading mitr-regular">
            วิทยาลัยเทคโนโลยีภาคตะวันออก(อี.เทค)
          </p>
        </div>
        <div className="section3-box-2">
          <h1 className="section3-box1-title mitr-semibold">ความสามารถ</h1>
          <p className="section3-box-1-heading mitr-regular">
            การทำงานร่วมกับผู้อื่น
          </p>
          <p className="section3-box-1-heading mitr-regular">เป็นผู้รับฟัง</p>
          <p className="section3-box-1-heading mitr-regular">
            มีประสบการณ์ในการฝึกงาน
          </p>
        </div>
      </div>
      <Footer />
    </div>
    )
}