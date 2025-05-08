import Link from "next/link";

export default function MenuBar() {
    return(
        <div className="menu-selection">
            <Link className="menu-item kanit-semibold" href="/">หน้าหลัก</Link>
            <Link className="menu-item kanit-semibold" href="about">เกี่ยวกับฉัน</Link>
            <Link className="menu-item kanit-semibold" href="portfolio">ผลงาน</Link>
            <Link className="menu-item kanit-semibold" href="state">State</Link>
        </div>
    )
}