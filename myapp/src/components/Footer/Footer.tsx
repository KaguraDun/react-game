import './Footer.scss';

const Footer: React.FC = () => (
  <footer className="Footer">
    <a className="Footer__author-link" href="https://github.com/KaguraDun">
      Vasily Kovnev 2020
    </a>
    <a className="Footer__course-link" href="https://rs.school/js/">
      <img alt="" className="Footer__course-logo" src="./rs_school_js.svg" />
    </a>
  </footer>
);

export default Footer;
