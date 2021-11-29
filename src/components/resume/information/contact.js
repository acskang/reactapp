import { FaMap, FaPhone, FaEnvelope } from "react-icons/fa";
const contact = () => {
  return (
        <div className="contact">
            <h3 className="title">contact info</h3>
            <div className="box-container">
                <div className="box">
                    <div className="iconbox"><FaMap className="icon" /></div>
                    <div className="info">
                        <h3>my address</h3>
                        <p>seoul, korea - 123456</p>
                    </div>
                </div>
                <div className="box">
                    <div className="iconbox"><FaPhone className="icon" /></div>
                    <div className="info">
                        <h3>my number</h3>
                        <p>+123-456-7890</p>
                    </div>
                </div>
                <div className="box">
                    <div className="iconbox"><FaEnvelope className="icon" /></div>
                    <div className="info">
                        <h3>my email</h3>
                        <p>cskang@thesysm.com</p>
                    </div>
                </div>
            </div>
        </div>
  );
};

export default contact;