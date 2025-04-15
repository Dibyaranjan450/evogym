import AnchorLink from "react-anchor-link-smooth-scroll";
import Logo from "../../assets/Logo.png";
import { SelectedPage } from "../../shared/types";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Footer = ({ setSelectedPage }: Props) => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img src={Logo} alt="logo" />
          <p className="my-5">
            Elite Training. Exceptional Fitness Classes. World-Class Studios
            Designed to Sculpt Your Dream Body. Start your transformation today — your
            dream physique is within reach.
          </p>
          <p>© Evogym All Rights Reserved.</p>
        </div>

        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>

          <AnchorLink
            href="#home"
            onClick={() => setSelectedPage(SelectedPage.Home)}
          >
            <p className="my-5 cursor-pointer hover:text-primary-300">Home</p>
          </AnchorLink>

          <AnchorLink
            href="#benefits"
            onClick={() => setSelectedPage(SelectedPage.Benefits)}
          >
            <p className="my-5 cursor-pointer hover:text-primary-300">Benefits</p>
          </AnchorLink>

          <AnchorLink
            href="#ourclasses"
            onClick={() => setSelectedPage(SelectedPage.OurClasses)}
          >
            <p className="cursor-pointer hover:text-primary-300">OurClasses</p>
          </AnchorLink>
        </div>

        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">Here to help you every step, rep, and mile.</p>
          <p>(934)748-7618</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
