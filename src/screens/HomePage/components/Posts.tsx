import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Post from "./Post";

interface PostsProps {}

const POSTS = [
  {
    user: {
      imageUrl:
        "https://instagram.fist1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/123129473_1761419347342849_9037168414721799359_n.jpg?tp=1&_nc_ht=instagram.fist1-1.fna.fbcdn.net&_nc_ohc=VLCt_hG8lZIAX_JwhHl&edm=AEF8tYYBAAAA&ccb=7-4&oh=7dfe5ec0a12b9a5627625d9a112c7c82&oe=60E73FD9&_nc_sid=a9513d",
      name: "9gang",
    },
    post: {
      images: [
        "https://instagram.fist1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/209831209_317468340084101_1051077811674361845_n.jpg?tp=1&_nc_ht=instagram.fist1-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=9mEqa2_icyAAX-S4V5x&edm=AP_V10EBAAAA&ccb=7-4&oh=2cc2a4171dca813322aca6fefd78d472&oe=60E646A0&_nc_sid=4f375e",
      ],
      likedBy: "mustafavrr",
      comments: [
        {
          username: "selnanz",
          body: "kesin böylesin",
        },
      ],
      commentCount: 36,
      createdDate: "2021-07-19:22:26.362Z",
    },
  },
  {
    user: {
      imageUrl:
        "https://instagram.fist1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/206379226_3928598820573508_8992779754713155395_n.jpg?tp=1&_nc_ht=instagram.fist1-1.fna.fbcdn.net&_nc_ohc=xBQuHa7p7UwAX9jX247&edm=AAeKFY8BAAAA&ccb=7-4&oh=64fa7f4956cc5cc7afa56fa6f3878892&oe=60E73D74&_nc_sid=c982ba",
      name: "hastalik_bufutbol",
    },
    post: {
      images: [
        "https://instagram.fist1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s750x750/210580877_495462865089599_4062836056727202989_n.jpg?tp=1&_nc_ht=instagram.fist1-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=AED2wPoGXeUAX_Viht5&edm=AAeKFY8BAAAA&ccb=7-4&oh=884b2c7009369548c51114d7aeadee77&oe=60E6C23E&_nc_sid=c982ba",
        "https://instagram.fist1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/209995153_630397144584776_3297695048135535007_n.jpg?tp=1&_nc_ht=instagram.fist1-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=yl7uhM1NmcQAX-cd2RC&edm=AAeKFY8BAAAA&ccb=7-4&oh=faa37b7d711dcdb657ca749acf6707b0&oe=60E729B0&_nc_sid=c982ba",
        "https://instagram.fist1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/210352438_4658640837498633_4033965030161997945_n.jpg?tp=1&_nc_ht=instagram.fist1-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=dWcoW6at_ZAAX_lYU0G&tn=hVRdPgI3BYoFMwoO&edm=AAeKFY8BAAAA&ccb=7-4&oh=05314fb77f9cf1bc0f6fc81f31e0b18a&oe=60E66CF3&_nc_sid=c982ba",
        "https://instagram.fist1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/210088757_3889928564466202_789841448197374798_n.jpg?tp=1&_nc_ht=instagram.fist1-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=QHZc0kTQpXcAX-RVgD1&edm=AAeKFY8BAAAA&ccb=7-4&oh=e8e6d7af053f8a12451b823aa7d9b65a&oe=60E61CC0&_nc_sid=c982ba",
        "https://instagram.fist1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s750x750/209914258_164091388987203_6792987934563582808_n.jpg?tp=1&_nc_ht=instagram.fist1-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=5-EVVV6KoPAAX86QsUQ&edm=AAeKFY8BAAAA&ccb=7-4&oh=c757a7f7fe80bb0b6d183c55a019579b&oe=60E68A60&_nc_sid=c982ba",
        "https://instagram.fist1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s750x750/209340982_786387308701498_8167499490562621859_n.jpg?tp=1&_nc_ht=instagram.fist1-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=Xm2EgK7nGzAAX_Gy7oG&edm=AAeKFY8BAAAA&ccb=7-4&oh=f1e2337d0ed6480288dcf4b53a6ad425&oe=60E7303A&_nc_sid=c982ba",
      ],
      likedBy: "einzeln_1",
      comments: [
        {
          username: "talhabaturalpisik",
          body: "evet",
        },
        {
          username: "mert.tknr",
          body: "@rhymgedon Bu kalitesiz takımlarda çalıştığı gerçeğini değiştiriyor mu :d?",
        },
      ],
      commentCount: 239,
      createdDate: "2021-07-02T16:22:26.362Z",
    },
  },
];

export default function Posts() {
  return (
    <ScrollView>
      {POSTS.map((post, index) => (
        <Post {...{ post }} key={index} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
