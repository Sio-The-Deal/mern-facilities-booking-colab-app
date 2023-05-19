import "./mailList.css"


const MailList = () => {
  const handleClick = () => {
    // Make a request to the Flask app when the button is clicked
    fetch('http://127.0.0.1:5000')
        .then(response => {
            // Handle the response, e.g., navigate to the new page
            if (response.ok) {
                window.location.href = 'http://127.0.0.1:5000';
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
   };


  return (
    <div className="mail">
      <h1 className="mailTitle">Find out your secret offers</h1>
      <span className="mailDesc">Subscribe to receive offers from local shops for students</span>
      <div className="mailInputContainer">
        <input type="text" placeholder="Your Email" />
        <button>Subscribe</button>
      </div>
      <h1 className="mailTitle">Tools From BookMe</h1>
      <span className="mailDesc">
        Finding the right color scheme for your next app, social media post and designs.
        
      </span>
      <span className="mailDesc">Perfect for business, marketing, graphic design and computing students</span>

      <div className="mailInputContainer">
        <button onClick={handleClick}>Color Scheme Tool</button>
 

      </div>
    </div>
  )
}

export default MailList