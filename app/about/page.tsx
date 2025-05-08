import MenuBar from "@/components/MenuBar";
import Footer from "@/components/Footer";
export default function About() {
    return (
<div>
<MenuBar/>
  {/*section 1*/}
  <div>
  </div>
  <div className="section1-box">
    <h1 className="section1-name kanit-semibold">Hey I'm Naphatsakorn</h1>
    <p className="section1-meta-data kanit-light">I'm a student at Rajamangala University of Technology Krungthep <br />
      <br /></p>
    <img className="section1-profile-picture" src="https://scontent.fbkk5-1.fna.fbcdn.net/v/t39.30808-6/491405612_2145974209186413_9087804335260451894_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeFbtssmojjM50dCC4rci_fBYul-CB7j0Mhi6X4IHuPQyLDo9BardQg6RDI4lrlVe-1pDGMylAMX8Zg0C_NApYft&_nc_ohc=CP3D57pV3PgQ7kNvwESlNTJ&_nc_oc=Adm15-2Q11bm1Przcwwhydb0RTg8zhBnaWrsSBvAU5dgt9JvER3ftj2i9Og0xm-zNbLzxacYgC0vP4O8cGRdVZVk&_nc_zt=23&_nc_ht=scontent.fbkk5-1.fna&_nc_gid=4Pqa394UwnLAp-bWFU7KoA&oh=00_AfG8YFIVf7nepnNgCYvuYBgqWMZdPijK4OzHHFrVm6RJMw&oe=681D54BF" alt="My picture" />
    <p className="section1-description kanit-light">I am a student who is interested in programming and web development.
      <br /></p>
  </div>
  <div className="section2-box">
    <a className="section2-contact-link kanit-semibold" href="https://www.facebook.com/profile.php?id=100013215632806">Facebook</a>
    <br />
    <a className="section2-contact-link kanit-semibold" href="https://github.com/">Github</a>
    <br />
  </div>
  <div className="section3-box">
    <div className="section3-box-a">
      <h1 className="section3-box-header1 kanit-semibold">ประวัติการศึกษา</h1>
      <p className="section3-box-content1 kanit-light">ประถมศึกษา: โรงเรียนวัดเซิดสำราญ
      </p>
      <p className="section3-box-content1 kanit-light">มัธยมศึกษา: โรงเรียนพานทองสภาชนูปถัมภ์</p>
      <p className="section3-box-content1 kanit-light">ปวช.-ปวส.: วิทยาลัยเทคโนโลยีภาคตะวันออก(อี.เทค)</p>
    </div>
    <div className="section3-box-b">
      <h1 className="section3-box-header2 kanit-semibold">ประสบการณ์ฝึกงาน</h1>
      <p className="section3-box-content2 kanit-light">นักสืบครับ</p>
      <p className="section3-box-content2 kanit-light">พนักงานสืบสวนคดีครับ</p>
    </div>
  </div>
  <Footer/>
  </div>
    );
}