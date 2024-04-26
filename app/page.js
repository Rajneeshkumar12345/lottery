import Image from "next/image";
import styles from "./page.module.css";
import Logo from "../public/assets/logo.png";
import { MdOutlineEmail } from "react-icons/md";
import { MdDownload } from "react-icons/md";
import SimpleSlider from "./_components/Slick";
import { FiHome } from "react-icons/fi";
import { MdOutlineLocalActivity } from "react-icons/md";
import { SiPrometheus } from "react-icons/si";
import { GiWallet } from "react-icons/gi";
import { VscAccount } from "react-icons/vsc";
import Lottery from "../public/assets/lottery.png";
import "bootstrap/dist/css/bootstrap.css";
import winImage from "../public/assets/winImage.png";

export default function Home() {
  return (
    <div className={styles.main}>
      <div className={styles.headers}>
        <div className={styles.logo}>
          <Image src={Logo} width={100} />
        </div>
        <div className={styles.icons}>
          <MdOutlineEmail fontSize={25} color="red" />
          <MdDownload fontSize={25} color="red" />
        </div>
      </div>
      <SimpleSlider />

      <div className={styles.middleItem}>
        <div className="row">
          <div className="col-md-3 mb-3">
            <div className={styles.lottery}>
              <div className={styles.content}>
                <Image src={Lottery} alt="Lottery" width={50} height={50} />
                <span>Lottery</span>
              </div>
            </div>
            <div className={`${styles.lottery} mt-2`}>
              <div className={styles.content}>
                <Image src={Lottery} alt="Lottery" width={50} height={50} />
                <span>Lottery</span>
              </div>
            </div>
            <div className={`${styles.lottery} mt-2`}>
              <div className={styles.content}>
                <Image src={Lottery} alt="Lottery" width={50} height={50} />
                <span>Lottery</span>
              </div>
            </div>
            <div className={`${styles.lottery} mt-2`}>
              <div className={styles.content}>
                <Image src={Lottery} alt="Lottery" width={50} height={50} />
                <span>Lottery</span>
              </div>
            </div>
          </div>
          <div className="col-md-9 ">
            <div className={styles.win}>
              <div className={styles.text}>
                <h6 className="m-0 p-0">Win Go</h6>
                <p className="m-0 p-0">Guess Number</p>
                <p className="m-0 p-0">Green/Red/Purple to win</p>
              </div>
              <div className={styles.images}>
                <Image src={winImage} alt="icon" width={100} height={70} />
              </div>
            </div>
            <div className={styles.win}>
              <div className={styles.text}>
                <h6 className="m-0 p-0">Win Go</h6>
                <p className="m-0 p-0">Guess Number</p>
                <p className="m-0 p-0">Green/Red/Purple to win</p>
              </div>
              <div className={styles.images}>
                <Image src={winImage} alt="icon" width={100} height={70} />
              </div>
            </div>
            <div className={styles.win}>
              <div className={styles.text}>
                <h6 className="m-0 p-0">Win Go</h6>
                <p className="m-0 p-0">Guess Number</p>
                <p className="m-0 p-0">Green/Red/Purple to win</p>
              </div>
              <div className={styles.images}>
                <Image src={winImage} alt="icon" width={100} height={70} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.footers}>
        <div className={styles.one1}>
          <FiHome fontSize={25} color="red" />
          <span>Home</span>
        </div>
        <div className={styles.one2}>
          <MdOutlineLocalActivity fontSize={25} color="red" />
          <span>Activity</span>
        </div>
        <div className={styles.one3}>
          <SiPrometheus fontSize={25} color="red" />
          <span>Promotion</span>
        </div>
        <div className={styles.one4}>
          <GiWallet fontSize={25} color="red" />
          <span>Wallet</span>
        </div>
        <div className={styles.one5}>
          <VscAccount fontSize={25} color="red" />
          <span>Account</span>
        </div>
      </div>
    </div>
  );
}
