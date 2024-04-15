import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import qZone1 from '../../assets/qZone1.png'
import qZone2 from '../../assets/qZone2.png'
import qZone3 from '../../assets/qZone3.png'
const RightNav = () => {
  return (
    <div>
      <div className="p-4 space-y-3 mb-6">
        <h2 className="text-2xl font-semibold">Login with</h2>
        <button className="btn btn-outline w-full">
          <FaGoogle></FaGoogle>
          Google
        </button>
        <button className="btn btn-outline w-full">
          <FaGithub></FaGithub>
          gitHub
        </button>
      </div>
      <div className="p-4 mb-6">
        <h2 className="text-2xl font-semibold mb-3">Find Us On</h2>
        <a
          className="p-4 flex text-lg items-center border rounded-t-lg"
          target="_blank"
          href="https://www.facebook.com/profile.php?id=100076732956596"
        >
          <FaFacebook className="mr-3"></FaFacebook>
          <span>Facebook</span>
        </a>
        <a className="p-4 flex text-lg items-center border-x" href="">
          <FaTwitter className="mr-3"></FaTwitter>
          <span>Twitter</span>
        </a>
        <a
          className="p-4 flex text-lg items-center border rounded-b-lg"
          target="_blank"
          href="https://www.instagram.com/mueid11/"
        >
          <FaInstagram className="mr-3"></FaInstagram>
          <span>Instagram</span>
        </a>
      </div>
      <div className="p-4 space-y-3 mb-6">
        <h2 className="text-2xl font-semibold">Q Zone</h2>
        <img className="w-full rounded-lg"src={qZone1} alt="" />
        <img className="w-full rounded-lg"src={qZone2} alt="" />
        <img className="w-full rounded-lg"src={qZone3} alt="" />
      </div>
    </div>
  );
};

export default RightNav;
