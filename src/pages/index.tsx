import Head from "next/head";
import Image from "next/image";

import Footer from "@components/Footer";
import DefaultContainer from "@components/DefaultContainer";
import Carousel from "@components/Carousel";
import Header from "@components/Header";
import DefaultButton from "@components/Buttons/DefaultButton";
import FixedBackground from "@components/FixedBackground";
import { AiOutlineInfoCircle as InfoIcon } from "react-icons/ai";
import { BsTools as TollBoxIcon } from "react-icons/bs";

import { BannerSection, Container } from "@rootStyle/home";
import { ProductsSection, ProductImg, ProductLink } from "src/templates/IndexTemplate/productsSectionStyles";
import { SectionContainer, SubSection, CompanyInfo } from "src/templates/IndexTemplate/servicesSectionStyles";

import Thumbs1 from "@images/thumbs.png";
import Thumbs2 from "@images/thumbs2.png";
import StickyBg from "@images/sticky_bg.jpg";

import thumb1 from "@images/products/1.png";
import thumb2 from "@images/products/2.png";
import thumb3 from "@images/products/3.png";
import thumb4 from "@images/products/4.png";
import thumb5 from "@images/products/5.png";
import thumb6 from "@images/products/6.png";
import thumb7 from "@images/products/7.png";
import thumb8 from "@images/products/8.png";
import Link from "next/link";
import IndexTemplate from "src/templates/IndexTemplate";

export default function Home() {
  return <IndexTemplate />;
}
