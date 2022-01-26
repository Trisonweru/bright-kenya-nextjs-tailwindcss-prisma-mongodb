import style from "../styles/Footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={style.container}>
      <div className={style.cardL}>
        <h1 className={style.title}>BRIGHT CREATIVES.</h1>
        <h1 className={style.linkTitle}>
          <Link href="/contact" className={style.link} passHref>
            <>
              <span className={style.linkText}>WORK WITH US</span>
              <Image
                src={process.env.NEXT_PUBLIC_URL + "/img/link.png"}
                width="40px"
                height="40px"
                alt=""
              />
            </>
          </Link>
        </h1>
      </div>
      <div className={style.cardS}>
        <div className={style.cardItem}>
          HURLIGHAM 45 STREET,
          <br /> NAIROBI
        </div>
        <div className={style.cardItem}>
          ISAACTRISONWAWERU@GMAIL.COM
          <br /> +254105992717
        </div>
      </div>
      <div className={style.cardS}>
        <div className={style.cardItem}>
          FOLLOW US:
          <br /> __FB __IN __BE __TW
        </div>
        <div className={style.cardItem}>
          © 2022 BRIGHT CREATIVES,
          <br />
          ALL RIGHTS RESERVED
        </div>
      </div>
    </div>
  );
};

export default Footer;
