import IndexTemplate from "src/templates/IndexTemplate";
import { IgApiClient } from "instagram-private-api";
import { GetStaticProps } from "next";

export default function Home() {
  return <IndexTemplate />;
}

// export const getStaticProps: GetStaticProps = async () => {
//   let postsUrl = [];
//   try {
//     const ig = new IgApiClient();
//     ig.state.generateDevice(process.env.NEXT_PUBLIC_INSTAGRAM_USERNAME!);
//     const loggedInUser = await ig.account.login(
//       process.env.NEXT_PUBLIC_INSTAGRAM_USERNAME!,
//       process.env.NEXT_PUBLIC_INSTAGRAM_PW!
//     );

//     const igFeed = ig.feed.user(loggedInUser.pk);

//     const igPosts = await igFeed.items();

//     for (let i = 0; i < 3; i++) {
//       const images = igPosts[i].image_versions2.candidates;
//       const first_image_size = images[0].height + images[0].width;
//       const second_image_size = images[1].height + images[1].width;

//       if (first_image_size > second_image_size) {
//         postsUrl.push(images[0].url);
//       } else {
//         postsUrl.push(images[1].url);
//       }
//     }
//   } catch (error) {
//     console.error(error);
//   }
//   return {
//     props: {
//       igPostsUrl: postsUrl,
//     },
//     revalidate: 60, //60 seconds
//   };
// };
