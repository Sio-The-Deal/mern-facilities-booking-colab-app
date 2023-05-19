import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="fLists">
        <ul className="fList">
          <li className="fListItem">Student deals </li>
          <li className="fListItem">Cheap eats at the campus </li>
          <li className="fListItem">Finding a shared room near DCU</li>
          <li className="fListItem">On Campus Accomodations</li>
        </ul>
        <ul className="fList">
          <li className="fListItem">College survival tips</li>
          <li className="fListItem">Top 5 hideouts</li>
          <li className="fListItem">Getting to know about DCU </li>
          <li className="fListItem">Top tips for college newbies  </li>

        </ul>

        <ul className="fList">
          <li className="fListItem">Enquiries</li>
          <li className="fListItem">Partner Help</li>
          <li className="fListItem">Careers</li>
          <li className="fListItem">Sustainability</li>
          <li className="fListItem">Investor relations</li>
          <li className="fListItem">Terms & conditions</li>
        </ul>
      </div>
      <div className="fText">Copyright © 2023 BookMe</div>
    </div>
  );
};

export default Footer;
