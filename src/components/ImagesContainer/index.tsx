// @ts-ignore
import Lightbox from "react-awesome-lightbox";
import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";

const ImgContainer = styled.section`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-top: 1rem;
  gap: 1rem;

  div {
    width: 124px;
    height: 124px;
    margin: 0 !important;
    padding: 0 !important;
    border-radius: 5px;
    overflow: hidden;
    transition: opacity 0.3s;

    :hover {
      opacity: 0.8;
    }

    img {
      height: 100%;
      width: 100%;
      box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.3);
      object-fit: cover;
      transition: 0.3s;
      cursor: pointer;

      :hover {
        transform: scale(1.05);
      }
    }
  }
  @media (max-width: 480px) {
    justify-content: center;
  }
`;

interface ImagesContainerProps {
  title: string;
  images: string[];
  path: string;
}

export default function ImagesContainer({ title, images, path }: ImagesContainerProps) {
  const [selectedImage, setSelectedImage] = useState("");
  const formatedPath = path.slice(-1) === "/" ? path.slice(0, -1) : path;

  return (
    <>
      <ImgContainer>
        {images.map((img) => (
          <div key={img} onClick={() => setSelectedImage(`${formatedPath}/${img}`)}>
            <Image
              src={`${formatedPath}/${img}`}
              width={215}
              height={202}
              alt={`foto ilustrativa de ${title}`}
            />
          </div>
        ))}
      </ImgContainer>
      <Lightbox image={selectedImage} title={title} onClose={() => setSelectedImage("")} />
    </>
  );
}
