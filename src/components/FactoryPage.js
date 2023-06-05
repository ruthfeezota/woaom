import React from 'react';
import './FactoryPage.css'
import Header from "./Header"

// Product data
const products = [
  {
    id: 1,
    name: 'Cotton Rolls',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'product1.jpg',
  },
  {
    id: 2,
    name: 'Product 2',
    description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: 'product2.jpg',
  },
  // Add more products as needed
];

class FactoryPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      message: '',
    };
  }

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to handle form submission here
    // e.g., send the form data to a server or display a success message
    console.log(this.state);
  };

  renderProductCards() {
    return products.map((product) => (
      <div key={product.id} className="product-card">
        <img src={product.image} alt={product.name} />
        <h3>{product.name}</h3>
        <p>{product.description}</p>
      </div>
    ));
  }
  
  render() {
    return (
      
      <div className="home">
        <div className="home__container">
          <img className="home__image" src="https://i.ibb.co/3C2Shvs/home-Page-Cover-1.png" alt="About Us Banner" />
        </div>
        <div className="product-cards">{this.renderProductCards()}</div>
        <div className="contact-form">
          <div>
            <h3>
            Business Description
            </h3>
            <h4>
            ABOUT TVF
            </h4>
            <h5>
            Company Description by TVF
            </h5>
            <p>TVF supplies the best possible fabric for your specific applications. By leveraging our industry leading expertise, consistent products, and a relentless focus on customer success, we help take your products â and your business â to the next level.

            Our product lines are made up of fabrics ranging from polyester to nylon, vinyl, canvas, natural fibers, and more. We service a breadth of markets such as transportation, agriculture, manufacturing, marine, medical, apparel, sign and graphics, home dÃ©cor, tactical gear, recreational, TV and movie, and art supplies.

            Since 2010, we have been 100% employee owned. All TVF employees participate in the benefits of ownership, creating tremendous pride in our work and our company. This translates to an even greater appreciation for our customers and our desire to help our customers succeed. Our employee ownership culture further supports our mission to provide the best customer service in the industry.</p>
          </div>
          <h2>Contact Us</h2>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={this.state.name}
              onChange={this.handleInputChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={this.state.email}
              onChange={this.handleInputChange}
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={this.state.message}
              onChange={this.handleInputChange}
            />
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    );
  }
}

export default FactoryPage;
