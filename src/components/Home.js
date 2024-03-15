import React, { useState } from "react";
import path from "./asset/home/Mens.png";
import collection from "./asset/home/New Collection.png";
import last from "./asset/home/Slide1.jpg";
import "./Home.css";
import { Card, Carousel, Select } from "antd";
import {
  ArrowRightOutlined,
  ArrowUpOutlined,
  HeartOutlined,
  ShoppingOutlined,
  UserOutlined,
  StarFilled,
  StarOutlined,
} from "@ant-design/icons";
// import Item from "antd/es/list/Item";
import products from "./products.js";

function Home() {
  const { Option } = Select;
  const [selectedValue, setSelectedValue] = useState("ind");
  return (
    <>
      <Header
        selectedValue={selectedValue}
        setSelectedValue={setSelectedValue}
      />
      <div className="container">
        <Car />
        <Itemheading heading={"New Items"} more={"More"} />
        <ItemList />

        <Itemheading heading={"Top Sellers"} more={"More"} />
        <ItemList />
        <Itemheading heading={"Salenp"} more={"More"} />
        <ItemList />
      </div>
      <Customer />
      <Faq />
      <Footer />
    </>
  );
}

function Header({ selectedValue, setSelectedValue }) {
  return (
    <header className="">
      <div className="header-div">
        <h1>ELOXEY</h1>
      </div>
      <div className="header-div">
        <nav>
          <ul>
            <li>Catalogue</li>
            <li>My Orders</li>
            <li>Reviews</li>
            <li>Contact</li>
            <li>About</li>
          </ul>
        </nav>
      </div>
      <div className="header-div">
        <div>
          <Select
            value={selectedValue}
            onChange={(e) => setSelectedValue(e)}
            style={{ width: 70 }}
          >
            <Option value="ind">IND</Option>
            <Option value="de">DE</Option>
          </Select>
        </div>
        <div className="icon-div">
          <ShoppingOutlined />
        </div>
        <div className="icon-div">
          <HeartOutlined />
        </div>
        <div className="icon-div">
          <UserOutlined />
        </div>
      </div>
    </header>
  );
}

function Car() {
  return (
    <div className="grid card-wrap">
      <div className="flex t-shirt">
        <div>
          <img style={{ width: "100%" }} src={path} alt="men" />
        </div>
        <div>
          <img
            style={{ width: "100%" }}
            src="https://s3-alpha-sig.figma.com/img/af3b/6aa1/4f5fff2bc1c930be8a4264498e77e7bb?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GF9~LLiPlGl3Az4CAsnUr8vQxFMlP9PUzqzneba4TLJbd4wUPcqE2gpZ8JmYpqUwbA6FZVTqtCQjy3i4CiIfLdGSCiKB41trBpQYlXwVW12nXaf6owVE9XLtsdDnbXPJ7ZsZ5MvOJUouHzeBYMPcWCXL0yvCXLyZHjUF3wddHImnpD48zYL4K0PHPuQ8ayz5M7JC2dUcH1O2x5SGGBdMwnoNh3q1B1J9S6yepCml1358ii0b0aFDqiRz-Ot4MTFOOnIqlayJd1lZ1bZOqZrpL1-PjwEEmXxJW1KZ5iMLusoCiLuyPBKTUv~7l2RXuQhj1stbLWIwUBYVysxoZmxg~Q__"
            alt="men"
          />
        </div>
        <div>
          <div className="sales-lable-arrow ">
            <ArrowUpOutlined href="#" className="arrow-link-custom" />
          </div>
          <h1 className="sale-label">Sales</h1>
        </div>
      </div>
      <div>
        <img className="main-img" src={collection} alt="new collection"></img>
      </div>
      <div className="third-wrap">
        <div className="cat">
          <div>
            <h2>Catalogue</h2>
          </div>
          <div>
            <ArrowUpOutlined className="arrow-link-custom" />
          </div>
        </div>
        {/* <Carousel autoplay>
          <div>
            <h3 style={contentStyle}>1</h3>
          </div>
          <div>
            <h3 style={contentStyle}>2</h3>
          </div>
          <div>
            <h3 style={contentStyle}>3</h3>
          </div>
          <div>
            <h3 style={contentStyle}>4</h3>
          </div>
        </Carousel> */}
        <img className="last-one" src={last} alt="new collection"></img>
      </div>
    </div>
  );
}
const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

function Cards() {
  return (
    <div className="content">
      <div className="content-first">
        <div className="content-left-div">
          <Card
            cover={
              <img
                style={{ width: "100%", height: "20vh" }}
                src={path}
                alt="men"
              />
            }
          >
            <ArrowUpOutlined className="arrow-link-custom" />
          </Card>
          <Card>
            <ArrowUpOutlined className="arrow-link-custom" />
          </Card>
          <Card>
            <ArrowUpOutlined className="arrow-link-custom" />

            <div>
              <h2 className="second-left-sales">Sales</h2>
            </div>
          </Card>
        </div>
        <div className="content-center-div">
          <Card>
            <h1>New Collectios</h1>
          </Card>
        </div>
        <div className="content-right-div">
          <Card>
            <div className="first-right-content">
              <ArrowUpOutlined className="arrow-link-custom" />
            </div>
            <h2 className="second-right-content">Catalogue</h2>
          </Card>
          <Card>
            <Carousel dotPosition={"bottom"} autoplay dots>
              <div>
                {/* <h3 className="carousel-content">1</h3> */}
                <img src="https://via.placeholder.com/400X450" alt="Image1" />
              </div>
              <div>
                {/* <h3 className="carousel-content">2</h3> */}
                <img src="https://via.placeholder.com/400X450" alt="Image2" />
              </div>
              <div>
                <img src="https://via.placeholder.com/400X450" alt="Image3" />
                {/* <h3 className="carousel-content">3</h3> */}
              </div>
            </Carousel>
          </Card>
        </div>
      </div>
    </div>
  );
}

function ItemList() {
  return (
    <div className=" grid grid-colums-4 item  ">
      {products.map((Item) => (
        <Newitem Item={Item} key={Item.id} />
      ))}
    </div>
  );
}
function Itemheading({ heading, more }) {
  return (
    <div className="content-second">
      <div className="content-second-top">
        <div className="content-second-h2">
          <h2>{heading}</h2>
        </div>
        <div className="content-second-left">
          <div>
            <h2 className="second-left-more">{more}</h2>
          </div>

          <div className="content-left-child">
            <ArrowRightOutlined />
          </div>
        </div>
      </div>
    </div>
  );
}
function Newitem({ Item }) {
  return (
    <div className="item-list">
      <div className="items-wrap">
        <img src={Item.Image} alt="product"></img>
      </div>
      <div className="items-content">
        <div className="items-color">
          <div>
            <ul>
              {Item.color.map((color) => (
                <Colorpalette color={color} />
              ))}
            </ul>
          </div>
          <div className="heart-icon">
            <HeartOutlined />
          </div>
        </div>
        <div>
          <h2>{Item.title}</h2>
        </div>
        <div>
          <p>{Item.price}</p>
        </div>
      </div>
    </div>
  );
}

function Colorpalette({ color }) {
  return <li style={{ backgroundColor: color }}></li>;
}

function Customer() {
  return (
    <div className="customer-wrap">
      <div className="container">
        <Itemheading heading={"Customer Reviews"} more={"More"} />
        <div className="grid grid-colums-4 testimonial">
          <div className="testimonial-wrapper">
            <div className="testimonial-icon">
              <StarFilled />
              <StarFilled />
              <StarFilled />
              <StarFilled />
              <StarOutlined />
            </div>
            <div>
              <h2>
                Good evening, THANK YOU for the suit, this is the second one I
                have ordered from you for my husband, he wears it with pleasure,
                once he puts on the overalls, he asks: "Why didn't you buy these
                suits before??!!" The quality is super, the tailoring is super,
                the service is excellent
              </h2>
            </div>
            <div>
              <p>-Harish</p>
            </div>
          </div>
          {/* 2 */}
          <div className="testimonial-wrapper">
            <div className="testimonial-icon">
              <StarFilled />
              <StarFilled />
              <StarFilled />
              <StarFilled />
              <StarOutlined />
            </div>
            <div>
              <h2>
                After almost a month of wearing the suit, we can say with
                confidence that the quality is incredible, it is extremely
                comfortable and moderately warm. Thank you very much for your
                work
              </h2>
            </div>
            <div>
              <p>-sanjai</p>
            </div>
          </div>
          {/* 3 */}
          <div className="testimonial-wrapper">
            <div className="testimonial-icon">
              <StarFilled />
              <StarFilled />
              <StarFilled />
              <StarFilled />
              <StarOutlined />
            </div>
            <div>
              <h2>
                Good evening, this is the second order from you for my husband
                he asks: "Why didn't you buy these suits before??!!" The quality
                is super, the tailoring is super, the service is excellent
              </h2>
            </div>
            <div>
              <p>-Arun</p>
            </div>
          </div>
          {/* 4 */}
          <div className="testimonial-wrapper">
            <div className="testimonial-icon">
              <StarFilled />
              <StarFilled />
              <StarFilled />
              <StarFilled />
              <StarOutlined />
            </div>
            <div>
              <h2>
                Good day. I received the suit, I am satisfied!!! I have already
                recommended your store to friends Thank you, your work is top
                notch.
              </h2>
            </div>
            <div>
              <p>-Sam</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const questions = [
  {
    id: 9191,
    questions: "Where can I buy clothes ?",
    answer: "You can order clothes in the website or in our instagram store",
  },
  {
    id: 9192,
    questions: "Can I return or exchange the product ?",
    answer: "You can order clothes in the website or in our instagram store",
  },
  {
    id: 9193,
    questions: "How can I pay for my order ?",
    answer: "You can order clothes in the website or in our instagram store",
  },
  {
    id: 9194,
    questions: "How is the delivery made ?",
    answer: "You can order clothes in the website or in our instagram store",
  },
  {
    id: 9195,
    questions: "Is it possible to pick up the product from the warehouse?",
    answer: "You can order clothes in the website or in our instagram store",
  },
];
function Faq() {
  return (
    <div className="container grid  faq-wrap">
      <div>
        <div>
          <h2>Frequently asked questions</h2>
        </div>
        {questions.map((item) => (
          <Acoordian item={item} key={item.id} />
        ))}
      </div>
      <div>
        <img
          src="https://s3-alpha-sig.figma.com/img/4d8e/9d5d/c795e9ec3d192211d9504a20b215faa0?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aUrmsspLtOU~smgB1kksl6huSC0jVKFVhodKyx1CHHxy6V5b64JM9zoiqG8kr12LrcUvo7mUlmqtH1hoGVzPQoyLcqw9iQ7f7OFi8OLCVkZDQpwI8eKoT5Ga6GMgMWjdZ2VoYqjibv7YejFoQ2k3LZzd2NSJ9WI72R-89GBmFns8IuJlVxTaHrOZ-svgTGdL9j~DlwaQOkUgSdZXxU00xQo2imGWQtR02hpugDu5IrlkZKchXutXINAs0p8iH1368UKcSZKXsvJaL7xJ7R3qQsnwibyI7J4A4omsVcBW1R5K5Cv16DTZsSkKITruxNzcjcRxqO3g2nNGS41RPeKinA__"
          alt="shirts"
        ></img>
      </div>
    </div>
  );
}

const questionStyle = {
  display: "flex",
  justifyContent: "space-Between",
  cursor: "pointer",
};
function Acoordian({ item }) {
  const [toggle, setToggle] = useState(false);
  function handler({ item }) {
    setToggle((item) => !item);
  }

  return (
    <div>
      <div
        className="trans"
        style={questionStyle}
        onClick={() => handler(item)}
      >
        <span>
          <p>{item.questions}</p>
          {toggle && (
            <span className="anwser-span">
              <p className="faq-answers">{item.answer}</p>
            </span>
          )}
        </span>
        <span>
          <p className="pointer">{toggle ? "-" : "+"}</p>
        </span>
      </div>
      <hr />
    </div>
  );
}

function Footer() {
  return (
    <div className="footer">
      <div className="container grid footer-wrap">
        <div className="footer-content">
          <h2>Contact</h2>
          <ul>
            <li>+91 88473 86749</li>
            <li>contact@eloxey.com</li>
            <li>Chennai, India</li>
          </ul>
        </div>
        <div className="footer-content">
          <h2>About the store</h2>
          <ul>
            <li>About us</li>
            <li>Customer reviews</li>
            <li>Contacts</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div className="footer-content">
          <h2>To Buyers</h2>
          <ul>
            <li>Delivery and payment</li>
            <li>Exchange and return</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content">
          <h2>Catalogue</h2>
          <ul className="grid grid-colums-4 footer-items ">
            <li>
              <span>Shirts</span>
            </li>
            <li>
              <span> T-Shirts</span>
            </li>
            <li>
              <span>Pants</span>
            </li>
            <li>
              <span>Shorts</span>
            </li>
            <li>
              <span>For men</span>
            </li>
            <li>
              <span>For women</span>
            </li>
            <li>
              <span>For kids</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="container footer-copyrights">
        <div>
          <h1>ELOXEY brand</h1>
        </div>
        <div className="footer-1">
          <h3>© 2024 Eloxey Brand. All rights reserved.</h3>
        </div>
      </div>
    </div>
  );
}
export default Home;
